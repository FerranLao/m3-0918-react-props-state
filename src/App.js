import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ListaSimpson } from './components/ListaSimpson';
import { InputBar } from './components/InputBar';

class App extends Component {

  constructor(){
    super();
    this.state = {
      simpsons:[
        {name:"Homer"},
        {name:"Apu"},
        {name:"Hans Topo"},
        {name:"Krusty"},
        {name:"Dr. Nick Rivera"},
      ]
    }
  }

  handeleDelete(index){
    console.log(`DELETE SIMPSON RECEIVED ${index}`);
    this.state.simpsons.splice(index,1);
    this.setState({simpsons: this.state.simpsons});
  }
  
  handleAdd(text){
    console.log(`Adding text: ${text}`);
    this.state.simpsons.push({name:text})
    this.setState({simpsons: this.state.simpsons});
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <InputBar addItem={(text) => this.handleAdd(text)}/>
          <ListaSimpson 
            titulo="Lista de los simpson" 
            dataList={this.state.simpsons}
            deleteSimpson={(index) => this.handeleDelete(index)}
          />
        </header>
      </div>
    );
  }
}

export default App;
