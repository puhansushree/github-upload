import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import ScrollTopArrow from './ScrollTopArrow';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header_lejhro">
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8 text-left">
              <a href="/">
                <img className="image_lejhro_logo"
                  src={process.env.PUBLIC_URL + "/images/LEJHRO_LOGO.png"}
                  alt="Lejhropic1"
                  //height="130px"
                  //width="250px"
                />
              </a>
            </div>
           <div className="col-md-4 col-sm-4 text-right">
                  <Link className="link" target="_blank" to="/hashcodejr"><button className="btn btn_lejhro"><b>Coding For Kids</b></button></Link>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row mb-4 mb-4">
            <div className="col-md-5 col-sm-12">
              <br/>
            <h2 className="text-style text-left">
              <i><b>Transforming Life, </b></i></h2>
              <h2 className="text-style text-left"><i><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Creating Opportunity !! </b></i></h2>
            </div>
          <div className="col-md-7 col-sm-12">
            <a href="#/hashcodejr" target="_blank">
              <img className="image_lejhro_one" 
                src={process.env.PUBLIC_URL + "/images/Lejhro_image_1.jpg"}
                alt="Lejhropic2"  
               // height="400px"
               // width="600px"
              />
              <p className="text_on_image"><b>Coding Classes</b></p> 
              <p className="text_on_image1"><b>for Grade (1-12)</b></p>
              <button className="btn btn_on_image">Explore Now</button>
            </a>
          </div>
          </div>
         <br/>
        <div className="row text-background">
          <div className="col-md-4 col-sm-4">
            <br></br>
            <br></br>
            <img className="image_lejhro_two_dynamic"
              src={process.env.PUBLIC_URL + "/images/Lejhro_image_2.jpg"}
              alt="Lejhropic3"
              //height="800px"
              //width="800px"
              //id="image1"
            />
          </div>
          <div className="col-md-8 col-sm-8">
            <br></br>
            <h2 className="text_heading">Who are we?</h2>
            <p className="p1">Lejhro was established with a mission to empower the next generation of 
            innovators by training them in digital skills. Coding and programming are the trends of 2020 and 
            are expected to expand further with the emergence of new technologies.<br/>
            
            Our online training solutions enable candidates to learn with some of India's renowned industry experts.
            Our program allows beginners to learn at their own pace and choose different types of coding languages 
            for all levels, from elementary to advanced. Lejhro’s powerful and flexible digital education platform 
            offers a balanced mix of individual and group classes. Our industry-relevant curriculum provides learners 
            with theoretical understanding and enables them to get in-depth knowledge about the evolving industry trends.
            Our learning interface facilitates personalized teaching using two-way audio, video, and whiteboarding tools 
            where both instructor and student can see, hear, write, and interact in real-time.<br/>
            
            Apart from learning digital skills, students will get an opportunity to see how a high paced, 
            disruptive start-up environment looks like. Understanding the intense work culture and speed. 
            This will make them corporate ready and do way with the uncertainties of job life.<br/>
            </p>
          </div>
        </div>
        <br></br>
        <div className="row text-background">
           <div className="col-md-12 col-sm-12">
               <h2 className="text_heading">Who is the Course for?</h2>
               <p className="p1">
                       This course is designed for people of all skill levels and backgrounds who 
                       would like to build confidence in using digital technology. This may include 
                       students, those who have a degree, or those who want to improve their career prospects.
                </p>
            </div>
        </div>
        <br></br>
          <div className="row text-background">
              <div className="col-md-12 col-sm-12">
               <h2 className="text_heading">Achieve your goals with Lejhro</h2>
               <p className="p1">  &#10004; Learn the latest skills like Business Analytics, Data Science, Graphic Design, Python, and more</p>

               <p className="p1"> &#10004; Get ready for a career in high-demand fields like Automation, AI and cloud engineering </p>

               <p className="p1"> &#10004; Opportunity to gain hands on exp by working on live projects. </p>

               <p className="p1"> &#10004; Upskill with our short online courses </p>

               <p className="p1"> &#10004; Explore all domains before you complete your Engineering </p>

               <p className="p1"> &#10004; Become industry ready with multiple skill competency </p>
            </div>
            </div>
            <div className="row text-background">
              <div className="col-md-12 col-sm-12 text-right">
                 <a href="https://docs.google.com/forms/d/10C_yaxWdNA4GUsIF8Ib668so8WFxhIdbLZ34R_ZFbLU/edit" 
                 target="_blank"><i><b className="register_color">Register here for Lejhro Certification</b></i></a>
              </div>
            </div>
           </div>
           <ScrollTopArrow />
        </div>
      <br></br>
      
      </>
  );
}

export default App;
