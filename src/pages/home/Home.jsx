import React from 'react';
import "./home.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from '../../components/featured/featured';
import PropertyList from '../../components/propertyList/propertyList';
import FProperties from '../../components/fProperties/fProperties';
import MailList from '../../components/mailList/mailList'
import Footer from '../../components/footer/footer'

const Home = () => {
   return(
      <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
       <Featured/>
       <h1 className='homeTitle'>Browse by property type</h1>
      <PropertyList/>
      <h1 className='homeTitle'>Home guests Love</h1>
      <FProperties/>
      <MailList/>
      <Footer/>
      </div>
    </div>
   );
}

export default Home;