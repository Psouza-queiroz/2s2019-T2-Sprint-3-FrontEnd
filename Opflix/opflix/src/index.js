import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './Pages/Home/App';
import Home from './Pages/Home/HomeLogado';
import HomeAdm from './Pages/Home/HomeAdm';
import Cadastrar from './Pages/Cadastrar/Cadastrar'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import DashboardFilmes from './Pages/Dashboard/DashboardFilmes'

import { Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/Cadastrar' component={Cadastrar}/>
                <Route exact path='/login' component={Login} />
                <Route exact path='/Homeadm' component={HomeAdm} />
                <Route exact path='/Home' component={Home} />
                    
                
              

            </Switch>
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
