import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import GithubProjects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
      

export default function Home() {
  return (
   <>
      <div className="home">
       <Navbar />
       <Header />
       <About />
       <Experience />
       <GithubProjects />
       <Contact />
       <Footer />
      </div>
   </>
  )
}