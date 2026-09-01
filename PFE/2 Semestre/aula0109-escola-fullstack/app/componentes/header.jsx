import Link from "next/link";

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: "#D32F2F", 
      color: "#FFF", 
      padding: "15px 30px", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
    }}>
      <h1 style={{ margin: 0, fontSize: "1.4rem", fontWeight: "bold" }}>
        Sistema Escolar - SESI
      </h1>

      <nav>
        <ul style={{ 
          display: "flex", 
          gap: "15px", 
          listStyle: "none", 
          margin: 0, 
          padding: 0,
          flexWrap: "wrap"
        }}>
          <li>
            <Link href="/" style={linkStyle}>Início</Link>
          </li>
          <li>
            <Link href="/cadalunos" style={linkStyle}>Cadastro - Alunos</Link>
          </li>
          <li>
            <Link href="/listalunos" style={linkStyle}>Lista - Alunos</Link>
          </li>
          <li>
            <Link href="/cadnotas" style={linkStyle}>Cadastro - Notas</Link>
          </li>
          <li>
            <Link href="/listnotas" style={linkStyle}>Lista - Notas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Estilo reutilizável para os links
const linkStyle = {
  color: "#FFF",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "0.95rem",
  padding: "6px 12px",
  borderRadius: "4px",
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  transition: "background 0.2s"
};