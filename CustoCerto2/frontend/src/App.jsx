import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Cadastro from './paginas/Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota da página inicial */}
        <Route path="/" element={<Home />} />
        
        {/* Rota da página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;