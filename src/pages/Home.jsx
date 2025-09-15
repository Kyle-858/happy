import React from 'react'
import Loading from '../components/Loading.jsx'
import { useState, useEffect } from 'react'

const Home = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
            // Simulate a 2-second loading delay
            const timer = setTimeout(() => {
                setLoading(false);
            }, 2000);
            // Cleanup in case component unmounts early
            return () => clearTimeout(timer);
        }, []);
    

  return (
    <>
    {loading ? <Loading/> : 
    <div>
      Home
    </div>}
    </>
  )
}

export default Home
