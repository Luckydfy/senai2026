import db from "../../db/banco";
import { NextResponse } from "next/server";

// GET - Listar notas com dados dos alunos
export async function GET() {
    try {
        const notas = db.prepare(`
            SELECT notas.id, alunos.nome, alunos.ra, notas.aluno_id, notas.t1, notas.t2, notas.n1, notas.n2, notas.n3 
            FROM notas 
            INNER JOIN alunos ON notas.aluno_id = alunos.id 
            ORDER BY alunos.nome
        `).all();

        return NextResponse.json(notas);
    } catch (error) {
        console.error('Erro ao listar notas:', error);
        return NextResponse.json({ error: 'Erro ao buscar notas.' }, { status: 500 });
    }
}

// POST - Criar registro de nota para um aluno
export async function POST(request) {
    try {
        const dados = await request.json();

        if (!dados.aluno_id) {
            return NextResponse.json({ error: 'ID do aluno é obrigatório.' }, { status: 400 });
        }

        const sql = db.prepare(`
            INSERT INTO notas (aluno_id, t1, t2, n1, n2, n3) 
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        const resultado = sql.run(
            dados.aluno_id,
            dados.t1 ?? null,
            dados.t2 ?? null,
            dados.n1 ?? null,
            dados.n2 ?? null,
            dados.n3 ?? null
        );

        return NextResponse.json({ 
            message: 'Nota salva com sucesso!',
            id: resultado.lastInsertRowid 
        }, { status: 201 });
    } catch (error) {
        console.error('Erro ao salvar nota:', error);
        return NextResponse.json({ error: 'Erro ao salvar nota.' }, { status: 500 });
    }
}

// PUT - Atualizar as notas de um registro existente
export async function PUT(request) {
    try {
        const dados = await request.json();

        if (!dados.id) {
            return NextResponse.json({ error: 'ID da nota é obrigatório para atualização.' }, { status: 400 });
        }

        const sql = db.prepare(`
            UPDATE notas 
            SET t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ? 
            WHERE id = ?
        `);

        const resultado = sql.run(
            dados.t1 ?? null,
            dados.t2 ?? null,
            dados.n1 ?? null,
            dados.n2 ?? null,
            dados.n3 ?? null,
            dados.id
        );

        if (resultado.changes === 0) {
            return NextResponse.json({ error: 'Registro de nota não encontrado.' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Notas atualizadas com sucesso!' });
    } catch (error) {
        console.error('Erro ao editar notas:', error);
        return NextResponse.json({ error: 'Erro ao atualizar notas.' }, { status: 500 });
    }
}

// DELETE - Remover um registro de nota pelo ID
export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID da nota é obrigatório para remoção.' }, { status: 400 });
        }

        const sql = db.prepare('DELETE FROM notas WHERE id = ?');
        const resultado = sql.run(id);

        if (resultado.changes === 0) {
            return NextResponse.json({ error: 'Registro de nota não encontrado.' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Nota excluída com sucesso!' });
    } catch (error) {
        console.error('Erro ao excluir nota:', error);
        return NextResponse.json({ error: 'Erro ao excluir nota.' }, { status: 500 });
    }
}