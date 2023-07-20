import {faBed, faPlane, faCar, faMagnet, faTaxi, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./header.css";
import { DateRange } from 'react-date-range';
// import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';



const Header = ({type}) =>{

    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
        }
    ]);
    
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        Adult: 1,
        Children: 0,
        Room: 1
    });

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions((prev) => {return {
            ...prev, 
            [name]: operation === 'i' ? options[name] +1 : options[name] -1,
        };
    });
    };

    const handleSearch = ()=>{
       navigate('/hotels', { state: {destination, date, options}});
    }


    return (
        <div className="header">
           <div className={type === "list" ? "headerContainer listMode": "headerContainer"}>

           <div className="headerList">
            <div className="headerlistItem active">
            <FontAwesomeIcon icon={faBed} /> 
            <span>stays</span>   
            </div>
            <div className="headerlistItem">
            <FontAwesomeIcon icon={faPlane} /> 
            <span>flights</span>   
            </div>
            <div className="headerlistItem">
            <FontAwesomeIcon icon={faCar} /> 
            <span>car rental</span>   
            </div>
            <div className="headerlistItem">
            <FontAwesomeIcon icon={faMagnet} /> 
            <span>Attractions</span>   
            </div>
            <div className="headerlistItem">
            <FontAwesomeIcon icon={faTaxi} /> 
            <span>Airport Taxi</span>   
            </div>
           </div> 
             { type !== "list" &&
              <>
             <h1 className='headerTitle'>
              Who wouldn't want a discount? Jump in here!.
             </h1>
             <p className='headerDesc'>Get absolute reward for your money with maximum comfort. Getting 10% discount with free breakfast</p>
             <button className='headerBtn'>Sign in / Register</button>
             <div className='headerSearch'>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon'/> 
                <input type='text' placeholder='Where are you going?'
                 className='headersearchInput'

                onChange={e=>setDestination(e.target.value)}
                 />
                </div>

                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/> 
               <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(
                date[0].startDate, "MM/dd/yyyy")}
                 to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

               {openDate && (<DateRange
               editableDateInputs = {true}
               onChange={(item) => setDate([item.selection])}
               moveRangeOnFirstSelection={false}
               ranges={date}
               className='date'
               minDate={new Date()}
               />
               )}
                </div>

                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon'/> 
                <span onClick={()=> setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.Adult} Adult . ${options.Children} Children . ${options.Room} Room`}</span>
                  {openOptions && <div className='options'>
                  <div className='optionItem'>
                   <span className='optionText'>Adult</span>

                   <div className='optionCounter'>
                   <button 
                   disabled = {options.Adult <= 1}
                   className='optionCounterButton' onClick={()=>handleOption('Adult', 'd')}>-</button>
                   <span className='optionCounterNumber'>{options.Adult}</span>
                   <button className='optionCounterButton' onClick={()=>handleOption('Adult', 'i')}>+</button>
                   </div>

                  </div>
                  
                  <div className='optionItem'>
                   <span className='optionText'>Children</span>

                   <div className='optionCounter'>
                   <button 
                   disabled = {options.Children <= 0}
                   className='optionCounterButton' onClick={()=>handleOption('Children', 'd')}>-</button>
                   <span className='optionCounterNumber'>{options.Children}</span>
                   <button className='optionCounterButton' onClick={()=>handleOption('Children', 'i')}>+</button>
                   </div>

                  </div>

                  <div className='optionItem'>
                   <span className='optionText'>Room</span>

                   <div className='optionCounter'>
                   <button 
                   disabled = {options.Room <= 1}
                   className='optionCounterButton' onClick={()=>handleOption('Room', 'd')}>-</button>
                   <span className='optionCounterNumber'>{options.Room}</span>
                   <button className='optionCounterButton' onClick={()=>handleOption('Room', 'i')}>+</button>
                   </div>

                  </div>
                  </div>}
                </div>

                <div className='headerSearchItem'>
                <button className='headerBtn' onClick={handleSearch}>Search</button>
                </div>
             </div>    
             </>
             }
           </div>
        </div>
    )
}

export default Header;