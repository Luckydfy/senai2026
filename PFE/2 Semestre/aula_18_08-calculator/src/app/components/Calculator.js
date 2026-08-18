'use client';

import { useState } from 'react';

export default function ScientificCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const val1 = parseFloat(num1);
    const val2 = parseFloat(num2);

    if (isNaN(val1) || isNaN(val2)) {
      setError('Por favor, insira números válidos.');
      return;
    }

    // Validação da divisão por zero
    if (operation === '/' && val2 === 0) {
      setError('Operação inválida: divisão por zero não é permitida.');
      return;
    }

    let res = 0;
    switch (operation) {
      case '+':
        res = val1 + val2;
        break;
      case '-':
        res = val1 - val2;
        break;
      case '*':
        res = val1 * val2;
        break;
      case '/':
        res = val1 / val2;
        break;
      case '^':
        res = Math.pow(val1, val2);
        break;
      case 'root':
        if (val1 < 0 && val2 % 2 === 0) {
          setError('Não é possível calcular raiz par de número negativo.');
          return;
        }
        res = Math.pow(val1, 1 / val2);
        break;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <form 
      onSubmit={handleCalculate} 
      className="flex flex-col gap-4 bg-gray-900 p-6 rounded-xl border border-gray-800 w-96 text-white"
    >
      <div className="flex gap-2">
        <input
          type="number"
          step="any"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número A"
          className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500"
        />

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 text-center font-bold"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">÷</option>
          <option value="^">xʸ (potência)</option>
          <option value="root">ʸ√x (raiz)</option>
        </select>

        <input
          type="number"
          step="any"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número B"
          className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-500 font-bold p-3 rounded-lg transition"
      >
        Calcular
      </button>

      {error && (
        <div className="p-3 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm text-center">
          {error}
        </div>
      )}

      {result !== null && (
        <div className="p-3 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-lg font-bold text-center">
          Resultado: {result}
        </div>
      )}
    </form>
  );
}