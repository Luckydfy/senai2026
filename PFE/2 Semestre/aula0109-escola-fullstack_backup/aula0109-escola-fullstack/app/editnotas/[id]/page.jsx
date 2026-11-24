"use client";

import { useEffect, useState, use } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/header";

export default function EditNotasPage({ params: paramsPromise }) {
    const router = useRouter();
    const routeParams = useParams();
    const searchParams = useSearchParams();

    // Tenta obter o ID a partir da rota [id] ou de query params (?id=1)
    const resolvedParams = paramsPromise ? use(paramsPromise) : null;
    const id = resolvedParams?.id || routeParams?.id || searchParams?.get("id");

    const [id_notas, setIdNota] = useState("");
    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (id) {
            buscarNota(id);
        } else {
            setCarregando(false);
        }
    }, [id]);

    async function buscarNota(idNota) {
        try {
            setCarregando(true);
            const resposta = await fetch(`/api/notas/${idNota}`);

            if (!resposta.ok) {
                alert("Notas não encontradas!");
                router.push("/listnotas");
                return;
            }

            const dados = await resposta.json();
            setIdNota(dados.id_notas || "");
            setT1(dados.t1 || "");
            setT2(dados.t2 || "");
            setN1(dados.n1 || "");
            setN2(dados.n2 || "");
            setN3(dados.n3 || "");
        } catch (erro) {
            console.error("Erro ao carregar notas:", erro);
            alert("Erro ao carregar notas do aluno.");
        } finally {
            setCarregando(false);
        }
    }

    async function editarNota(event) {
        event.preventDefault();

        if (!id) {
            alert("ID da nota não foi encontrado.");
            return;
        }

        const resposta = await fetch("/api/notas", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_notas,
                t1,
                t2,
                n1,
                n2,
                n3,
            }),
        });

        const dados = await resposta.json();

        alert(dados.mensagem || dados.erro);

        if (resposta.ok) {
            router.push("/listnotas");
        }
    }

    if (carregando) {
        return (
            <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
                <Header />
                <main style={{ maxWidth: "500px", margin: "40px auto", padding: "0 20px", textAlign: "center" }}>
                    <p style={{ color: "#666", fontSize: "1.1rem" }}>Carregando notas do aluno...</p>
                </main>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            <Header />

            {/* Banner do Topo */}
            <section style={{ backgroundColor: "#D32F2F", color: "#FFF", padding: "30px 20px", textAlign: "center" }}>
                <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Editar Notas</h2>
                <p style={{ margin: "5px 0 0", opacity: 0.9, fontSize: "1rem" }}>
                    Atualize os trabalhos e avaliações do estudante
                </p>
            </section>

            {/* Formulário de Edição */}
            <main style={{ maxWidth: "500px", margin: "40px auto", padding: "0 20px" }}>
                <form 
                    onSubmit={editarNota}
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

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="t1" style={labelStyle}>Trabalho 1</label>
                        <input
                            id="t1"
                            type="number"
                            min={0}
                            step="0.5"
                            value={t1}
                            onChange={(event) => setT1(event.target.value)}
                            placeholder="Nota do Trabalho 1"
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="t2" style={labelStyle}>Trabalho 2</label>
                        <input
                            id="t2"
                            type="number"
                            min={0}
                            step="0.5"
                            value={t2}
                            onChange={(event) => setT2(event.target.value)}
                            placeholder="Nota do Trabalho 2"
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="n1" style={labelStyle}>Nota 1</label>
                        <input
                            id="n1"
                            type="number"
                            min={0}
                            step="0.5"
                            value={n1}
                            onChange={(event) => setN1(event.target.value)}
                            placeholder="Primeira avaliação"
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="n2" style={labelStyle}>Nota 2</label>
                        <input
                            id="n2"
                            type="number"
                            min={0}
                            step="0.5"
                            value={n2}
                            onChange={(event) => setN2(event.target.value)}
                            placeholder="Segunda avaliação"
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="n3" style={labelStyle}>Nota 3</label>
                        <input
                            id="n3"
                            type="number"
                            min={0}
                            step="0.5"
                            value={n3}
                            onChange={(event) => setN3(event.target.value)}
                            placeholder="Terceira avaliação"
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
                        href="/listnotas" 
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