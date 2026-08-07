"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

// Exemplo de fotos fictícias (substitua pelos caminhos/URLs reais da turma)
const FOTOS_MOCK = [
  { id: 1, titulo: "Primeiro Trote do Ano", categoria: "Trotes", src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800" },
  { id: 2, titulo: "Aulas Práticas no Laboratório", categoria: "Aulas", src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" },
  { id: 3, titulo: "Interclasse e Torneios", categoria: "Eventos", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" },
  { id: 4, titulo: "Resenha no Intervalo", categoria: "Dia a Dia", src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" },
  { id: 5, titulo: "Trote Fantasia", categoria: "Trotes", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" },
  { id: 6, titulo: "Viagem de Formatura", categoria: "Eventos", src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" },
];

const CATEGORIAS = ["Todas", "Trotes", "Eventos", "Aulas", "Dia a Dia"];

export default function Fotos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");

  // Filtra as fotos com base na categoria selecionada
  const fotosFiltradas = categoriaAtiva === "Todas"
    ? FOTOS_MOCK
    : FOTOS_MOCK.filter(foto => foto.categoria === categoriaAtiva);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10 space-y-8">
        {/* Cabeçalho da Página */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Galeria de Memórias 📸
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Os melhores momentos do 3B reunidos. Navegue pelas fotos dos nossos trotes, eventos e rotina no SESI.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                categoriaAtiva === cat
                  ? "bg-red-600 text-white border-red-500 shadow-md"
                  : "bg-slate-800/80 text-slate-400 border-slate-700/60 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grade de Fotos */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
          {fotosFiltradas.map((foto) => (
            <div
              key={foto.id}
              className="group relative overflow-hidden rounded-xl bg-slate-800 border border-slate-700/50 shadow-lg hover:border-red-500/40 transition-all duration-300"
            >
              {/* Imagem */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={foto.src}
                  alt={foto.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Informações da Foto */}
              <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-wider font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded w-fit mb-1 border border-red-800/50">
                  {foto.categoria}
                </span>
                <h3 className="text-base font-bold text-white leading-tight">
                  {foto.titulo}
                </h3>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}