import React from 'react'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <section className='footer__section'>
          <p className='footer__p'> Created in React © 2023 - Made with ❤️ by raam </p> 
          <SocialIcons/>
        </section>
      </section>
    </>
  )
}

export default Footer