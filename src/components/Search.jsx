import React from 'react'
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
  <>
 
            <div className=" mr-3 mt-0.5 flex justify-center items-center text-xl font-[system-ui] font-medium">
             
              <input
                className=" border-2 mt-8 px-1.5 text-black rounded-sm  border-black "
                type="text"
                name="search"
                placeholder='Search Destination'
              />
              <button className=" pl-1.5 mt-7 relative   mr-2 rounded-sm hover:text-green-700  border-black ">
                <FaSearch  />
              </button>
            </div>
        
  </>
  )
}

export default Search