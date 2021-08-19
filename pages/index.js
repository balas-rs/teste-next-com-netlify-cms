import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, Fragment } from 'react';
import Markdown from 'react-markdown'
import styles from '../styles/Home.module.css'
import { handleJSONfiles } from '../postsHandler';
import Script from 'next/script'


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
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
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

