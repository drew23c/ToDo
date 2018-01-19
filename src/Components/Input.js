import React from 'react'

const NoDecor = {
    listStyleType: 'none',
}
const Img ={
  height:'30%',
  width:'30%'
}
const Input = ({click,input, todoVal, items}) =>{
  return(
  <div>
    <input type='text' id='todoVal' value={todoVal} onInput={input}/>
    <button onClick={click}>Add</button>
    <ul style={NoDecor}>
      {items.map(item =>(
          <li>{item}</li>))}
    </ul>
    <img style={Img} src="http://www.growthengineering.co.uk/wp-content/uploads/2014/07/To-Do-List.png" alt={""}/>
  </div>
  )
}
export default Input