import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import ExternalLink from './ExternalLink'

const Footer = () => {
  // the first argument in track() becomes the google analytics 'Action' property after passing through segment
  // all events are of Action 'Homepage'
  const fireEvent = (category, label) => {
    window.analytics.track('Footer', {
      category,
      label
    })
  }

  return (
    <div className='footer flex-shrink-0'>
      <div className='container'>
        <div className='row' style={{ minHeight: '200px' }}>
          <div className='col-12 col-sm-4 col-md-2'>
            <h5>Learn</h5>
            <ul>
              <li><Link to='/docs'>Tutorials</Link></li>
              <li><Link to='/docs'>Docs</Link></li>
              <li><Link to='/faq'>FAQs</Link></li>
            </ul>
          </div>
          <div className='col-12 col-sm-4 col-md-2'>
            <h5>Company</h5>
            <ul>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/jobs'>Jobs</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <div className='col-12 col-sm-4 col-md-2'>
            <h5>Discover</h5>
            <ul>
              <li><ExternalLink to='#'>Public µSites</ExternalLink></li>
              <li><ExternalLink to='#'>Search topics</ExternalLink></li>
            </ul>
          </div>
          <div className='col-12 col-md-4 text-md-right'>
            <ul className='list-inline social'>
              <li className='list-inline-item' onClick={ () => { fireEvent('social-link-click', 'github') }}>
                <ExternalLink to='https://github.com/'><FontAwesomeIcon icon={faGithub}/></ExternalLink>
              </li>
              <li className='list-inline-item' onClick={ () => { fireEvent('social-link-click', 'youtube') }}>
                <ExternalLink to='https://www.youtube.com/channel/UC7E3_hURgFO2mVCLDwPSyOQ'><FontAwesomeIcon icon={faYoutube}/></ExternalLink>
              </li>
              <li className='list-inline-item' onClick={ () => { fireEvent('social-link-click', 'twitter') }}>
                <ExternalLink to='https://twitter.com/'><FontAwesomeIcon icon={faTwitter}/></ExternalLink>
              </li>
              <li className='list-inline-item' onClick={ () => { fireEvent('social-link-click', 'discord') }}>
                <ExternalLink to='https://discordapp.com/invite/thkJHKj'><FontAwesomeIcon icon={faDiscord}/></ExternalLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6 sub-footer'>
            <span className='sub-footer-item'>&copy; 2020 The Memphis Project, Inc.</span>
          </div>
          <div className='col-12 col-sm-6 sub-footer text-sm-right'>
            <ul className='list-inline'>
              <li className='list-inline-item'><Link to='/legal/tos'>Terms of Service</Link></li>
              <li className='list-inline-item'><Link to='/legal/privacy-policy'>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
