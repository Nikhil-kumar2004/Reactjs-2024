import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const myelement=" please"
const reactElement=React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  "click me",
  myelement
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
