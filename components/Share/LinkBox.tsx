import React from 'react'
import { SocialIcon } from 'react-social-icons'

interface LinkBoxProps {
  notify: () => void
}

const LinkBox = ({ notify }: LinkBoxProps) => {
  return (
    <div className='mt-10 '>
      <p className='mb-2 font-semibold text-lg'>Share with your Friends</p>
      <div className='flex gap-4 flex-col sm:flex-row'>
        <span className='relative'>
          <div className='w-auto md:w-96 rounded-md border border-slate-400 py-2 px-5 pr-10 sm:text-lg bg-white '>
            www.careervyas.com
          </div>
          <span
            onClick={notify}
            className='cursor-pointer hover:text-accent absolute top-1/2 -translate-y-1/2 right-2 flex gap-2  w-fit place-content-center text-gray-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
              />
            </svg>

            {/* <p>Copy to Clipboard</p> */}
          </span>
        </span>
        <div className='space-x-4 mx-auto'>
          <SocialIcon url='https://web.whatsapp.com/' />
          <SocialIcon url='https://instagram.com/' />
          <SocialIcon url='https://facebook.com/' />
        </div>
      </div>
    </div>
  )
}

export default LinkBox
