
import React from "react";
import { Routes, Route} from 'react-router-dom';
import MyCards from "./components/MyCards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";


function MyApp() {
  return (

    <div>
      
      
        <Header />
       
        <Routes>
         <Route exact path = '/' element ={<Hero/>} />
          <Route exact path = '/MyCards' element= {<MyCards/> } />
          
        </Routes>
     
    
    
        {/* <Destination/>   */}
        {/* <SignUp/> */}

        <div className="office">
          <div className="ekm">
            <Footer
              district="Ernakulam"
              location="Ambalampadi road Muvattupuzha"
              phone="74246882136"
              email="asdf@gmail.com"
            />
          </div>
          <div className="kollam">
            <Footer
              district="Kollam"
              location="Oochira road Kollam"
              phone="94246882136"
              email="hdjef@gmail.com"
            />
          </div>
          <div className="idukki">
            <Footer
              district="Idukki"
              location="Moolmattam road Thodupuzha"
              phone="87646882136"
              email="jwutyu@gmail.com"

            />
          </div>
        </div>
        
    </div>
  );

}

export default MyApp;


