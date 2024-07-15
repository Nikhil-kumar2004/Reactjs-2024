import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myArr=[16,20,24]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind css</h1>
    <Card name="nikhil" para="nikhil is my name" btntext="click nikhil"/>
    <Card name="ankit" para="ankit is my name" btntext="click ankit"/>
    <Card name="ashish" para="ashish is my name" btntext="click ashish"/>
    <Card name="amar" para="amar is my name" btntext="click amar"/>
    </>
  )
}

export default App
