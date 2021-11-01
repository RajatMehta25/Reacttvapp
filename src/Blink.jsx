import React from 'react'
import './Blink.css'




const Blink = (props) => {
    return (
        <div>
            <video 
    id="my-video"
    className="video-js"
    controls
    preload="auto"
    width="300"
    height="250"
    poster={props.poster}
    
    
    
    data-setup="{}"
  >
    <source src={props.src} type="application/x-mpegURL"  />
    
  </video>
        </div>
    )
}

export default Blink
