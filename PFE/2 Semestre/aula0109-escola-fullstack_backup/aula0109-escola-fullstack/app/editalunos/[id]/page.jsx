"use client";

import { useEffect, useState, use } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/header";

export default function EditAlunosPage({ params: paramsPromise }) {
    const router = useRouter();
    const routeParams = useParams();
    const searchParams = useSearchParams();

    // Tenta obter o ID a partir da rota [id] ou de query params (?id=1)
    const resolvedParams = paramsPromise ? use(paramsPromise) : null;
    const id = resolvedParams?.id || routeParams?.id || searchParams?.get("id");

    const [id_aluno, setIdAluno] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [serie, setSerie] = useState("");
    const [ra, setRa] = useState("");
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (id) {
            buscarAluno(id);
        } else {
            setCarregando(false);
        }
    }, [id]);

    async function buscarAluno(idAluno) {
        try {
            setCarregando(true);
            const resposta = await fetch(`/api/alunos/${idAluno}`);

            if (!resposta.ok) {
                alert("Aluno não encontrado!");
                router.push("/listalunos");
                return;
            }

            const dados = await resposta.json();
            setIdAluno(dados.id_aluno || "");
            setNome(dados.nome || "");
            setIdade(dados.idade || "");
            setSerie(dados.serie || "");
            setRa(dados.ra || "");
        } catch (erro) {
            console.error("Erro ao carregar aluno:", erro);
            alert("Erro ao carregar dados do aluno.");
        } finally {
            setCarregando(false);
        }
    }

    async function salvarAluno(event) {
        event.preventDefault();

        if (!id) {
            alert("ID do aluno não foi encontrado.");
            return;
        }

        const resposta = await fetch("/api/alunos", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_aluno,
                nome,
                idade,
                serie,
                ra,
            }),
        });

        const dados = await resposta.json();

        alert(dados.mensagem || dados.erro);

        if (resposta.ok) {
            router.push("/listalunos");
        }
    }

    if (carregando) {
        return (
            <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
                <Header />
                <main style={{ maxWidth: "500px", margin: "40px auto", padding: "0 20px", textAlign: "center" }}>
                    <p style={{ color: "#666", fontSize: "1.1rem" }}>Carregando informações do aluno...</p>
                </main>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            <Header />

            {/* Banner do Topo */}
            <section style={{ backgroundColor: "#D32F2F", color: "#FFF", padding: "30px 20px", textAlign: "center" }}>
                <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Editar Aluno</h2>
                <p style={{ margin: "5px 0 0", opacity: 0.9, fontSize: "1rem" }}>
                    Atualize os dados do estudante selecionado
                </p>
            </section>

            {/* Formulário de Edição */}
            <main style={{ maxWidth: "500px", margin: "40px auto", padding: "0 20px" }}>
                <form 
                    onSubmit={salvarAluno}
                    style={{
                        backgroundColor: "#FFF",
                        padding: "30px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        borderTop: "5px solid #D32F2F",
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px"
                    }}
                >
                    <input type="text" value={id_aluno} onChange={(event) => setIdAluno(event.target.value)} hidden />

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="nome" style={labelStyle}>Nome Completo</label>
                        <input
                            id="nome"
                            type="text"
                            pattern="[A-Za-zÀ-ÿ\s]+"
                            title='Somente letras'
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            placeholder="Digite o nome do aluno"
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="idade" style={labelStyle}>Idade</label>
                        <input
                            id="idade"
                            type="number"
                            min={0}
                            max={120}
                            value={idade}
                            onKeyDown={(e) => {
                                if (e.key === '-' || e.key === 'e' || e.key === 'E') {
                                e.preventDefault();
                                }
                            }}
                            onChange={(event) => setIdade(event.target.value)}
                            placeholder="Ex.: 15"
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="serie" style={labelStyle}>Série / Turma</label>
                        <input
                            id="serie"
                            type="text"
                            value={serie}
                            onChange={(event) => setSerie(event.target.value)}
                            placeholder="Ex.: 3º A"
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="ra" style={labelStyle}>RA (Registro Acadêmico)</label>
                        <input
                            id="ra"
                            type="number"
                            min={1000}
                            max={9999}
                            title="O RA deve conter 4 dígitos."
                            value={ra}
                            onChange={(event) => setRa(event.target.value)}
                            placeholder="Digite o número do RA"
                            style={inputStyle}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        style={{
                            backgroundColor: "#D32F2F",
                            color: "#FFF",
                            border: "none",
                            padding: "12px",
                            borderRadius: "6px",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            marginTop: "10px"
                        }}
                    >
                        Salvar Alterações
                    </button>

                    <Link 
                        href="/listalunos" 
                        style={{
                            textAlign: "center",
                            color: "#666",
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            marginTop: "5px"
                        }}
                    >
                        ← Voltar para a lista
                    </Link>
                </form>
            </main>
        </div>
    );
}

// Estilos reutilizáveis para labels e inputs
const labelStyle = {
    color: "#333333",
    fontWeight: "bold",
    fontSize: "0.95rem"
};

const inputStyle = {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #CCC",
    fontSize: "1rem",
    color: "#222222",
    outline: "none",
    backgroundColor: "#FAFAFA"
};