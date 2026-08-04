import './App.css'
import Mensagem from './components/mensagem.jsx'
import PropsNomeado from './components/propsNomeado.jsx'

function App() {
  return (
    <>
      {/* <Mensagem titulo='Aprendendo Props ou Properties ou ainda Propriedades' texto='Bem vindo(a) ao mundo das Props' nome='Lucky'/>
      <Mensagem titulo='Interclasse 2026' texto='Bem vindo(a) ao interclasse' nome='Fernanda'/> */}
      <PropsNomeado titulo='Interclasse 2026' texto='Bem vindo(a) ao interclasse' nome='Fernanda' altura={1.60}/>
    </>
  )
}

export default App