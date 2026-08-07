import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-16 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm">
        
        {/* Direitos e Identificação */}
        <div className="space-y-1">
          <p className="font-semibold text-slate-200">
            Terceirão 3B <span className="text-red-500">•</span> SESI Mirandópolis
          </p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Todos os direitos reservados. Feito com orgulho pela turma.
          </p>
        </div>

        {/* Links Rápidos / Redes Sociais */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors flex items-center gap-1"
          >
            <span>📸</span> Instagram da Turma
          </a>
          <span className="text-slate-700">•</span>
          <Link href="/sobre" className="hover:text-slate-200 transition-colors">
            Sobre nós
          </Link>
        </div>

      </div>
    </footer>
  );
}