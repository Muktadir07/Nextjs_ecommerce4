import Header from '../../../Components/theme_4/Common/Header'
import React from 'react'
import Navbar from '../../../Components/theme_4/Common/NavbarPart'
import Footer from '../../../Components/theme_4/Common/Footer'
import Head from 'next/head'
import ShopPage from '@/Components/theme_4/ShopPage/ShopPage'


const index = () => {
  return (
    <>
    <div className='ThemeFour'>
      <Head>
        <title>Shop Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <Navbar/>
        <ShopPage/>
        <Footer/>

      </main>

    </div>
      
    </>
  )
}

export default index