import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  let [color,setcolor]=useState("Grey")
  return (
    <>
      <div className="w-screen h-screen" style={{backgroundColor:color}}>
        <div className='flex flex-wrap justify-center' style={{backgroundColor:"white"}}>
        <div onClick={()=>setcolor("Red")}>
          <Button color="Red" />
        </div>
        <div onClick={()=>setcolor("Blue")}>
          <Button color="Blue" />
        </div>
        <div onClick={()=>setcolor("Black")}>
          <Button color="Black" />
        </div>
        <div onClick={()=>setcolor("Grey")}>
          <Button color="Grey" />
        </div>
        <div onClick={()=>setcolor("Green")}>
          <Button color="Green" />
        </div>
        <div onClick={()=>setcolor("Brown")}>
          <Button color="Brown" />
        </div>
        <div onClick={()=>setcolor("Purple")}>
          <Button color="Purple" />
        </div>
        </div>
      </div>
    </>
  )
}
export default App
// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <div className="w-full h-screen duration-200"
//     style={{backgroundColor: color}}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//           onClick={() => setColor("red")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "red"}}
//           >Red</button>
//           <button
//           onClick={() => setColor("green")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "green"}}
//           >Green</button>
//           <button
//           onClick={() => setColor("blue")}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: "blue"}}
//           >Blue</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
