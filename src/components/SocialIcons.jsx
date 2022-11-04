import React from 'react'
import  Image from './Image'
import Github from '../assets/Icon.png';
import slack from '../assets/slack.svg';

const socials = [
  {
    imgSrc: slack,
    socialLink: 'https://slack.com',
    alt: 'slack',
    className: 'slack_icon' 
  },
  {
    imgSrc: Github,
    socialLink: 'https://github.com/Udee101',
    alt: 'github',
    className: 'git_icon' 
  }
]

const SocialIcons =() => {
  return (
    <div className='social_icons'>
      {
        socials.map((social, i) => {
          return(
            <a href={social.socialLink} key={i}>
              <Image src={social.imgSrc} alt={social.alt} className={social.className} />
            </a>
          )
          
        })
      }
    </div>
  )
}

export default SocialIcons