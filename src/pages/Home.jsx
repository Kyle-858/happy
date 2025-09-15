import React from 'react'
import Loading from '../components/Loading.jsx'
import { useState, useEffect } from 'react'
import Search from '../components/Search.jsx'
import map from '../assets/map.jpg'
import './Home.css'

const Home = () => {

    const [loading, setLoading] = useState(true)
    const [option, setOption] = useState('map')

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
    <>
        <Search option={option} setOption={setOption}/>
        {option === 'map' ? 
        <>
            <img src={map} alt="" className="map"/>
            <div className="bottom-modal">
                <div className="bars-list"></div>
            </div>
        </>
        : ''}
    </>}
    </>
  )
}

export default Home
