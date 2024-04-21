import React from "react";
import Datepicker from "./Datepicker";
import Search from "./Search";
import './Mainfirst.css'
const Mainfirst = () => {
  return (
    <div className="bcolor">
      <div className=" w-full max-w-screen-xl p-4 py-6 ">
        <div className="md:flex md:justify-around">
          <div className="grid md:grid-cols-3  justify-center  gap-4  sm:grid-cols-2">
            <div className="flex justify-center"><Datepicker/></div>
            <div className="flex justify-center"><Search/></div>
                
                  
                  <div className="flex justify-center">
                  <button className="bg-red-400 border border-black hover:bg-white  hover:text-gray-800 px-4 mt-2 py-4 text-white font-bold rounded">Create-Profile</button>
                  <button className="bg-red-400 border border-black hover:bg-white  hover:text-gray-800 px-4 mt-2 ml-3 py-4 text-white font-bold rounded">View-Profile</button>
                  </div>

                  

          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainfirst;
