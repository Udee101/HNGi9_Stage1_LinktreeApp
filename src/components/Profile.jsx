import React from 'react'
import Image from './Image'
import ImageHover from '../assets/profileImgHover.png';
import ProfileImage from '../assets/profile-image.png';
import ShareProfile from '../assets/_Avatar share button1.png';
import ShareProfileHover from '../assets/_Avatar share button_hover.png';
import MoreIconHover from '../assets/more-hover.png';
import MoreIcon from '../assets/more.png';

const Profile = () => {
  return (
    <div className="profile_section">
        <div className="share_profile">
          <Image src={ShareProfileHover} alt='share button' className='share' />

          <Image src={ShareProfile} alt='share button' className='share' />
        </div>

        {/* 'more button' for mobile view */}
        <div className="more">
          <Image src={MoreIconHover} alt='more button' className='more_btn' />

          <Image src={MoreIcon} alt='more button' className='more_btn' />
        </div>

        <div className='img_container'> 
          <Image src={ImageHover} alt='change profile image' className='hover_img' />

          <Image src={ProfileImage} alt="profile" id='profile_img' className='profile-img'/>
        </div>
        
        <div className='profile_section_content'>
          <p id='twitter'>UdeeFrank</p>
          <p id='slack'>Frankenstylz</p>
        </div>  
      </div>
  )
}

export default Profile