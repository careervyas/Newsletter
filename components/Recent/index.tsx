import React, { useEffect } from "react";
import SectionHeader from "../common/SectionHeader";
import Card from "./Card";
import client from "../client";
import groq from "groq";
import { useState } from "react";

const Recent = () => {
  const [data, setData] = useState([]);
  async function getPosts() {
    const posts = await client.fetch(groq`
    *[_type == "post"]
  `);
    return posts;
  }

  useEffect(() => {
    getPosts().then((posts) => {
      console.log(posts);
      setData(posts);
    });
  }, []);

  return (
    <>
      <section>
        <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader title="Recent Newsletters" />

          <div className="mt-10 flex justify-between">
          {data.map((item,index) => {
              return <Card data={item} key={index}/>;
            })}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
