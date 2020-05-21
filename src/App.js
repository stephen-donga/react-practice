import React,{Component} from 'react';
import './App.css';

import CarttonList from './components/CartoonList';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       cartoons:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({cartoons:users}))
  }

 render(){
  return (
    <div className="App">
       {
         this.state.cartoons.map(cartoon => <h1 key={cartoon.id}>{cartoon.name}</h1>)
       }
    </div>
  );
 }
}

export default App;
