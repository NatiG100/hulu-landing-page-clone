import Head from 'next/head'
import Image from 'next/image'
import Advertisment from '../src/components/Advertisment'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import LiveSports from '../src/components/LiveSports'
import LiveTVSection from '../src/components/LiveTVSection'
import Plan from '../src/components/Plan'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <Advertisment />
      <LiveTVSection />
      <LiveSports />
      <Plan />
      <Footer />
    </>
  )
}
