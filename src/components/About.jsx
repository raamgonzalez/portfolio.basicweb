import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
// import {motion, useScroll, useTransform} from 'framer-motion'

const About = () => {


  // const { scrollYProgress } = useScroll()
  // const scale = useTransform(scrollYProgress, [0.29, 0], [0, 2]);
  const { about } = useContext(GlobalContext);


  return (
    <section className="about">
      <section className="about__section about__title">
	  	  <p className="about__p--title">(ab)</p>
      </section>
      {/* style={{scale}} */}
      <section  className="about__section resume">
        <p className="about__p">
          {about.resume}
        </p>
        <h3 className="about__h3">resume</h3>
      </section>
      <section className="about__section soft">
          {
            about.soft.map((skills, index) => <p className="about__p about__p--skills" key={index}><span className='about__span'>$</span>{skills}</p>)
          }
        <h3 className="about__h3 h3--soft">soft</h3>
      </section>
      <section className="about__section hobbies">
          {
            about.hobbies.map((hobbie, index) => <p className="about__p about__p--hobbie" key={index}><span className='about__span'>#</span>{hobbie}</p>)
          }
        <h3 className="about__h3">hobbies</h3>
      </section>
      <section className="about__section social">
        <section className='about__section--social'>
          {
            about.rrss.map((social) => <img className='skills__img' src={social.src} alt={`logo de ${social.tile}`} key={social.id}/>)
          }
        </section>
        <h3 className="about__h3">social</h3>
      </section>
      <section className="about__section study">
        <section className='about__section--study'>
          {
            about.study.map((i) => {return <img className='skills__img' src={i.src} alt={`logo de ${i.tile}`} key={i.id}/>})
          }
        </section>
        <h3 className="about__h3">study</h3>
      </section>
    </section>
  );
}

//------------Ver si lo puedo incorporar------------

/*Mi formación como arquitecto me ha brindado
una sólida comprensión de la estructura y la planificación, mientras
que mi interés por el diseño web me ha permitido explorar mi
creatividad y aprender sobre las últimas tecnologías.*/

export default About