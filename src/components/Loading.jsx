import React from 'react'
import { useEffect } from 'react'
import './Loading.css'
import cup from '../../public/cup.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Loading = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    

  return (
    <div className="loading-bg">
        <img src={cup} alt="" className="loading-logo" data-aos="fade-up"/>
        <h2 className="loading-title" data-aos="fade-up">Happy</h2>
    </div>
  )
}

export default Loading
