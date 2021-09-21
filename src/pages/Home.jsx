import React from 'react'
import Header from "../components/Header"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"
import Skills from "./Skills"
const Home = () => {
    return (
        <div className="home">
            <Header/>
            <About/>
            <Services/>
            <Skills/>
            <Contact/> 
        </div>
    )
}

export default Home
