import React from 'react'
import './App.scss'
import { Navbar,Footer } from './components'
import { AboutUs,Belive,Blog,FindUs,Heading,Lourel,PhotoGallery } from './contents'
import Intro from './contents/Intro/Intro'
const App = () => {
  return (
    <div className ='app'>
      <h1 className="haeding">
        <Navbar />
        <Heading />
        <AboutUs />
        <Blog /> {/*Today Special */}
        <Belive />
        <Intro />
        <Lourel />
        <PhotoGallery />
        <FindUs />
        <Footer />
      </h1>
    </div>
  )
}
//https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=0-1&t=Onr9dy261oUETWiV-0
export default App