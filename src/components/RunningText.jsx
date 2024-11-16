import React from 'react'
import { assets } from '../assets/assets'

const RunningText = () => {
  return (
    <div><>
    <div className="running-text running-3">
      <div
        className="bg-img"
        data-background={assets.runningBg}
      />
      <div className="carouselTicker carouselTicker-nav" data-speed="fast">
        <ul className="text-anim carouselTicker__list scroller__inner inner-3">
          <li>Latest Projects</li>
          <li className="stroke-text">Web Development</li>
          <li>Latest Projects</li>
          <li className="stroke-text">Web Development</li>
          <li>Latest Projects</li>
          <li className="stroke-text">Web Development</li>
          <li>Latest Projects</li>
          <li className="stroke-text">Web Development</li>
        </ul>
      </div>
    </div>
    {/* ./ running-text */}
  </>
  </div>
  )
}

export default RunningText