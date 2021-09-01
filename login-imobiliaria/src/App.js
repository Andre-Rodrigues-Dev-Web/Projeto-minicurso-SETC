import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Componentes
import { 
  Content,
  Template
} from './components/template/style'
//Pages
import Logar from './pages/Logar'
import Registrar from './pages/Registro'
const App = () => {
  return (
    <Template>
      <Content>
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/Logar">Logar</Link>
                </li>
                <li>
                  <Link to="/Registrar">Registrar</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/Logar">
                <Logar />
              </Route>
              <Route path="/Registrar">
                <Registrar />
              </Route>
            </Switch>
        </Router>
      </Content>
    </Template>
  );
}

export default App;
