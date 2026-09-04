'use client';
import { useState } from 'react';
import Header from '../components/header';

export default function CadAlunos() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de salvamento aqui
    };

    return (
        <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            <Header />

            {/* Topo / Banner Simples */}
            <section style={{ backgroundColor: "#D32F2F", color: "#FFF", padding: "30px 20px", textAlign: "center" }}>
                <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Cadastro de Alunos</h2>
                <p style={{ margin: "5px 0 0", opacity: 0.9, fontSize: "1rem" }}>
                    Preencha os dados do estudante abaixo
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
                        <label htmlFor="idade" style={labelStyle}>Idade</label>
                        <input 
                            id="idade"
                            type="number" 
                            value={idade} 
                            onChange={(e) => setIdade(e.target.value)} 
                            placeholder="Ex: 12"
                            style={inputStyle} 
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="serie" style={labelStyle}>Série / Turma</label>
                        <input 
                            id="serie"
                            type="text" 
                            value={serie} 
                            onChange={(e) => setSerie(e.target.value)} 
                            placeholder="Ex: 7º Ano A"
                            style={inputStyle} 
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <label htmlFor="ra" style={labelStyle}>RA (Registro Acadêmico)</label>
                        <input 
                            id="ra"
                            type="number" 
                            value={ra} 
                            onChange={(e) => setRa(e.target.value)} 
                            placeholder="Digite o número do RA"
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
                        Salvar Aluno
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