import React, { Component } from 'react';
import './App.css';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      Lista: [

      ],
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      uf: ""
    }
  }
  ListarCep = (event) => {
    event.preventDefault();
    fetch('http://viacep.com.br/ws/01001000\/json')
      .then(Response => Response.json())
      .then(data => console.log(data))
  }

  render() {
    return (

      <div className="App">
        <form onSubmit={this.ListarCep}>

        <div className="container">
          <div className="row">

            <div className="input-group mb-3 col ">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">CEP</span>
              </div>
              <input type="text" className="form-control" placeholder="cep" aria-label="cep" aria-describedby="basic-addon1" />
            </div>


            <div className="input-group mb-3 col ">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Logradouro</span>
              </div>
              <input type="text" className="form-control" placeholder="Logradouro" aria-label="Logradouro" aria-describedby="basic-addon1" />
            </div>


            <div className="input-group mb-3 col ">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Complemento</span>
              </div>
              <input type="text" className="form-control" placeholder="Complemento" aria-label="Complemento" aria-describedby="basic-addon1" />
            </div>


            <div className="w-100"></div>
            <div className="input-group mb-3 col">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Bairro</span>
              </div>
              <input type="text" className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" />
            </div>


            <div className="input-group mb-3 col ">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Localidade</span>
              </div>
              <input type="text" className="form-control" placeholder="Localidade" aria-label="Localidade" aria-describedby="basic-addon1" />
            </div>


            <div className="input-group mb-3 col">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Uf</span>
              </div>
              <input type="text" className="form-control" placeholder="Uf" aria-label="UF" aria-describedby="basic-addon1" />
            </div>

            <button type="submit" id="btn" className="btn btn-secondary btn-lg btn-block">Confirmar</button>

          </div>
        </div>
        </form>
      </div>



    );
  }
}

