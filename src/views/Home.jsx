import React from 'react'
import About from '../components/About'
import MainContainer from '../components/MainContainer'
import ProjectContainer from '../components/ProjectContainer'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <div className='wrapper'>
        <Header/>
        <main className='main'>
          <MainContainer/>
          <About/>
          <ProjectContainer/>
        </main>
      </div>
    </>
  )
}

export default Home
