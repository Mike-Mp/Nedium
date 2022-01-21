import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Nedium</title>
        <meta name="description" content="A markdown medium clone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-auto h-10">
          <h1>Welcome to Nedium</h1>
      </main>

      
    </div>
  )
}

export default Home
