import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Markdown from 'react-markdown'
import styles from '../styles/Home.module.css'
import { fetchPostContent } from "../lib/posts"



export default function Home({ posts }) {


  console.log(posts)
  return (
    <div>
      <h1>Posts</h1>
  
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = fetchPostContent();
  return {
    props: {
      posts
    },
  };
};
