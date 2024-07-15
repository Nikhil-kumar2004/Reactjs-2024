import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {  //variable is updating but not reflecting in UI.
//   let age=20;
//   let add=function(){
//     age++;
//     console.log(age)
//   }
//   let sub=function(){
//     age--;
//     console.log(age)
//   }
//   return (
//     <>
//       <h1>Nikhil of age :{age}</h1>
//       <h2> age: {age}</h2>
//       <p>so i have age:{age}</p>
//       <button onClick={add}>Add</button>
//       <br />
//       <button onClick={sub}>Subtract</button>
//     </>
//   )
// }

function App() {
  let [age,setAge]=useState(20);
  let add=function(){
    setAge(age=age+1)
    setAge(age=age+1)
    setAge(age=>age+1)
    setAge(age=>age+1)
  }
  let sub=function(){
    if(age>0)
      age--;
      setAge(age)
  }
  return (
    <>
      <h1>Nikhil of age :{age}</h1>
      <h2> age: {age}</h2>
      <p>so i have age:{age}</p>
      <button onClick={add}>Add {age}</button>
      <br />
      <button onClick={sub}>Subtract {age}</button>
    </>
  )
}

export default App
