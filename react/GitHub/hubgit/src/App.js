import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Lista: [],
      nome: ""
    }
  }
    componentDidMount(){

      this.listarRepositorios();
    }
    

    listarRepositorios = (event) =>{ 
   
     // console.log(event)
   
      Axios.get("https://api.github.com/users/"+this.state.nome+"/repos")
      .then(response => {
        this.setState({event:response.data})
      })

    }

    NomeUsuario = (event) =>{
      this.setState({nome: event.target.value})
      console.log(this.state)
    }

   


  




  render() {
    return (
      <div className="App">


       
          <div className="input-group mb-3">

          

            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Procurar Repositorio</span>
            </div>
            <input type="text" className="form-control" placeholder="Procurar" aria-label="Username" aria-describedby="basic-addon1"
            onChange={this.NomeUsuario}
            />
            <input onClick={this.listarRepositorios}  className="btn btn-primary" type="submit" value="Submit"></input>
         

          </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Repository</th>
              <th scope="col">descricao</th>
              <th scope="col">date descricao</th>
              <th scope="col">size</th>
            </tr>
          </thead>

        </table>
      </div>

    );
  }
}

export default App;