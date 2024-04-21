import React from 'react'
import Datepicker from "./Datepicker";
const Frontsroom = () => {
  return (
   <>
     <div  className="flex flex-col justify-center items-center ">
      <h1 className="text-center font-bold  mt-3 text-2xl">Share a Room</h1>
      <div className="flex">
        <label>Name: <input className=" border-2 mt-8 px-1.5 text-black rounded-sm  border-black " type="text" name="" id="" /></label>
       
      </div>
      <div className="flex">
        <label htmlFor="">Location: <input className=" border-2 mt-8 px-1.5 text-black rounded-sm  border-black " type="text" /></label>
        
      </div>

      <div className="flex">
        <label htmlFor="">Price:  <input className=" border-2 mt-8 px-1.5 text-black rounded-sm  border-black " type="number" name="" id="" /></label>
       
      </div>
 <div className="m-2">
 <Datepicker />
 </div>
         <div className="mb-3">
         <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
         </div>
      
    </div>
   </>
  )
}

export default Frontsroom