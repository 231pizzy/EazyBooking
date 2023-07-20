import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import './hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/mailList'
import Footer from '../../components/footer/footer'

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos =[
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeQcir_VZ29eVRnnqb-2cjcj8B_7c_7DXVxrUhsSxtufckTRCSNBWz5eFQfeFChHfu_g&usqp=CAU'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbquxL_S1OIvGDVyQEyF0OLfzgCfTFRvtFX9ZmSzRWCu96UGJGkw5yONR8ai2rAWPAZgY&usqp=CAU'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAz6a812UKJr2Sow9P5gSRviE4hMTDv8i-cmQE2NXitCYzww0EoTnquCssu06l2wbxr0&usqp=CAU'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IPZgWYG8Iiv9N8t3eWYphvKJ2b39DMs1s909qgMgkaq-TRHmDgcNxbRf5OTqxahQtJI&usqp=CAU'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJajSFDgHd4QD9yzT7a3cJuyMcnEOjSvAkLVV-6jjsv7VFB4RyoyrTGCMijWP0GMEMjs4&usqp=CAU'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JGZxFYMl5JBvasSNwO_u08-iABuXqTUzXw&usqp=CAU'
        }
    ]

    const handleOpen = (i) =>{
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) =>{
        let newSlideNumber;

        if(direction === 'l'){
            newSlideNumber = slideNumber === 0? 5 : slideNumber - 1
        }else{
            newSlideNumber = slideNumber === 5? 0 : slideNumber + 1
        }

        setSlideNumber(newSlideNumber);
    }
    return (
        <div>
       <Navbar/>
       <Header type="list"/>
       <div className='hotelContainer'>
       {open &&<div className='slider'>
         <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
         <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove('l')}/>
         <div className='sliderWrapper'>
            <img src={photos[slideNumber].src} alt='' className='sliderImg'/>
         </div>
         <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove('r')}/>
       </div>}
       <div className='hotelWrapper'>
       <button className='bookNow'>Reserve or Book now!</button>
       <h1 className='hotelTitle'>Sheraton Hotel</h1>
       <div className='hotelAddress'>
        <FontAwesomeIcon icon={faLocationDot}/>
        <span>Orchid road lekki </span>
       </div>
       <span className='hotelDistance'>
        Excellent location - 500m from city center
       </span>
       <span className='hotelPriceHighlight'>
        Book a room for a week at $300 and get free Airport taxi
       </span>
       <div className='hotelImages'>
        {photos.map((photo,i)=>(
            <div className='hotelImgWrapper'>
                <img onClick={()=> handleOpen(i)} 
                src={photo.src} 
                alt='' 
                className='hotelImg'/>
            </div>
        ))}
       </div>
       <div className='hotelDetails'>
       <div className='hotelDetailsTexts'>
        <h1 className='hotelTitle'>Stay in the heart of Lagos</h1>
        <p className='hotelDesc'>Book direct on the official site to get the best price guaranteed.
         Instant confirmation. Book direct to get the best deals, flexible 
         cancellation options and other benefits. Always a Smart Choice. 
         Exclusive rates. 24/7 support. Official website. Fastpas</p>
       </div>
       <div className='hotelDetailsPrice'>
       <h1>Perfect for your weekend vacation</h1>
        <span>
        This site uses its own cookies and those of third parties to support browsing,
         improve the user experience,
        </span>
        <h2>
            <b>$865</b>(6 nights)
        </h2>
        <button>Reserve or Book now!</button>
       </div>
       </div>
       </div>
       <MailList/>
      <Footer/>
       </div>
        </div>

    );
}

export default Hotel;