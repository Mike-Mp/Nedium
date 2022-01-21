import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="mt-10">
      <Head>
        <title>Nedium</title>
        <meta name="description" content="A markdown medium clone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="">
        <div className="text-center">
          <h1 className="text-6xl font-serif tracking-wide">
           Write. Read. Connect.
            <br />
           Welcome to Nedium.
           </h1>
          <p className="text-m mt-5 font-serif underline">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
        </div>
     </header>

     <main>

     </main>

      
    </div>
  )
}

export default Home
