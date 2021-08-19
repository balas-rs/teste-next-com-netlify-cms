import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, Fragment } from 'react';
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

  
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])

  return (
    <div>
      <Fragment>
        <Head>
          <title>Teste Netlify SOS</title>
          <meta charSet="utf-8" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      </Fragment>
      <h1>Empreendimentos</h1>
      {props.posts.map(post => {
        return(
          <div key={post.titulo}>
            <h2>{post.titulo}</h2>
            <Markdown>{post.texto}</Markdown>
          </div>
        )
      })}
    </div>
  )
}

