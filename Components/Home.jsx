import React from 'react'
import { useSelector } from 'react-redux';


const Home = () => {
    const count = useSelector((state) => state.counter.count)
  


  return (
    <div>
 <h3>
        Home is  {count} <br/> <br/>

      </h3>
    </div>
  )
}

export default Home
