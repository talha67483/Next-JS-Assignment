import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='  	'>
        <nav className=' bg-gray-600 text-white font-mono font-semibold  text-lg   w-full  fixed top-0 ' >
        <ul className='flex text-center	' >
            <Link href="/" className=' p-5' ><li>Home</li></Link>
            <Link href="about" className=' p-5'><li>About</li></Link>
            <Link href="" className=' p-5' ><li>Contact</li></Link>
            <div className='text-center mt-5 '>          
                <Link href="" className=' p-2 border-2 border-black border-solid rounded-lg h-1 w-2 bg-black-300 bg-black-300 ml-7 bg-black text-white font-bold text-lg' ><button>Login</button></Link>
            <Link href="" className=' p-2 border-blue border-solid rounded-sm h-1 w-2 bg-black-300  ml-7 text-white font-bold text-lg bg-blue-500 ' ><button>Sign in</button></Link>
            </div>
  

        </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
