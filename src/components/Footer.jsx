import React from 'react'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <section className='footer__section'>
          <p className='footer__p'> Created in React © 2023 - Made with ❤️ by raam </p> 
          <div className='footer__right'>
            <SocialIcons/>
            <a href="#initial" className="footer__a" title="#"><img src="https://icongr.am/jam/chevron-up.svg?size=16&color=2c188e" alt="Icono de doble flecha hacia arriba" className='footer__img' target="_blank" href="noopener noreferrer"/></a>
          </div>
        </section>
      </section>
    </>
  )
}

export default Footer