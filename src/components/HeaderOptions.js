import React from 'react'
// import { Icon } from 'semantic-ui-react'
import '../css/HeaderOptions.css'
import LeftHeader from './LeftHeader'
import Vector from '../assets/Vector.png'
import dashimg from '../assets/dashboard-img.png'
import twopeople from '../assets/bi_people-fill.png'
import forum from '../assets/Forum.png'
import asessment from '../assets/Assesments.png'
import tests from '../assets/practice-tests.png'
import Opportunity from '../assets/Opportunity.png'
import application from '../assets/Applications.png'
import offer from '../assets/Offers.png'
import resume from '../assets/Resume.png'

const HeaderOptions = () => {
  return (
      <div className='menu'>
        <div classname="Dashboard">
          <img classname="image" src={dashimg} alt=''/>
          <span className='header-button'>Dashboard</span>
          </div>
          <div classname="People">
          <img classname="image" src={twopeople} alt=''/>
          <span className='header-button'>People</span>
          </div>
          <div classname="Forum">
          <img classname="image" src={forum} alt=''/>
          <span className='header-button'>Forum</span>
          </div>
          <div classname="messages">
          <img classname="image" src={Vector} alt=''/>
          <span className='header-button'>Messages</span>
          </div>
          <div classname="Assessments">
          <img classname="image" src={asessment} alt=''/>
          <span className='header-button'>Assesments</span>
          </div>
          <div classname="Opportunity">
          <img classname="image" src={Opportunity} alt=''/>
          <span className='header-button'>Opportunity</span>
          </div>
          <div classname="Application">
          <img classname="image" src={application} alt=''/>
          <span className='header-button'>Applications</span>
          </div>
          <div classname="Offers">
          <img classname="image" src={offer} alt=''/>
          <span className='header-button'>Offers</span>
          </div>
          <div classname="Resume">
          <img classname="image" src={resume} alt=''/>
          <span className='header-button'>Resume</span>
          </div>
      </div>
     )
}

export default HeaderOptions;