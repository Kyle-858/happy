import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Barinfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Barinfo = () => {

    const [sort, setSort] = useState("")
    const navigate = useNavigate()
    const [option, setOption] = useState('all')

  return (
    <div>
        <div className="back-btn" onClick={() => navigate(-1)}>
            <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div className="top-text">
            <h4 className="bar-title">Chili's, Pitt. Mills</h4>
            <span className="barinfo-distance">7.5 mi</span>
        </div>
        <div className="bar-hours">
            <span className="open-hours">Open 9am - 6pm</span>
            <span className="happy-hour">HH 5pm - 6pm</span>
        </div>
        <div className="drinks-options">
            <div className={`option ${option === 'all' ? 'selected' : ''}`} onClick={() => setOption('all')}>All</div>
            <div className={`option ${option === 'beer' ? 'selected' : ''}`} onClick={() => setOption('beer')}>Beer</div>
            <div className={`option ${option === 'cocktails' ? 'selected' : ''}`} onClick={() => setOption('cocktails')}>Cocktails</div>
            <div className={`option ${option === 'apps' ? 'selected' : ''}`} onClick={() => setOption('apps')}>Apps</div>
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className='sort-btn'>
            <option value="rating">Rating</option>
            <option value="rating">Price</option>
            <option value="rating">APV</option>
        </select>
        <div className="items-list">
            {new Array(18).fill(0).map((item, index) => (
            <div className="item" key={index}>
                <span className="item-name">Name</span>
                <span className="item-rating">3.5 / 5</span>
                <div className="item-priceinfo">
                    <span className="item-price">$9.99</span>
                    <span className="item-price">HH $5.99</span>
                </div>
            </div>))}
        </div>
    </div>
  )
}

export default Barinfo
