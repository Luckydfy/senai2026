import db from "../../db/banco";
import { NextResponse } from "next/server";

// GET - Busca notas e dados do aluno
export async function GET() {
    try {
        const sql = db.prepare(`
            SELECT 
                notas.rowid AS id, 
                alunos.nome, 
                alunos.ra, 
                notas.t1, 
                notas.t2, 
                notas.n1, 
                notas.n2, 
                notas.n3 
            FROM notas
            INNER JOIN alunos ON notas.aluno_id = alunos.id_aluno
            ORDER BY alunos.nome
        `);

        const notas = sql.all();
        return NextResponse.json(notas);
    } catch (error) {
        console.error("Erro ao buscar notas: ", error);
        return NextResponse.json({ erro: "Erro ao buscar notas." }, { status: 500 });
    }
}

// POST - Salva novas notas
export async function POST(request) {
    try {
        const dados = await request.json();
        const alunoId = dados.id_aluno || dados.aluno_id;

        const sql = db.prepare(`
            INSERT INTO notas (aluno_id, t1, t2, n1, n2, n3) 
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        sql.run(
            alunoId,
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3
        );

        return NextResponse.json({
            mensagem: 'Notas salvas com sucesso!'
        }, { status: 201 });
    } catch (error) {
        console.error('Erro ao salvar notas: ', error);
        return NextResponse.json({ erro: 'Erro ao salvar notas.' }, { status: 500 });
    }
}

// PUT - Atualiza as notas
export async function PUT(request) {
    try {
        const dados = await request.json();
        const idNota = dados.id_nota || dados.id;

        const sql = db.prepare(`
            UPDATE notas
            SET t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ?
            WHERE rowid = ? OR aluno_id = ?
        `);

        sql.run(
            dados.t1, 
            dados.t2, 
            dados.n1, 
            dados.n2, 
            dados.n3, 
            idNota,
            dados.id_aluno || idNota
        );

        return NextResponse.json({
            mensagem: "Notas atualizadas com sucesso!"
        });
    } catch (error) {
        console.error('Erro ao editar notas: ', error);
        return NextResponse.json({ erro: "Erro ao editar notas." }, { status: 500 });
    }
}

// DELETE - Remove notas
export async function DELETE(request) {
    try {
        const dados = await request.json();
        const idNota = dados.id_nota || dados.id || dados.id_aluno;

        const sql = db.prepare(`DELETE FROM notas WHERE rowid = ? OR aluno_id = ?`);
        sql.run(idNota, idNota);

        return NextResponse.json({
            mensagem: "Notas excluídas com sucesso!"
        });
    } catch (error) {
        console.error('Erro ao excluir notas: ', error);
        return NextResponse.json({ erro: "Erro ao excluir notas." }, { status: 500 });
    }
}