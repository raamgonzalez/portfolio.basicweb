import React from 'react'
import About from '../components/About'
import MainContainer from '../components/MainContainer'
import ProjectContainer from '../components/ProjectContainer'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home
