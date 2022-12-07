import React from 'react'

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <>
      <div className='flex gap-6 items-center'>
        <span>
          <img
            src='/elements/section-header-icon.svg'
            alt='section header icon'
          />
        </span>
        <h2 className='font-semibold text-4xl'>{title}</h2>
      </div>
    </>
  )
}

export default SectionHeader
