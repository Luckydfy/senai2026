export default function Header() {
  return (
    <header className="bg-red-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-extrabold tracking-tight">
          3B <span className="text-red-200">| SESI Mirandópolis</span>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#" className="hover:text-red-200 transition-colors">Início</a></li>
            <li><a href="#" className="hover:text-red-200 transition-colors">Sobre</a></li>
            <li><a href="#" className="hover:text-red-200 transition-colors">Galeria</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}