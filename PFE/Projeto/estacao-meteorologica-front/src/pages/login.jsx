import { useState } from "react";
import { Link } from "react-router-dom";

import imagemEstacao from '../assets/estacao.jpeg';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <section className="container">
            <div className="card">
                <img src={imagemEstacao} alt="Estação Meteorológica" />
                <div className="formulario">
                    <h2>Login</h2>
                    <form action="">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" id="usuario" className="input" placeholder="Login" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                        <label htmlFor="senha">Senha</label>
                        <input 
                            type="password" 
                            id="senha" 
                            className="input" 
                            placeholder="Senha"
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <Link to='/dashboard' className="botao">Login</Link>
                    </form>
                    <Link to='/registro'>Não tem uma conta? Cadastre-se aqui</Link>
                </div>
            </div>
        </section>
    )
}