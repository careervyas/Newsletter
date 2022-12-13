import React from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import client from '../client'
import groq from 'groq'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'

interface Props {
  data: any
  key:any
};

const Card = ({data,key}:Props) => {
  const [author, setAuthor] = useState<string>("");
  const imageProps = useNextSanityImage(client, data?.mainImage);

  useEffect(() => {  
    const authorQuery = groq`*[_type=="author" && _id=="${data?.author?._ref}"]`;

    client.fetch(authorQuery).then((res) => {
      console.log(res);
      setAuthor(res[0]?.name);
    });

  })
 
  return (
    <Link
    href={{ pathname: "/slug", query: { keyword: `${data.slug.current}` } }}
  >
    <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-sm'>
      <img
        alt='Office'
        src={imageProps?.src}
        className='h-56 w-full object-cover'
      />

      <div className='bg-white p-4 sm:p-6'>
        <a href='#'>
          <h3 className='font-cursive mt-0.5 text-lg text-gray-900'>
            {data?.title}
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
            <p className='text-base'>{author}</p>
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
            {new Date(data?.publishedAt).toDateString()}
            </time>
          </div>
        </div>
      </div>
    </article>
    </Link>
  )
}

export default Card
