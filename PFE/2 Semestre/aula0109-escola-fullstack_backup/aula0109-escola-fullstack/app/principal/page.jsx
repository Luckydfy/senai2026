import Header from "../components/header";

export default function Principal() {
  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Header />

      {/* Hero Section / Banner */}
      <section style={{ backgroundColor: "#D32F2F", color: "#FFF", padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Bem-vindo ao Sistema Escolar</h2>
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>SESI Mirandópolis - Excelência em Educação, Esporte e Cultura</p>
      </section>

      {/* Conteúdo Principal */}
      <main style={{ maxWidth: "1000px", margin: "30px auto", padding: "0 20px" }}>
        
        {/* Banner com Imagem */}
        <div style={{ borderRadius: "8px", overflow: "hidden", marginBottom: "30px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <img 
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80" 
            alt="Escola SESI" 
            style={{ width: "100%", height: "280px", objectFit: "cover" }}
          />
        </div>

        {/* Cards Informativos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          
          <div style={{ background: "#FFF", padding: "20px", borderRadius: "8px", borderLeft: "5px solid #D32F2F", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
            <h3 style={{ color: "#D32F2F", marginTop: 0 }}>📢 Comunicados</h3>
            <p style={{ color: "#000"}}>Fique atento às datas do calendário escolar e reuniões de pais do 2º bimestre.</p>
          </div>

          <div style={{ background: "#FFF", padding: "20px", borderRadius: "8px", borderLeft: "5px solid #D32F2F", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
            <h3 style={{ color: "#D32F2F", marginTop: 0 }}>📚 Portal do Aluno</h3>
            <p style={{ color: "#000"}}>Acesse o boletim, quadro de horários, tarefas de casa e material didático.</p>
          </div>

          <div style={{ background: "#FFF", padding: "20px", borderRadius: "8px", borderLeft: "5px solid #D32F2F", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
            <h3 style={{ color: "#D32F2F", marginTop: 0 }}>⚽ Atividades SESI</h3>
            <p style={{ color: "#000"}}>Conheça nossas oficinas esportivas, robótica, projetos de arte e cultura.</p>
          </div>

        </div>
      </main>

      {/* Rodapé simples */}
      <footer style={{ textAlign: "center", padding: "20px", color: "#666", fontSize: "0.9rem", borderTop: "1px solid #EEE", marginTop: "40px" }}>
        © SESI Mirandópolis - Todos os direitos reservados.
      </footer>
    </div>
  );
}