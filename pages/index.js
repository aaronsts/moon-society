import Head from 'next/head'
import Image from 'next/image'
import { Artists, Banner, Header, StyleGuide } from '../components'

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <Artists />
    </>
  )
}
