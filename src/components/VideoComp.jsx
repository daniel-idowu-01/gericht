import React from 'react'
import Video from '../pages/images/restaurant-1192.mp4'

const VideoComp = () => {
  return (
    <section className='flex justify-center items-center'>
      <video alt='' src={Video} controls></video>
    </section>
  )
}

export default VideoComp
