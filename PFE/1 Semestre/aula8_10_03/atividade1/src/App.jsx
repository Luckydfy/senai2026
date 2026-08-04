import './App.css'
import MeuAvatar from './componentes/MeuAvatar.jsx'

function App() {
  return (
    <div className="App">
      <MeuAvatar
        nome="Fernanda"
        idade={17}
        foto_perfil="https://media.licdn.com/dms/image/v2/D4D03AQHKyKf_YadiRw/profile-displayphoto-scale_200_200/B4DZsLIJWQH0AY-/0/1765418246297?e=2147483647&v=beta&t=igrqVMTzZgbg5rKKXDcI8wn9z1yfluaNcPmlarkngFg"
        estilo_musical="MPB"
        disciplina_favorita="Matemática"
      />
    </div>
  )
}

export default App
