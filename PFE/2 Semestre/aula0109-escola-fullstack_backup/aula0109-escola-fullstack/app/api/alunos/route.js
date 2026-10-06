import db from "../../db/banco";
import { NextResponse } from "next/server";

// GET - Listar todos os alunos
export async function GET() {
    try {
        const alunos = db.prepare('SELECT * FROM alunos ORDER BY nome').all();
        return NextResponse.json(alunos);
    } catch (error) {
        console.error('Erro ao listar alunos:', error);
        return NextResponse.json({ error: 'Erro ao buscar alunos.' }, { status: 500 });
    }
}

// POST - Criar um novo aluno
export async function POST(request) {
    try {
        const dados = await request.json();
        
        if (!dados.nome || !dados.ra) {
            return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 });
        }

        const sql = db.prepare('INSERT INTO alunos (nome, idade, serie, ra) VALUES (?, ?, ?, ?)');
        const resultado = sql.run(
            dados.nome,
            dados.idade,
            dados.serie,
            dados.ra
        );

        return NextResponse.json({ 
            message: 'Aluno salvo com sucesso!',
            id: resultado.lastInsertRowid 
        }, { status: 201 });
    } catch (error) {
        console.error('Erro ao salvar aluno:', error);
        return NextResponse.json({ error: 'Erro ao salvar aluno.' }, { status: 500 });
    }
}

// PUT - Editar dados de um aluno existente
export async function PUT(request) {
    try {
        const dados = await request.json();

        if (!dados.id) {
            return NextResponse.json({ error: 'ID do aluno é obrigatório para atualização.' }, { status: 400 });
        }

        const sql = db.prepare('UPDATE alunos SET nome = ?, idade = ?, serie = ?, ra = ? WHERE id = ?');
        const resultado = sql.run(
            dados.nome,
            dados.idade,
            dados.serie,
            dados.ra,
            dados.id
        );

        if (resultado.changes === 0) {
            return NextResponse.json({ error: 'Aluno não encontrado.' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Aluno atualizado com sucesso!' });
    } catch (error) {
        console.error('Erro ao editar aluno:', error);
        return NextResponse.json({ error: 'Erro ao atualizar aluno.' }, { status: 500 });
    }
}

// DELETE - Remover um aluno
export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID do aluno é obrigatório para remoção.' }, { status: 400 });
        }

        const sql = db.prepare('DELETE FROM alunos WHERE id = ?');
        const resultado = sql.run(id);

        if (resultado.changes === 0) {
            return NextResponse.json({ error: 'Aluno não encontrado.' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Aluno excluído com sucesso!' });
    } catch (error) {
        console.error('Erro ao excluir aluno:', error);
        return NextResponse.json({ error: 'Erro ao excluir aluno.' }, { status: 500 });
    }
}