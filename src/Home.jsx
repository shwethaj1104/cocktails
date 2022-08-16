import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="home-container">
        <h3 className='home_header'>About : </h3>
        <p className='home_para'>Cocktails typically have a base liquor, like vodka or gin, and come with other flavored ingredients like fruit juice. Some drinks are simple and only involve two liquid ingredients. Other cocktails are more complex, involving a base liquor, several fruit juices, spices, and a garnish.</p>
      </div>
    </div>
  )
}

export default Home