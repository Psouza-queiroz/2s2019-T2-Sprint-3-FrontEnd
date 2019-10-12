import React from 'react';
import logo from "../../assets/img/logo_opflix.png"
import '../Home/App.css';


import { Link } from "react-router-dom";
function Login(){
    return(
        <div className="App">
            
            <Link to="/"><img src={logo} /></Link>
                    </div>
    )
}
export default Login; 