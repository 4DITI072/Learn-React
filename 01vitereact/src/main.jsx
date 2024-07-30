import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return (
    <>
      <h1> Custom App</h1>
    </>
  )
}

const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

const anotherEle = (
  <a href='htps://google.com' target='_blank'>Visit Google</a>

)

const anotherUser = "chai or react"

const reactElement =  React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
