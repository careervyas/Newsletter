import React, { useEffect,useState } from 'react'
import SectionHeader from '../common/SectionHeader'
import Card from './Card'
import client from '../../pages/client'
import groq from 'groq'

const Recommend = () => {
  const [data,setData] = useState([]);
async function getPosts() {
  const posts = await client.fetch(groq`
    *[_type == "post"]
  `);
  return posts;
}

  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
    });

    console.log(data);
  }, []);


  return (
    <>
      <section>
        <div className='mx-auto container px-4 py-16 sm:px-6 lg:px-8'>
          <SectionHeader title='Recommended Newsletters' />
          <div className='mt-10 flex justify-between'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  )
}

export default Recommend
