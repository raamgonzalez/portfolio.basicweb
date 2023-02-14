import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { GlobalContext } from '../context/GlobalContext';

const SocialIcons = () => {

    const {about, scrollingSpring} = useContext(GlobalContext);

  return (
    <section className="social__icons">
        <motion.section 
        variants={scrollingSpring}
        initial="hidden"
        whileInView={"visible"}
        className='about__section--social'>
        {
            about.rrss.map((social) => <motion.a
            whileHover={{ scale: 1.1, rotate: 30}}
            whileTap={{ scale: 1 }}
            href={social.href} key={social.id} target="_blank" rel='noreferrer'><img className='skills__img' src={social.src} alt={`logo de ${social.tile}`} /></motion.a>)
        }
        </motion.section>
    </section>
  )
}

export default SocialIcons