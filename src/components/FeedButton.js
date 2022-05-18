import React from 'react'
import './../css/FeedButton.css'

const FeedButton = ({text}) => {
  return (
    <div className={` ${text==="Feed" ? "buttonDesignFeed" : "buttonDesignDiscover"}`}>{text}</div>
  )
}

export default FeedButton