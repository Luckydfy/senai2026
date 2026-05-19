import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import logo from

function App() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then(res => res.json())
      .then(dados => setMensagem(dados.mensagem));
  }, []);

  return (
    <BrowserRouter>
      <Cadastro />
      <Login />
    </BrowserRouter>
  )
}

export default App;