import React from 'react'
import Card   from './components/card'
import Rajan  from './components/darshan.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card  user='hello' age={20}/>
      <Card  user='ramayan' age={20}/>
      {/* <Rajan/> */}
    </div>
  )
}

export default App
