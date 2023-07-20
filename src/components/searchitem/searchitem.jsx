import React from 'react';
import './searchitem.css';

const SearchItem = () =>{
    return <div className='searchItem'>
       <img src='https://media-cdn.tripadvisor.com/media/photo-s/1e/9a/52/1c/presidential-suite.jpg'
        alt='' 
        className='searchItemImg'/>
        <div className='searchDesc'>
            <h1 className='siTitle'>Golden Tulip</h1>
            <span className='siDistance'>500m from city center</span>
            <span className='siTaxi'>Free Airport Taxi</span>
            <span className='siSubtitle'>
               Studio Apartment with Air conditioning
            </span>
            <span className='siFeatures'>
              entire studio. 1 bathroom .Kingsized bed
            </span>
            <span className='siCancelOp'>
                Free cancellation
            </span>
            <span className='sicancelSubtitle'>
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className='searchDetails'>
        <div className='siRating'>
            <span>Excellent</span>
            <button>8.9</button>
        </div>

        <div className='siDetailText'>
            <span className='siPrice'>$56</span>
            <span className='siTaxOp'>Includes taxes and fees</span>
            <button className='sicheckBtn'>See availability</button>
        </div>
        </div>
    </div>
}

export default SearchItem;