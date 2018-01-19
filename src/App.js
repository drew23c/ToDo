import React from 'react';
import Hello from './Components/Hello'
import Input from './Components/Input'


class App extends React.Component{
  constructor(){
    super()
    this.newItems=[]
    this.state={
      todoVal:'',
      items:[]
    }
  }
  handleInput = e =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleClick = () =>{
    const newItem = this.state.todoVal
    if(this.state.todoVal !== ''){
      this.newItems.push(newItem)
      this.setState({
        items:[...this.newItems],
        todoVal: ''
      })
    }
  }
  render(){
    return(
      <div>
        <Hello/>
        <Input click={this.handleClick} 
        input={this.handleInput} 
        todoVal={this.state.todoVal} 
        items={this.state.items} />
      </div>
    )
  }
}

export default App