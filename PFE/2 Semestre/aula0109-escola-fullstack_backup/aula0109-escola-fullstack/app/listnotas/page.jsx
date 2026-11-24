'use client';
import { useState, useEffect } from 'react';
import Header from "../components/header";
import { useRouter } from 'next/navigation';

export default function ListNotas() {
  const [notas, setNotas] = useState([]);
  const router = useRouter();

  useEffect(() => {
    buscarNotas()
  }, [])//toda vez que a tela for recarregada

  async function buscarNotas() {
    const resposta = await fetch('/api/notas');
    const dados = await resposta.json();

    setNotas(dados);
  }

  function editarNota(id_nota) {
    router.push(`/editnotas/${id_nota}`);
  }

  async function excluirNota(event) {
    event.preventDefault();
    if (!confirm("Deseja realmente excluir esta nota?")) {
      return;
    }
    const resposta = await fetch("/api/notas", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_notas: event.target.dataset.id,
      }),
    });

    const dados = await resposta.json();

    alert(dados.mensagem || dados.erro);

    buscarNotas();
  }

  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Header />

      <section style={{ backgroundColor: "#D32F2F", color: "#FFF", padding: "30px 20px", textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Lista de Notas</h2>
        <p style={{ margin: "5px 0 0", opacity: 0.9, fontSize: "1rem" }}>
          Desempenho dos alunos nas avaliações e trabalhos
        </p>
      </section>

      <main style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}>
        <div style={{
          backgroundColor: "#FFF",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderTop: "5px solid #D32F2F",
          overflowX: "auto",
          padding: "20px"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #D32F2F" }}>
                <th style={thStyle}>Aluno</th>
                <th style={thStyle}>RA</th>
                <th style={thStyle}>T1</th>
                <th style={thStyle}>T2</th>
                <th style={thStyle}>N1</th>
                <th style={thStyle}>N2</th>
                <th style={thStyle}>N3</th>
                <th style={{ ...thStyle, textAlign: "center" }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {notas ? (notas.map((nota) => (
                <tr key={nota.id_notas} style={{ borderBottom: "1px solid #EEE" }}>
                  <td style={{ ...tdStyle, fontWeight: "bold", color: "#222" }}>{nota.id_notas}</td>
                  <td style={tdStyle}>{nota.nome}</td>
                  <td style={tdStyle}>{nota.t1}</td>
                  <td style={tdStyle}>{nota.t2}</td>
                  <td style={tdStyle}>{nota.n1}</td>
                  <td style={tdStyle}>{nota.n2}</td>
                  <td style={tdStyle}>{nota.n3}</td>
                  <td style={{ ...tdStyle, textAlign: "center", display: "flex", gap: "8px", justifyContent: "center" }}>
                    <button style={btnEditarStyle} onClick={() => editarNota(nota.id_notas)}>Editar</button>
                    <button style={btnDeletarStyle} onClick={(e) => excluirNota(e)} data-id={nota.id_notas}>Excluir</button>
                  </td>
                </tr>
              ))) : (
                <tr>
                  <td colSpan="6">Nenhuma rota encontrada</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

const thStyle = { padding: "12px 10px", color: "#D32F2F", fontSize: "0.95rem", fontWeight: "bold" };
const tdStyle = { padding: "12px 10px", color: "#333", fontSize: "0.95rem" };
const btnEditarStyle = { backgroundColor: "#1976D2", color: "#FFF", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer", fontSize: "0.85rem", fontWeight: "bold" };
const btnDeletarStyle = { backgroundColor: "#D32F2F", color: "#FFF", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer", fontSize: "0.85rem", fontWeight: "bold" };