import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Style from "./page.module.css"


const page = () => {
  return (
    <div className={Style.bgc}>
        <Header></Header>
        <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}

export default page
