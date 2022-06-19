import React from 'react'





const Blink = (props) => {
    return (
        <div>
         <video 
    id="my-player"
    className="video-js"
    controls
    preload="auto"
    width="300"
          height="250"
          // style={{filter: "drop-shadow(0 0 2rem crimson)"}}
    poster={props.poster}
  
    playsInline
    
    data-setup="{}"
  >
    <source src={props.src} type="application/x-mpegURL"  />
    <source src={props.src} type="application/dash+xml"  />
    {/* <source src={props.src} type="application/"  /> */}

  </video>
        </div>
    )
}

export default Blink
