import React, { useEffect,useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from "../client";
import groq from 'groq'
import Link from 'next/link'

interface Props {
  data: any
  key:any
};


const Card = ({data,key}:Props) => {
  
  const [author, setAuthor] = useState<string>("");
  const builder = imageUrlBuilder(client);
  function urlFor(source:any) {
    console.log(source)
    return builder.image(source)
  }

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
        src={urlFor(data?.mainImage).width(200).url()}
        className='h-56 w-full object-cover'
      />

      <div className='bg-white p-4 sm:p-6'>
        <a href='#'>
          <h3 className='font-cursive mt-0.5 text-lg text-gray-900'>
            {data?.title}
          </h3>
        </a>

        <p className='mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3'>
         {data?.excerpt}
        </p>

        <div className='mt-6 flex justify-between items-center gap-8 text-xs'>
          <div className='sm:inline-flex gap-2 sm:shrink-0 sm:items-center'>
            <p className='text-base'>By:</p>
            <p className='text-base'>
              {author}
            </p>
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
