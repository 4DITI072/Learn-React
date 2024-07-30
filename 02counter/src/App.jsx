
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]= useState(0)
  function setError(msg){
    prompt(msg,"Understood")
  }
  //let counter = 0
  const addValue = () => {
    if(counter<20){
    counter = counter+1
    setCounter(counter)
    
    }
    else{
      setError(`Counter cant be more than 20`)
    }
  }

  const removeValue = () =>{
    counter=counter-1 
    if(counter<0){
      setError(`Counter cant be negative`)
      counter=0
    }

    setCounter(counter)
  }
  return (
    <>
      <h1>Chai or react</h1>
      <h2> counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
