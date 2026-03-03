import './App.css'
import logoSenai from './assets/img/logoSenai.png'

function App() {
  return (
    <div className="container">
      <img src={logoSenai} alt="Logo do SENAI" className="logo" />
      <div className='botoes'>
      <button className="botao">Minha Conta</button>
      <button className="botao">Criar Conta</button>
      </div>
    </div>
    // <div className="container">
    //   <img src={logoSenai} alt="Logo do SENAI" className="logo" />
    //   <h1 className="titulo">Login</h1>
    //   <label htmlFor="nome" className="label">Nome</label>
    //   <input type="text" className="campo" placeholder='Seu nome'/>
    //   <label htmlFor="senha" className="label">Senha</label>
    //   <input type="password" className="campo" placeholder='Sua senha'/>
    //   <button className="botao">Login</button>
    //   <a href="#" className="link">Esqueceu a senha?</a>
    //   <a href="#" className="link">Cadastre-se!</a>
    // </div>
    // <div className="container">
    //   <img src={logoSenai} alt="Logo do SENAI" className="logo" />
    //   <h1 className="titulo">Login</h1>
    //   <span className="subtitulo">para continuar</span>
    //   <label htmlFor="nome" className="label">Nome</label>
    //   <input type="text" className="campo" placeholder='Seu nome'/>
    //   <label htmlFor="senha" className="label">Senha</label>
    //   <input type="password" className="campo" placeholder='Sua senha'/>
    //   <button className="botao">Lon in</button>
    //   <a href="#" className="link">Esqueceu a senha?</a>
    //   <a href="#" className="link">Cadastre-se!</a>
    // </div>
  )
}

export default App