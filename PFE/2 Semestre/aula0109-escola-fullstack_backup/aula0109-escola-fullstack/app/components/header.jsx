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
      {/* Classe CSS para criar o efeito hover nos links */}
      <style>{`
        .nav-link {
          color: #FFF;
          text-decoration: none;
          font-weight: bold;
          font-size: 0.95rem;
          padding: 6px 12px;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.15);
          transition: all 0.2s ease-in-out;
        }

        .nav-link:hover {
          background-color: #FFF;
          color: #D32F2F;
        }
      `}</style>

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
            <Link href="/" className="nav-link">Início</Link>
          </li>
          <li>
            <Link href="/cadalunos" className="nav-link">Cadastro - Alunos</Link>
          </li>
          <li>
            <Link href="/listalunos" className="nav-link">Lista - Alunos</Link>
          </li>
          <li>
            <Link href="/cadnotas" className="nav-link">Cadastro - Notas</Link>
          </li>
          <li>
            <Link href="/listnotas" className="nav-link">Lista - Notas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}