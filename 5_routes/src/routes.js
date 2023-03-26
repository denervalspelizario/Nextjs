

import { BrowserRouter, Routes, Route} from 'react-router-dom'; // importando as confuigs para rotas
import Contato from './pages/Contato/index.js';

import Home from './pages/Home/index.js'
import Sobre from './pages/Sobre/index.js'
import Header from './components/Header/index.js';
import Erro from './pages/Erro/index'
import Produto from './pages/Produto/index.js';


const Rotas = () => (
  <BrowserRouter>
      <Header/>
      <Routes>
          <Route exact path='/' element={ <Home/> } />
          <Route path='/Contato' element={ <Contato/> } />
          <Route path='/Sobre' element={ <Sobre/> } />
          <Route path='/Produto/:id' element={ <Produto/> } />
          <Route path='*' element={ <Erro/> } /* caso user entre em url que nao exista */  />
      </Routes>
  </BrowserRouter>
);

export default Rotas;

