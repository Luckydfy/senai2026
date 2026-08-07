import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./img/terceirao.png";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Header />

      {/* Container principal centralizado */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10 flex flex-col gap-10">
        
        {/* Banner */}
        <section className="w-full overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
          <Image
            src={Banner}
            alt="Banner do Terceirão"
            priority
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Bloco de Boas-Vindas Centralizado */}
        <section className="bg-slate-800/60 rounded-2xl p-8 border border-slate-700/50 text-center flex flex-col items-center justify-center gap-3">
          <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-semibold">
            Turma 2026 🎓
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Bem-vindo ao site do Terceirão 3B!
          </h2>
          <p className="text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed">
            Este é o nosso espaço para compartilhar memórias, eventos, fotos e tudo o que torna o nosso último ano no SESI Mirandópolis inesquecível.
          </p>
        </section>

        {/* Grid de Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 flex flex-col items-center text-center">
            <div className="text-4xl mb-2">📸</div>
            <h3 className="font-bold text-lg text-white mb-1">Galeria de Fotos</h3>
            <p className="text-xs text-slate-400">Os melhores momentos do nosso ano reunidos em um só lugar.</p>
          </div>

          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 flex flex-col items-center text-center">
            <div className="text-4xl mb-2">🗓️</div>
            <h3 className="font-bold text-lg text-white mb-1">Próximos Eventos</h3>
            <p className="text-xs text-slate-400">Fique por dentro das datas de trotes, formaturas e arrecadações.</p>
          </div>

          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 flex flex-col items-center text-center">
            <div className="text-4xl mb-2">👥</div>
            <h3 className="font-bold text-lg text-white mb-1">Nossa Turma</h3>
            <p className="text-xs text-slate-400">Conheça todos os alunos e professores que fazem parte dessa história.</p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}