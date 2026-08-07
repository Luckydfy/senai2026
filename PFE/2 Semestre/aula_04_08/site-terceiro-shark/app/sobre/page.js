import Header from "../components/header";
import Footer from "../components/footer";

// Dados fictícios da turma para deixar a página dinâmica
const ESTATISTICAS = [
  { valor: "2026", rotulo: "Ano da Vitória" },
  { valor: "35+", rotulo: "Alunos Conectados" },
  { valor: "∞", rotulo: "Risadas no Intervalo" },
  { valor: "100%", rotulo: "Aprovados no Coração" },
];

const INTEGRANTES_DESTAQUE = [
  { nome: "Turma 3B", cargo: "Os Formandos", emoji: "🎓", desc: "A união de mentes brilhantes, zoeira sem fim e dedicação para fechar o ciclo com chave de ouro." },
  { nome: "Professores & MENTORES", cargo: "Guia & Apoio", emoji: "📚", desc: "Aqueles que tiveram paciência infinita e nos prepararam não só para o vestibular, mas para a vida." },
  { nome: "SESI Mirandópolis", cargo: "Nossa Segunda Casa", emoji: "🏫", desc: "Onde tudo aconteceu: das provas surpresa aos dias inesquecíveis do interclasse." },
];

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10 space-y-12">
        {/* Cabeçalho da Página */}
        <section className="text-center space-y-4">
          <span className="inline-block px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-semibold uppercase tracking-wider">
            Nossa História
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Sobre o Terceirão 3B 📖
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Uma trajetória marcada por amizades inseparáveis, piadas internas, noites estudando para provas e a contagem regressiva para o futuro.
          </p>
        </section>

        {/* Bloco de História / Texto */}
        <section className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 shadow-xl space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>✨</span> Como Chegamos Até Aqui
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            Chegar ao terceiro ano do Ensino Médio no SESI Mirandópolis não foi apenas passar de ano; foi construir uma família. Ao longo do tempo, dividimos desafios, trabalhos em grupo de última hora, conquistas em torneios e momentos que vão ficar guardados na memória para sempre.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            O ano de 2026 marca o fim de uma era e o começo de grandes jornadas para cada um dos alunos do 3B. Este site é a nossa cápsula do tempo digital!
          </p>
        </section>

        {/* Estatísticas Divertidas */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ESTATISTICAS.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/60 p-6 rounded-xl border border-slate-700/50 text-center space-y-1 shadow-md hover:border-red-500/40 transition-colors"
            >
              <div className="text-3xl font-extrabold text-red-400">{stat.valor}</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{stat.rotulo}</div>
            </div>
          ))}
        </section>

        {/* Cards dos Pilares da Turma */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">
            O Que Faz o 3B Ser Único
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTEGRANTES_DESTAQUE.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-4xl">{item.emoji}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.nome}</h3>
                    <span className="text-xs text-red-400 font-semibold uppercase">{item.cargo}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}