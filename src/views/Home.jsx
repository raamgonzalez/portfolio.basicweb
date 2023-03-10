import React from 'react'
import About from '../components/About'
import MainContainer from '../components/MainContainer'
import ProjectContainer from '../components/ProjectContainer'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Loader from '../components/Loader'



const Home = () => {

  return (
    <>
    {/* <Loader/> */}
      <a id="initial"></a>
      <Marquee/>
      <div className='wrapper'>
        <Header/>
        <main className='main'>
          <MainContainer/>
          <About/>
          <ProjectContainer/>
          <Skills/>
          <Contact/>
        </main>
        <Footer/>
      </div>
      <Marquee/>
    </>
  )
}

export default Home
