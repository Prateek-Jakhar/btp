import React from 'react'
// import { Icon } from 'semantic-ui-react'
import '../css/HeaderOptions.css'
import Vector from '../assets/Vector.png'

const HeaderOptions = () => {
  return (
      <div className='main-header'>
          {/* <Icon size='big' enabled name='wechat'/> */}
          <img src={Vector} alt=''/>
          <span className='header-button'>Messages</span>
      </div>
     )
}

export default HeaderOptions