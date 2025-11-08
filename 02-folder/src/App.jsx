import React from 'react'
import card from './components/card'

const App = () => {
  return (
    <div className='card'>
    <h1> Darshan</h1>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam esse repudiandae labore !</p>
     {card()}
    </div>
  )
}

export default App
