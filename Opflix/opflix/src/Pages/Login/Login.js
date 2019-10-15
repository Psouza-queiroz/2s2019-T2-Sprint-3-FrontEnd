import React from 'react';
import logo from "../../assets/img/logo_opflix.png"
import preto from "../../assets/img/preto.png"
import '../../assets/css/Login.css'


import { Link } from "react-router-dom";
function Login(){
    return(
        <div className="App">
          <div className="imagem">
              <img className="logo" src={logo} alt="" width="100%" height="100%"/>
              <img src={preto}  width="100%" height="100%"/>
            </div>
            <div className="pequeRoda">

              <h2>Escola Senai De Informatica</h2>
              <p>senai@Informatica.com.br</p>
              <p>Endereço:  Alameda Barão de Limeira, 539 - Santa Cecilia</p>
              <p>Sistema Feito Por Pedro</p>
              
            </div>

        </div>
            )
}
export default Login; 