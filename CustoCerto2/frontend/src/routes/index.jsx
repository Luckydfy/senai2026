import {Routes, Route} from 'react-router-dom';

// Import das Rotas
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Dashboard from '../pages/dashboard';

export default function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}