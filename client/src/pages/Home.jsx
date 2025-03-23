import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testmonials from '../components/Testmonials'
import GenerateButton from '../components/GenerateButton'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testmonials/>
      <GenerateButton/>
    </div>
  )
}

export default Home