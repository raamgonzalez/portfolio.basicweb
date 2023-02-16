import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { motion } from 'framer-motion'
import SocialIcons from './SocialIcons';

const About = () => {

  const { about, scrollingAbout, scrollingSpring } = useContext(GlobalContext);


  return (
    <>
      <a id="about"></a>
      <section className="about">
        <section className="about__section about__title">
          <p className="about__p--title">(ab)</p>
        </section>
        <motion.section 
          variants={scrollingAbout}
          initial="hidden"
          whileInView={"visible"}
          className="about__section resume">
          <p className="about__p">
            {about.resume}
          </p>
          <h3 className="about__h3">resume</h3>
        </motion.section>
        <section className="about__section soft">
            {
              about.soft.map((skills, index) => <p className="about__p about__p--skills" key={index}><span className='about__span'>$</span>{skills}</p>)
            }
          <h3 className="about__h3 h3--soft">soft</h3>
        </section>
        <motion.section 
            variants={scrollingAbout}
            initial="hidden"
            whileInView={"visible"}
            className="about__section hobbies">
            {
              about.hobbies.map((hobbie, index) => <p className="about__p about__p--hobbie" key={index}><span className='about__span'>#</span>{hobbie}</p>)
            }
          <h3 className="about__h3">hobbies</h3>
        </motion.section>
        <section className="about__section social">
            <SocialIcons/>
          <h3 className="about__h3">social</h3>
        </section>
        <motion.section 
            variants={scrollingAbout}
            initial={"hidden"}
            whileInView={"visible"}
            className="about__section study">
          <motion.section 
            variants={scrollingSpring}
            initial="hidden"
            whileInView={"visible"}
            className='about__section--study'>
            {
              about.study.map((i) => {return <img className='skills__img' src={i.src} alt={`logo de ${i.tile}`} key={i.id}/>})
            }
          </motion.section>
          <h3 className="about__h3">study</h3>
        </motion.section>
      </section>
    </>
  );
}

//------------Ver si lo puedo incorporar------------

/*Mi formación como arquitecto me ha brindado
una sólida comprensión de la estructura y la planificación, mientras
que mi interés por el diseño web me ha permitido explorar mi
creatividad y aprender sobre las últimas tecnologías.*/

export default About