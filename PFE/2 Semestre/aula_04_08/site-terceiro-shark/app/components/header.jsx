import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-600 text-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-row items-center justify-between">
        
        {/* Logo / Título */}
        <Link href="/" className="flex items-center gap-2">
          <span className="bg-white text-red-600 font-extrabold px-2.5 py-1 rounded-md text-base shadow-sm">
            3B
          </span>
          <span className="font-bold text-sm sm:text-base tracking-tight text-white">
            SESI Mirandópolis
          </span>
        </Link>

        {/* Links de Navegação com espaçamento (gap) */}
        <nav>
          <ul className="flex items-center gap-4 sm:gap-6 text-sm font-semibold">
            <li>
              <Link 
                href="/" 
                className="hover:text-red-200 transition-colors py-1 px-2 rounded-md hover:bg-red-700/50"
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                href="/sobre" 
                className="hover:text-red-200 transition-colors py-1 px-2 rounded-md hover:bg-red-700/50"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link 
                href="/galeria" 
                className="hover:text-red-200 transition-colors py-1 px-2 rounded-md hover:bg-red-700/50"
              >
                Galeria
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}