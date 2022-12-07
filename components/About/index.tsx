import React from 'react'

const About = () => {
  return (
    <section className='bg-[#E0E3FF]'>
      <div className='container mx-auto px-4 py-10 flex flex-col items-center justify-center md:flex-row'>
        <div className='max-w-xl'>
          <h2 className='font-semibold text-4xl'>About Us</h2>
          <p className='mt-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius vel
            ducimus, dolore, ipsum consequatur modi exercitationem saepe,
            excepturi ut officiis voluptatum doloremque possimus corrupti ipsam
            est officia. Incidunt nemo sapiente dignissimos mollitia assumenda
            reiciendis quo voluptatem culpa repellat, ab accusamus
          </p>
        </div>
        <img src='/vectors/about-vector.png' alt='' />
      </div>
    </section>
  )
}

export default About
