import React from 'react'
import CssStyle from "./about.module.css"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const page = () => {
  return (
    <div className={CssStyle.bgc}>
      <Header></Header>
        <h1>This is About Page</h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum saepe repellat nulla quidem placeat maiores repudiandae facere adipisci officiis. Magnam nisi odio nam voluptatem veniam. Mollitia temporibus dolores optio sint reprehenderit, quos molestias consequatur provident ad quibusdam perspiciatis ea vitae velit. Exercitationem officia porro fugiat ex soluta impedit ea maxime cupiditate temporibus beatae, id consectetur a dolor assumenda veniam at quam ad? Officia suscipit tenetur magni omnis illum iusto minima quo quos ducimus soluta voluptatem, ipsa magnam reprehenderit natus eaque modi dicta cum expedita eum mollitia ratione nisi nulla? Cupiditate reiciendis suscipit in facilis a similique repellendus dignissimos sed aliquam.
      <Footer></Footer>
    </div>
  )
}

export default page
