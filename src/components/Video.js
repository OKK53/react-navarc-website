import React from 'react'
// import naVid from 'assets/naVid.mp4'
import navarclast from 'assets/navarclast.mp4'
function Video() {
  return (
    <div>
        <video className='w-full h-[720px] object-cover' src={navarclast} autoPlay loop muted />
    </div>
  )
}

export default Video