import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [carregando, setCarregando] = useState(false); // Evita múltiplos cliques
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validação de senha no Frontend
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    setCarregando(true);

    try {
      // 2. Envia apenas o necessário para o backend (removido confirmarSenha)
      await axios.post('http://localhost:5000/api/usuarios', { nome, email, senha });
      
      alert('Usuário cadastrado com sucesso!');
      navigate('/'); 
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      
      // 3. Pega a mensagem de erro do backend se ela existir
      const mensagemErro = error.response?.data?.message || 'Erro ao cadastrar usuário.';
      alert(mensagemErro);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="container-dados">
      <h2>Cadastrar Novo Usuário</h2>
      <Link to="/">Voltar para Home</Link>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
            type="password" 
            placeholder="Senha" 
            value={senha} 
            onChange={(e) => {
                setSenha(e.target.value);
                // Limpa a mensagem customizada ao digitar, permitindo que o HTML revalide
                e.target.setCustomValidity(''); 
            }} 
            required 
            minLength={8}
            onInvalid={(e) => e.target.setCustomValidity('A senha deve ter no mínimo 8 caracteres.')}
        />
        <input 
          type="password" 
          placeholder="Confirmar senha" 
          value={confirmarSenha} 
          onChange={(e) => setConfirmarSenha(e.target.value)} 
          required 
        />
        {/* Desabilita o botão enquanto a requisição acontece */}
        <button type="submit" disabled={carregando}>
          {carregando ? 'Salvando...' : 'Salvar'}
        </button>
      </form>
    </div>
  );
}

export default Cadastro;