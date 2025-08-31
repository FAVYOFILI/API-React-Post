import React from 'react'
import  './Hero.css'
const Hero: React.FC = () => {
  return (
    <main  className='hero'>
      {/* hero content */}
      <div className='hero-content '>
        <h1 >
          Search Teacher in <span>
            Mentoring Appointment
          </span>
        </h1>

        {/* sub text */}
      <p>
        Discover the best Mentors & institutions the city nearest to you.
      </p>

      {/* inputs */}

      <div className='input-holder'>
        {/* input 1 */}
        <div>
          <input type="text" />
        </div>

        {/* input 2 */}
        <div>
          <input type="text"  placeholder='Search School, Online'/>
        </div>

        {/* search button */}

        <div>
          <img src="" alt="" />
        </div>
      </div>
      </div>

      {/* overlay */}
      <div className='hero-overlay'>

      </div>
    </main>
  )
}

export default Hero