import React from 'react';
import './fProperties.css';

const FProperties = () => {
    return  <div className='fp'>
         <div className='fpItem'>
          <img src='https://www.nihotour.com/images/hotelimages/5038.jpg' alt='' className='fpImg'/>
          <span className='fpName'>Golden Tulip</span>
          <span className='fpCity'>Lagos</span>
          <span className='fpPrice'>Starting from 70,000</span>
          <div className='fpRatings'>
            <button>7.6</button>
            <span>Excellent</span>
          </div>
          </div>

          <div className='fpItem'>
          <img src='https://cimages.timbu.com/travel/2016/06/sheraton.jpg' alt='' className='fpImg'/>
          <span className='fpName'>Sheraton</span>
          <span className='fpCity'>Abuja</span>
          <span className='fpPrice'>Starting from 100,000</span>
          <div className='fpRatings'>
            <button>8.0</button>
            <span>Excellent</span>
          </div>
          </div>

          <div className='fpItem'>
          <img src='https://estateintel.com/assets-ei/2018/02/The-Envoy.jpg' alt='' className='fpImg'/>
          <span className='fpName'>The Envoy</span>
          <span className='fpCity'>Abuja</span>
          <span className='fpPrice'>Starting from 50,000</span>
          <div className='fpRatings'>
            <button>7.0</button>
            <span>Excellent</span>
          </div>
          </div>

          <div className='fpItem'>
          <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/9e/26/61/poolside-view.jpg?w=700&h=-1&s=1' alt='' className='fpImg'/>
          <span className='fpName'>Hotel Presidential</span>
          <span className='fpCity'>Port-Harcourt</span>
          <span className='fpPrice'>Starting from 30,000</span>
          <div className='fpRatings'>
            <button>6.2</button>
            <span>Excellent</span>
          </div>
          </div>

          <div className='fpItem'>
          <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/dc/48/65/monty-suites-uyo.jpg?w=700&h=-1&s=1' alt='' className='fpImg'/>
          <span className='fpName'>Monty Suites</span>
          <span className='fpCity'>Calabar</span>
          <span className='fpPrice'>Starting from 25,000</span>
          <div className='fpRatings'>
            <button>5.8</button>
            <span>Very Good</span>
          </div>
          </div>
         </div>
}

export default FProperties;