import React from 'react';
import './assets/css/base/base.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';
import Admin from './paginas/admin/Admin';
import CatAdmin from './paginas/admin/CatAdmin';
import FormCategoria from './paginas/admin/components/FormCategoria';
import FormSubCategoria from './paginas/admin/components/FormSubCategoria';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route exact path='/admin/NovaCategoria'>
          <FormCategoria />
        </Route>
        <Route exact path='/admin/:id'>
          <FormCategoria />
        </Route>
        <Route exact path='/admin/categoria/:id'>
          <CatAdmin />
        </Route>
        <Route exact path='/admin/sub/:id'>
          <FormSubCategoria />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/categoria/:id'>
          <Categoria />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route path='*'>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;