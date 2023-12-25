import React from 'react'

const Buttons = ({bg,classList,colorSet}) => {
  const handleButtonClick = (classListt) => {
    // Update the parent state using the setChildState prop
    colorSet(classListt);
  };
  return (
    <button className={`p-3 rounded-md capitalize font-semibold text-white font-serif ${classList}`} 
    onClick={()=>handleButtonClick(classList)}
    >{bg}</button>
  )
}

export default Buttons
// OnClick={()=>{
//   if(bg==='green')
// colorSet("#14532d")
// elseif(bg==='red')
// colorSet("#b91c1c")
// elseif(bg==="blue")
// colorSet("#1e3a8a")
// elseif(bg==='purple')
// colorSet('#b91c1c')
// }