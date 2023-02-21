
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { motion } from 'framer-motion'
import SoftIcons from './SoftIcons'


const Skills = () => {

    const { softwares, scrollingSpring } = useContext(GlobalContext)


  return (
    <>
      <a id="skills"></a>
      <section className='skills'>
        <section className="skills__section skills--empty"></section>
        <section className="skills__section skills__title">
          <p className="skills__p--title">(sk)</p>
        </section>
        <section 
          className="skills__section softicons">
          {
            softwares.map((software) => <motion.img   
            initial={"hidden"}
            whileInView={"visible"}
            variants={scrollingSpring} 
            className='skills__img' src={software.src} alt={software.title} key={software.id}/>) 
          }
        </section>
        <section className="skills__section architect">
          <motion.img 
          animate={{scale:1.05}}
          transition={{
            duration: 0.5,
            ease: 'backInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay:0.5,
          }}
          src="https://icongr.am/fontawesome/heart-o.svg?size=128&color=2A7887"
           href="#" className='architect__img' alt="tipo"/>
          <h3 className="skills__h3">arquitecto</h3>
        </section>
        <section className="skills__section extra">
          <p className="skills__p">text extra</p>
          <h3 className="skills__h3">Extra</h3>
        </section>
      </section>
    </>
  )
}

export default Skills

