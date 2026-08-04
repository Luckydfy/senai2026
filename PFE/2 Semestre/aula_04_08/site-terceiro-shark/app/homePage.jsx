import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./img/terceirao.png";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10 space-y-12">
        {/* Seção do Banner */}
        <section className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
          <Image
            src={Banner}
            alt="Banner do Terceirão"
            priority
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Seção de Apresentação / Boas-vindas */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center space-y-4">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold tracking-wide">
            Turma 2026 🎓
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Bem-vindo ao site do Terceirão 3B!
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Este é o nosso espaço para compartilhar memórias, eventos, fotos e tudo o que torna o nosso último ano no SESI Mirandópolis inesquecível.
          </p>
        </section>

        {/* Seção de Cards (Exemplo do que você pode colocar) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-3">📸</div>
            <h3 className="font-bold text-lg mb-1">Galeria de Fotos</h3>
            <p className="text-sm text-slate-500">Os melhores momentos do nosso ano reunidos em um só lugar.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-3">🗓️</div>
            <h3 className="font-bold text-lg mb-1">Próximos Eventos</h3>
            <p className="text-sm text-slate-500">Fique por dentro das datas de trotes, formaturas e arrecadações.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-all">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-bold text-lg mb-1">Nossa Turma</h3>
            <p className="text-sm text-slate-500">Conheça todos os alunos e professores que fazem parte dessa história.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}