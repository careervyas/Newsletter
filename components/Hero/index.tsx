import Image from 'next/image'
import React from 'react'
import HeroForm from './HeroFrom'

const Hero = () => {
  return (
    <>
      <section>
        <div className='container px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
              <img
                alt='Party'
                src='/vectors/hero-vector.png'
                className='absolute inset-0 h-full w-full object-contain object-center'
              />
            </div>

            <div className='text-center lg:py-24'>
              <img src='/logo/cv-broadcast.svg' alt='' className='mx-auto' />
              <h2 className='text-xl md:text-3xl font-cursive mt-10 text-accent font-bold'>
                Followed by Every Student
              </h2>
              <p className='text-xl md:text-3xl  text-dark font-bold'>
                To Get Your daily spill now
              </p>

              <HeroForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
