import React from 'react'
import Link from 'next/link'
import bgcStyle from "./header.module.css"

const Header = () => {
  return (
    <div className={bgcStyle.postion}>
        <nav className={bgcStyle.bgc}>
            <ul>
                <Link href="/"> <li className={bgcStyle.spread}>Home</li></Link>
                <Link href="about" target='_blank'> <li className={bgcStyle.spread}>About</li></Link>
                <Link href="contact"  target='_blank'> <li className={bgcStyle.spread}>Contact</li></Link>
                <Link href="services"  target='_blank'> <li className={bgcStyle.spread}>Services</li></Link>
                <Link href="/"><button className={bgcStyle.login}>Login</button> </Link>
                <Link href="/"><button className={bgcStyle.login}>Sign in</button> </Link>
                
                
            </ul>
        </nav>
      
    </div>
  )
}

export default Header
