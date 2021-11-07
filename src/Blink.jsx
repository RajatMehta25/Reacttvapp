import React from 'react'





const Blink = (props) => {
    return (
        <div>
         <video 
    id="my-player"
    className="video-js"
    controls
    preload="none"
    width="300"
    height="250"
    poster={props.poster}
    
    
    
    data-setup="{}"
  >
    <source src={props.src} type="application/x-mpegURL"  />
    <source src={props.src} type="application/dash+xml"  />

  </video>
        </div>
    )
}

export default Blink
