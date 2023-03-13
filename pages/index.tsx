import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar, HomePage, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <section>

      <Navbar />

      <HomePage />

      <Footer />

    </section>
  )
}

export default Home
