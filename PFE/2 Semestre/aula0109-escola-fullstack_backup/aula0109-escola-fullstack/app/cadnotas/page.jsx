'use client';
import { useState } from 'react';
import Header from '../components/header';

export default function CadNotas() {
    const [nome, setNome] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de salvamento aqui
    };

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
                    onSubmit={handleSubmit}
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
                        <label htmlFor="nome" style={labelStyle}>Nome Completo</label>
                        <input 
                            id="nome"
                            type="text" 
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            placeholder="Digite o nome do aluno"
                            style={inputStyle} 
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="t1" style={labelStyle}>Trabalho 1</label>
                        <input 
                            id="t1"
                            type="number" 
                            value={t1} 
                            onChange={(e) => setT1(e.target.value)} 
                            placeholder="Digite a nota do Trabalho 1"
                            style={inputStyle} 
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="t2" style={labelStyle}>Trabalho 2</label>
                        <input 
                            id="t2"
                            type="number" 
                            value={t2} 
                            onChange={(e) => setT2(e.target.value)} 
                            placeholder="Digite a nota do Trabalho 2"
                            style={inputStyle} 
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="nota1" style={labelStyle}>Nota 1 (Avaliação)</label>
                        <input 
                            id="nota1"
                            type="number" 
                            value={nota1} 
                            onChange={(e) => setNota1(e.target.value)} 
                            placeholder="Digite a Nota 1"
                            style={inputStyle} 
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="nota2" style={labelStyle}>Nota 2 (Avaliação)</label>
                        <input 
                            id="nota2"
                            type="number" 
                            value={nota2} 
                            onChange={(e) => setNota2(e.target.value)} 
                            placeholder="Digite a Nota 2"
                            style={inputStyle} 
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="nota3" style={labelStyle}>Nota 3 (Avaliação)</label>
                        <input 
                            id="nota3"
                            type="number" 
                            value={nota3} 
                            onChange={(e) => setNota3(e.target.value)} 
                            placeholder="Digite a Nota 3"
                            style={inputStyle} 
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