import { Copyright } from './Copyright'
import { SocialLinks } from './SocialLinks'
import React from 'react'

const Footer = () => {
  return (
    <footer aria-label='Site Footer' className='bg-[#C1FFF0] mt-10'>
      <div className='mx-auto max-w-5xl px-4  py-6 sm:px-6 lg:px-8'>
        <div className='flex justify-center text-teal-600'>
          <img src='/logo/cv-logo.png' alt='cv logo' />
        </div>
        <h2 className='text-4xl text-center font-bold'>Carrer Vyas</h2>
        <h2 className='md:text-3xl text-xl text-center text-dark/70 font-bold'>
          Strengthening the Vector of Knowledge
        </h2>
        <SocialLinks />
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer
