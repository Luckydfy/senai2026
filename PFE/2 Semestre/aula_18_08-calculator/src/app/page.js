import Calculator from './components/Calculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-white mb-6">Calculadora</h1>
      <Calculator />
    </main>
  );
}