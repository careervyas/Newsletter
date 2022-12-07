import React from 'react'

const Card = () => {
  return (
    <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-sm'>
      <img
        alt='Office'
        src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        className='h-56 w-full object-cover'
      />

      <div className='bg-white p-4 sm:p-6'>
        <a href='#'>
          <h3 className='font-cursive mt-0.5 text-lg text-gray-900'>
            How to position your furniture for positivity
          </h3>
        </a>

        <div className='mt-6 flex justify-between items-center gap-8 text-xs'>
          <div className='sm:inline-flex gap-2 sm:shrink-0 sm:items-center'>
            <p className='text-base'>
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
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
            </p>
            <p className='text-base'>Mihika</p>
          </div>
          <div className='sm:inline-flex gap-2 sm:shrink-0 sm:items-center'>
            <p className='text-base'>
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
                  d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </p>
            <time dateTime='2022-10-10' className='text-base'>
              16 Nov 2022
            </time>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card
