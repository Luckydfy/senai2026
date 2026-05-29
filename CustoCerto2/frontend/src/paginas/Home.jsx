import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'; // <-- Importação do arquivo de estilos separado

function Home() {
  const [usuarios, setUsuarios] = useState([]);

  // Busca os usuários no Backend ao carregar a página
  useEffect(() => {
    axios.get('http://localhost:5000/api/usuarios')
      .then(response => setUsuarios(response.data))
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">Lista de Usuários Cadastrados</h2>
      
      <nav className="home-nav">
        <Link to="/cadastro" className="btn-cadastro">Ir para Cadastro</Link>
      </nav>
      
      <ul className="user-list">
        {usuarios.length === 0 ? (
          <p className="empty-message">Nenhum usuário encontrado.</p>
        ) : (
          usuarios.map(user => (
            // Atualizado para 'id_usuario' que vem da sua tabela do Postgres
            <li key={user.id_usuario} className="user-item">
              <div className="user-info">
                <strong>{user.nome}</strong>
                <span>• {user.email}</span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Home;