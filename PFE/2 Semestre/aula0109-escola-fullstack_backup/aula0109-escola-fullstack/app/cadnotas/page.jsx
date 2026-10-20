'use client';

import { useState } from 'react';
import Header from '../components/header';

export default function CadNotas() {
    const [id_aluno, setIdAluno] = useState('');
    const [t1, sett1] = useState('');
    const [t2, sett2] = useState('');
    const [n1, setn1] = useState('');
    const [n2, setn2] = useState('');
    const [n3, setn3] = useState('');

    async function cadastrarNotas(event) {
        event.preventDefault();

        try {
            const resposta = await fetch("/api/notas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_aluno,
                    t1,
                    t2,
                    n1,
                    n2,
                    n3
                })
            });

            const dados = await resposta.json();
            alert(dados.mensagem || dados.erro || "Operação realizada!");

            if (resposta.ok) {
                setIdAluno('');
                sett1('');
                sett2('');
                setn1('');
                setn2('');
                setn3('');
            }
        } catch (error) {
            console.error("Erro ao cadastrar notas:", error);
            alert("Erro ao conectar com o servidor.");
        }
    }

    return (
        <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            <Header />

            {/* Topo / Banner Simples */}
            <section style={{ backgroundColor: "#D32F2F", color: "#FFF", padding: "30px 20px", textAlign: "center" }}>
                <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Cadastro de Notas</h2>
                <p style={{ margin: "5px 0 0", opacity: 0.9, fontSize: "1rem" }}>
                    Preencha os dados das notas e trabalhos dos estudantes
                </p>
            </section>

            {/* Conteúdo do Formulário */}
            <main style={{ maxWidth: "500px", margin: "40px auto", padding: "0 20px" }}>
                <form 
                    onSubmit={cadastrarNotas}
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
                        <label htmlFor="id_aluno" style={labelStyle}>ID do Aluno</label>
                        <input
                            id="id_aluno"
                            type="text"
                            value={id_aluno}
                            onChange={(e) => setIdAluno(e.target.value)}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="t1" style={labelStyle}>Trabalho 1</label>
                        <input
                            id="t1"
                            type="number"
                            step="0.1"
                            value={t1}
                            onChange={(e) => sett1(e.target.value)}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="t2" style={labelStyle}>Trabalho 2</label>
                        <input
                            id="t2"
                            type="number"
                            step="0.1"
                            value={t2}
                            onChange={(e) => sett2(e.target.value)}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="n1" style={labelStyle}>Nota 1</label>
                        <input
                            id="n1"
                            type="number"
                            step="0.1"
                            value={n1}
                            onChange={(e) => setn1(e.target.value)}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="n2" style={labelStyle}>Nota 2</label>
                        <input
                            id="n2"
                            type="number"
                            step="0.1"
                            value={n2}
                            onChange={(e) => setn2(e.target.value)}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="n3" style={labelStyle}>Nota 3</label>
                        <input
                            id="n3"
                            type="number"
                            step="0.1"
                            value={n3}
                            onChange={(e) => setn3(e.target.value)}
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
                        Salvar Notas
                    </button>
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