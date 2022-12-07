import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <header className='bg-gradient-to-b from-accent/50 to-white'>
        <div className='mx-auto container flex justify-between pt-5 h-20 items-center gap-8 px-4 sm:px-6 lg:px-8'>
          <Link className='block text-teal-600' href='/'>
            <span className='sr-only'>Home</span>
            <Image
              height={100}
              width={100}
              src='/logo/cv-logo.png'
              alt='carrer vyas logo'
            />
          </Link>
          <Link
            className='block rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent/80'
            href='/'>
            Subscribe
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar
