import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <a
        className='social-icon-link facebook'
        href='https://www.facebook.com/VirAj2K/'
        target='_blank'
        rel="noreferrer"
        aria-label='Facebook'
      >
        <i className='fab fa-facebook-f' />
      </a>
      <a
        className='social-icon-link linkedin'
        href='https://www.linkedin.com/in/viraj-agharkar-1232k/'
        target='_blank'
        aria-label='LinkedIn'
        rel="noreferrer"
      >
        <i className='fab fa-linkedin' id="linkdin" />
      </a>
      <a
        className='social-icon-link discord'
        href='https://discordapp.com/channels/944493604905320478/944493604905320481'
        target='_blank'
        aria-label='Discord'
        rel="noreferrer"
      >
        <i className='fab fa-discord' id="discord" />
      </a>
      VA_Creations© 2022
      <a
        className='social-icon-link instagram'
        href='https://www.instagram.com/vi_king_creations'
        target='_blank'
        rel="noreferrer"
        aria-label='Instagram'
      >
        <i className='fab fa-instagram' id="insta" />
      </a>
      <a
        className='social-icon-link github'
        href='https://github.com/Viraj-creation312'
        target='_blank'
        rel="noreferrer"
        aria-label='GitHub'
      >
        <i className='fab fa-github' id="github" />
      </a>
      <a
        className='social-icon-link skype'
        href='https://join.skype.com/invite/xV19GeMvuxSa'
        target='_blank'
        aria-label='Skype'
        rel="noreferrer"
      >
        <i className='fab fa-skype' id="skype" />
      </a>
    </footer>

  )
}

export default Footer