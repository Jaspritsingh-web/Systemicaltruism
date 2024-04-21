import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className="bg-red-400 text-white flex justify-between items-center px-4 py-2">
      <h1 className="text-xl font-bold">SHE SHARE VACATION RENTALS</h1>
      <div className="flex space-x-2">
        <button className="bg-transparent border border-white hover:bg-white  hover:text-gray-800 text-white font-bold py-2 px-4 rounded">LOGIN</button>
        <button className="bg-transparent border border-white hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 rounded">REGISTER</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar