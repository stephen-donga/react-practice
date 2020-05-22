import React,{Component} from 'react';
import './App.css';

import CardList from './components/card-list/CardList'
import {SearchBox} from './components/search-box/SearchBox'

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       cartoons:[],
       searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({cartoons:users}))
  }
  handleChange = e => {
    this.setState({searchField:e.target.value})
  }

 render(){

  const { cartoons, searchField}=this.state;
  const filteredCartoons = cartoons.filter(cartoon =>cartoon.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Cartoon Zone</h1>
     <SearchBox
      placeholder='Search cartoons'
      handleChange={ this.handleChange}/>
      <CardList cartoons = {filteredCartoons}/>
    </div>
  );
 }
}

export default App;
