import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LinkBox from './LinkBox'

const Share = () => {
  const notify = () => {
    navigator.clipboard.writeText('https://newsletter.careervyas.com')
    toast.success('Copied to Clipboard')
  }
  return (
    <>
      <section className='relative overflow-hidden container mx-auto py-4 px-4 md:px-10 md:shadow-xl rounded-2xl mt-10 md:my-10 flex flex-col lg:flex-row justify-between items-center'>
        <img
          src='/elements/clouds.svg'
          alt='Clouds BG'
          className='absolute -bottom-5 w-[200%] -z-10 left-0'
        />
        <div className='lg:py-24'>
          <h2 className=' text-4xl font-semibold max-w-lg'>
            Make your Friends aware about CV Broadcast
          </h2>

          <LinkBox notify={notify} />
          <ToastContainer
            position='bottom-right'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            limit={2}
            theme='light'
          />
        </div>
        <img src='/vectors/share-vector.png' alt='Share it Vector' />
      </section>
    </>
  )
}

export default Share
