import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <a
        className='social-icon-link facebook'
        href='https://www.facebook.com/VirAj2K/'
        target='_blank'
        rel="noopener noreferrer"
        aria-label='Facebook'
      >
        <i className='fab fa-facebook-f' />
      </a>
      <a
        className='social-icon-link linkedin'
        href='https://www.linkedin.com/in/viraj-agharkar-1232k/'
        target='_blank'
        aria-label='LinkedIn'
        rel="noopener noreferrer"
      >
        <i className='fab fa-linkedin' id="linkdin" />
      </a>
      <a
        className='social-icon-link youtube'
        href='https://www.youtube.com/channel/UCB_ZNGblkA5Nx-3UEjPPkfA'
        target='_blank'
        aria-label='YouTube'
        rel="noopener noreferrer"
      >
        <i className='fab fa-youtube' id="linkdin" />
      </a>
      <div></div>
      <span>VA_C_2K© 2022</span>
      <div></div>
      <a
        className='social-icon-link instagram'
        href='https://www.instagram.com/vac_2k'
        target='_blank'
        rel="noopener noreferrer"
        aria-label='Instagram'
      >
        <i className='fab fa-instagram' id="insta" />
      </a>
      <a
        className='social-icon-link github'
        href='https://github.com/VA-C-2K'
        target='_blank'
        rel="noopener noreferrer"
        aria-label='GitHub'
      >
        <i className='fab fa-github' id="github" />
      </a>
      <a
        className='social-icon-link discord'
        href='https://discordapp.com/channels/944493604905320478/944493604905320481'
        target='_blank'
        aria-label='Discord'
        rel="noopener noreferrer"
      >
        <i className='fab fa-discord' id="discord" />
      </a>
    </footer>

  )
}

export default Footer