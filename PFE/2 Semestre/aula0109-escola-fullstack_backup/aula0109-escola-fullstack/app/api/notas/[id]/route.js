import db from "@/app/db/banco";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { id } = await params;

        // Busca a nota pelo id_notas ou aluno_id
        const sql = db.prepare(`
            SELECT 
                notas.id_notas,
                notas.aluno_id AS id_aluno,
                notas.t1,
                notas.t2,
                notas.n1,
                notas.n2,
                notas.n3
            FROM notas
            WHERE notas.id_notas = ? OR notas.aluno_id = ?
        `);

        const nota = sql.get(id, id);

        if (!nota) {
            return NextResponse.json(
                { erro: "Nota não encontrada." }, 
                { status: 404 }
            );
        }

        return NextResponse.json(nota);
    } catch (error) {
        console.error("Erro ao buscar nota por ID:", error);
        return NextResponse.json(
            { erro: "Erro ao buscar nota." }, 
            { status: 500 }
        );
    }
}