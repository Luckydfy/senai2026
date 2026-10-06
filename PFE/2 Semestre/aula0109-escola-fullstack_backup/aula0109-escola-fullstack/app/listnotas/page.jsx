'use client';
import Header from "../components/header";

export default function ListNotas() {
  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Header />

      {/* Topo / Banner Simples */}
      <section style={{ backgroundColor: "#D32F2F", color: "#FFF", padding: "30px 20px", textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Lista de Notas</h2>
        <p style={{ margin: "5px 0 0", opacity: 0.9, fontSize: "1rem" }}>
          Visualize e gerencie os trabalhos e avaliações dos estudantes
        </p>
      </section>

      {/* Conteúdo da Tabela */}
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
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Nome</th>
                <th style={thStyle}>T1</th>
                <th style={thStyle}>T2</th>
                <th style={thStyle}>Nota 1</th>
                <th style={thStyle}>Nota 2</th>
                <th style={thStyle}>Nota 3</th>
                <th style={{ ...thStyle, textAlign: "center" }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #EEE" }}>
                <td style={tdStyle}>1</td>
                <td style={{ ...tdStyle, fontWeight: "bold", color: "#222" }}>João</td>
                <td style={tdStyle}>8.5</td>
                <td style={tdStyle}>9.0</td>
                <td style={tdStyle}>7.5</td>
                <td style={tdStyle}>8.0</td>
                <td style={tdStyle}>9.5</td>
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
  backgroundColor: "#1976D2", // Azul para edição
  color: "#FFF",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.85rem",
  fontWeight: "bold"
};

const btnDeletarStyle = {
  backgroundColor: "#D32F2F", // Vermelho para exclusão
  color: "#FFF",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.85rem",
  fontWeight: "bold"
};