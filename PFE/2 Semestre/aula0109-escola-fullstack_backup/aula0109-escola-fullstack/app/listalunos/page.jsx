'use client';

import { useState, useEffect } from 'react';
import Header from "../components/header";

export default function ListAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Função para buscar os alunos cadastrados na API
  async function carregarAlunos() {
    try {
      const resposta = await fetch("/api/alunos");
      if (resposta.ok) {
        const dados = await resposta.json();
        setAlunos(dados);
      } else {
        alert("Erro ao carregar a lista de alunos.");
      }
    } catch (error) {
      console.error("Erro na busca:", error);
    } finally {
      setCarregando(false);
    }
  }

  // Executa o carregarAlunos assim que a página abre
  useEffect(() => {
    carregarAlunos();
  }, []);

  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Header />

      {/* Topo / Banner */}
      <section style={{ backgroundColor: "#D32F2F", color: "#FFF", padding: "30px 20px", textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Lista de Alunos</h2>
        <p style={{ margin: "5px 0 0", opacity: 0.9, fontSize: "1rem" }}>
          Gerencie e visualize os estudantes cadastrados
        </p>
      </section>

      {/* Conteúdo da Tabela */}
      <main style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
        <div style={{
          backgroundColor: "#FFF",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderTop: "5px solid #D32F2F",
          overflowX: "auto",
          padding: "20px"
        }}>
          {carregando ? (
            <p style={{ textAlign: "center", color: "#666" }}>Carregando alunos...</p>
          ) : alunos.length === 0 ? (
            <p style={{ textAlign: "center", color: "#666" }}>Nenhum aluno cadastrado ainda.</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #D32F2F" }}>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Nome</th>
                  <th style={thStyle}>Idade</th>
                  <th style={thStyle}>Série</th>
                  <th style={thStyle}>RA</th>
                  <th style={{ ...thStyle, textAlign: "center" }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {alunos.map((aluno) => (
                  <tr key={aluno.id || aluno.ra} style={{ borderBottom: "1px solid #EEE" }}>
                    <td style={tdStyle}>{aluno.id}</td>
                    <td style={{ ...tdStyle, fontWeight: "bold", color: "#222" }}>{aluno.nome}</td>
                    <td style={tdStyle}>{aluno.idade}</td>
                    <td style={tdStyle}>{aluno.serie}</td>
                    <td style={tdStyle}>{aluno.ra}</td>
                    <td style={{ ...tdStyle, textAlign: "center", display: "flex", gap: "8px", justifyContent: "center" }}>
                      <button style={btnEditarStyle}>Editar</button>
                      <button style={btnDeletarStyle}>Deletar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}

const thStyle = {
  padding: "12px 10px",
  color: "#D32F2F",
  fontSize: "0.95rem",
  fontWeight: "bold"
};

const tdStyle = {
  padding: "12px 10px",
  color: "#333",
  fontSize: "0.95rem"
};

const btnEditarStyle = {
  backgroundColor: "#1976D2",
  color: "#FFF",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.85rem",
  fontWeight: "bold"
};

const btnDeletarStyle = {
  backgroundColor: "#D32F2F",
  color: "#FFF",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.85rem",
  fontWeight: "bold"
};