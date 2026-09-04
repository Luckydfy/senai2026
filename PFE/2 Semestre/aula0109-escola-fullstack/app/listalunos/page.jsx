'use client';
import Header from "../components/header";

export default function ListAlunos() {
  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Header />

      {/* Topo / Banner Simples */}
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
              <tr style={{ borderBottom: "1px solid #EEE" }}>
                <td style={tdStyle}>1</td>
                <td style={{ ...tdStyle, fontWeight: "bold", color: "#222" }}>João</td>
                <td style={tdStyle}>15</td>
                <td style={tdStyle}>9º Ano</td>
                <td style={tdStyle}>12345</td>
                <td style={{ ...tdStyle, textAlign: "center", display: "flex", gap: "8px", justifyContent: "center" }}>
                  <button style={btnEditarStyle}>Editar</button>
                  <button style={btnDeletarStyle}>Deletar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// Estilos reutilizáveis para a tabela e botões
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
  backgroundColor: "#1976D2", // Azul discreto para edição
  color: "#FFF",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.85rem",
  fontWeight: "bold"
};

const btnDeletarStyle = {
  backgroundColor: "#D32F2F", // Vermelho SESI para deletar
  color: "#FFF",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.85rem",
  fontWeight: "bold"
};