import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Markdown from 'react-markdown'
import styles from '../styles/Home.module.css'
import { handleJSONfiles } from '../postsHandler';
export async function getStaticProps() {

  const posts = handleJSONfiles()

  return {
    props: {posts}, // will be passed to the page component as props
  }
}


export default function Home(props) {

  const [ post, setPost ] = useState({})


  return (
    <div>
      <h1>Empreendimentos</h1>
      {props.posts.map(post => {
        return(
          <div>
            <h2>{post.titulo}</h2>
            <Markdown children={post.texto} />
          </div>
        )
      })}
    </div>
  )
}

