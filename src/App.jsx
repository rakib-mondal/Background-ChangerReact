import React, { useState } from 'react'
import Buttons from './components/Buttons'

const App = () => {
 const [color, setcolor] = useState("#000")
 function colorSet(colour){
  setcolor(colour);
 }
  return (
    <div className={`bg-black h-screen flex justify-around items-end ${color}` }>
    <div className="w-10/12 flex justify-around items-center bg-teal-500 md:bg-white rounded-md mx-auto p-10 mb-5 h-[80px]">
    <Buttons bg="green" classList="bg-green-900" colorSet={colorSet}/>
    <Buttons bg="blue" classList="bg-indigo-950" colorSet={colorSet}/>
    <Buttons bg="red" classList="bg-red-700" colorSet={colorSet}/>
    <Buttons bg="purple" classList="bg-purple-900" colorSet={colorSet}/>
    </div>
    </div>
  )
}
export default App

{/* <button color="green" className="p-3 rounded-md capitalize font-semibold text-white font-serif bg-green-900" onClick={()=>setcolor("#14532d")} >Green</button>
<button color="blue" className="p-3 rounded-md capitalize font-semibold text-white font-serif bg-indigo-950" onClick={()=>setcolor("#1e3a8a")} > Blue</button>
<button color="red" className="p-3 rounded-md capitalize font-semibold text-white font-serif bg-red-700"  onClick={()=>setcolor("#b91c1c")} >Red</button>
<button color="purple" className="p-3 rounded-md capitalize font-semibold text-white font-serif bg-purple-900" onClick={()=>setcolor("#b91c1c")} >Purple</button> */}