import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Markdown from 'react-markdown'
import styles from '../styles/Home.module.css'
import postData from "../public/posts/2021-08-18-map-projectname-projeto-teste-2-texto-texto-de-teste-n-nto-aparecendo-na-tela-se-sim-deu-certoooo.json"


export default function Home() {

  const [ post, setPost ] = useState({})


  return (
    <div>
      <h1>Posts</h1>
      <h2>{postData.projectname}</h2>
      <Markdown children={postData.texto} />
      
    </div>
  )
}
