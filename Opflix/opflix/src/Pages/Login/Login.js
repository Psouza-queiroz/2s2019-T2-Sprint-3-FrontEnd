import React from 'react'
import logo from "../../assets/img/logo_opflix.png"
import preto from "../../assets/img/preto.png"
import '../../assets/css/Login.css'
import Rodape from '../../components/Rodape';


import { Link } from "react-router-dom";
function Login() {
return (
<div className="App">
  <div className="imagem">
    <Link to="/"><img href="" className="logo" src={logo} width="100px" /></Link>
  </div>


  <div className="meio">
    <div className="caixota">
      <div id="formi">

        <form action="">
          <h3>Email:</h3>
          <input type="aaaaaaaaaaaa" /> <br/>
          <h3>Senha:</h3>
          <input type="text" />
          <br/>
          <button id="btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>

</div>
)
}
export default Login;