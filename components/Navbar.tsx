import React from 'react'

function Navbar() {
  return (
    <nav className="py-10 flex justify-between items-center">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="font-bold lucide lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
          <p className="text-lg">B Card</p>
        </div>
        <div className="flex space-x-4"> 
          <p>Home</p>
          <p>Learn</p>
          <p>Help</p>
          <p>Blog</p>
          <p>About</p>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          <button className="px-3 py-1 border-[1px] border-black rounded-full">Sign In</button> 
       </div>
      </nav>
  )
}

export default Navbar
