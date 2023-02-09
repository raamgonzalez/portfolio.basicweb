
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import SoftIcons from './SoftIcons'

const Skills = () => {

    const { softwares } = useContext(GlobalContext)


  return (
    <section className='skills'>
      <section className="skills__section skills--empty"></section>
      <section className="skills__section skills__title">
	  	  <p className="skills__p--title">(ab)</p>
      </section>
      <section className="skills__section softicons">
        <SoftIcons/>
      </section>
      <section className="skills__section architect">
        <img src="#" href="#" className='project__img' alt="tipo"/>
        <h3 className="skills__h3">arquitecto</h3>
      </section>
      <section className="skills__section extra">
        <p className="skills__p">text extra</p>
        <h3 className="skills__h3">Extra</h3>
      </section>
    </section>
  )
}

export default Skills
