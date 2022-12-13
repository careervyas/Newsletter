import React from 'react'

const About = () => {
  return (
    <section className='bg-[#E0E3FF]'>
      <div className='container mx-auto px-4 py-10 flex flex-col items-center justify-center md:flex-row'>
        <div className='max-w-xl'>
          <h2 className='font-semibold text-4xl'>About Us</h2>
          <p className='mt-5'>
          Career Vyaas is a porfessional guidance and mentoring platform. We match students with the best and most renowed mentors across the country, guiding them down the right career path. Our mission is to strengthen the vector of education by defining career guidance in new light.

          </p>
        </div>
        <img src='/vectors/about-vector.png' alt='' />
      </div>
    </section>
  )
}

export default About
