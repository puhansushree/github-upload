import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ScrollTopArrow from './ScrollTopArrow';
import PricingIntro from './PricingIntro';
import PricingDeveloper from './PricingDeveloper';
import PricingExpert from './PricingExpert';
import PricingEnterpreneur from './PricingEnterpreneur';



class CodingKids extends Component {

    constructor() 
    {
        super();
        this.state = {
            url: "https://youtu.be/T4fACtxM46I"
        }
    }
    render() {
        return <>
            <header className="App-header_hashcode">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 text-left">
                            <a href="/hashcodejr">
                                <img className="image_hashcode_logo"
                                    src={process.env.PUBLIC_URL + "/images/HASHCODE_LOGO.png"}
                                    alt="Hashcodepic1"
                                   // height="130px"
                                   // width="300px"      
                                />
                            </a>
                        </div>
                        <div className="col-md-4 col-sm-6 text-right">
                            <br/>
                            <a href="https://forms.gle/FASyaqmwpExDmkuN7" target="_blank"
                                className="btn btn_hashcode"><i className="fa fa-calendar"><b> Book a FREE Demo!</b></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
           
            <div className="container">
                <div className="row form-group p-2">
                    <div className="col-md-12 col-sm-12 text-left">
                        <br></br>
                        <br></br>
                        <h4 className="text_top_heading_hcj">
                            <b><i>Make Your Child Future Ready </i></b></h4>
                           <h4 className="text_top_heading_hcj"><b><i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; with our Instructor-led Online Coding Classes !! </i></b></h4>
                    </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="row form-group">
                    <div className="col-md-2"></div>
                    <div className="col-md-9 col-sm-12 text-right">
                        <img className="image_hashcode_one"
                            src={process.env.PUBLIC_URL + "/images/Hashcode_image_1.jpg"}
                            alt="Hashcodepic2"
                            //height="450px"
                           // width="900px"
                           width="100%"
                        />
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-md-8 col-sm-8">
                        <ReactPlayer url={this.state.url} width="80%"></ReactPlayer>
                    </div>
                    <div className="col-md-4 col-sm-4"></div>
                </div>
                <br/>  
                <br/> 
                <div className="row text-background">
                    <div className="col-md-12 col-sm-12" >
                        <h2 className="text_heading">What is Coding for kids?</h2>
                        <p className="p1">
                        Coding is the method of giving commands to a computer to perform a specific task.
                        Computer programmers use a variety of ‘languages’ such as Java, 
                        Javascript, AI and Python to design, write and maintain computer programs. 
                        Learning to code broadens problem solving and critical thinking skills, 
                        making it a great opportunity for kids to cultivate those skills while young. 
                        Coding is used to design the websites, apps, games and other technologies we interact with every day.
                        </p>
                    </div>
                </div>
                <div className="col-md-12">
                  <ul class="flex-container row">
                     <li class="flex-item"><i className="hashcode_icon fa fa-spinner fa-icon fa-spin"></i>
                        <p><b><i className="text_icon"><span>Logic</span></i></b></p>
                     </li>
                     <li class="flex-item"><i className="hashcode_icon fa fa-database fa-icon"></i>
                        <p><b><i className="text_icon"><span>Structure</span></i></b></p>
                     </li>
                     <li class="flex-item"><i className="hashcode_icon fa fa-cogs fa-icon"></i>
                        <p><b><i className="text_icon">Creative</i></b></p>
                     </li>
                     <li class="flex-item"><i className="hashcode_icon fa fa-code fa-icon"></i>
                        <p><b><i className="text_icon">Coding</i></b></p>
                     </li>
                </ul>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                        <h2 className="text_heading"> Courses and Pricing </h2>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Jr Coder (Grade 1-2)</b>
                            </div>
                            <div className="card-body card_body_hcj" >
                                <PricingIntro />
                            </div>
                            <div className="card-footer card_footer_hcj">
                                <p>Your child will learn :</p>
                                <p>Sequence, Basic Coding Blocks, Loops</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Jr Coder (Grade 1-2)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                                 <PricingDeveloper />
                            </div>
                            <div className="card-footer card_footer_hcj">
                                <p>Your child will learn :</p>
                                <p>[Introduction to Coding]+</p>
                                <p>Variables,UI Events,Conditions, Nested Loop, Turtle Coding</p>               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Jr Coder (Grade 1-2)</b>
                            </div>
                            <div className="card-body card_body_hcj" >
                               <PricingExpert />
                            </div>
                            <div className="card-footer card_footer_hcj">
                               <p>Your child will learn :</p>
                               <p>[Developer Certificate]+</p>
                               <p>UI/UX,Data Control, Game Lab </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Jr Coder (Grade 1-2)</b>
                            </div>
                            <div className="card-body card_body_hcj" >
                               <PricingEnterpreneur />
                            </div>
                            <div className="card-footer card_footer_hcj">
                                <p>Your child will learn :</p>
                                <p>[Expert  Developer]+</p>
                                <p>Extended UI, Professional Game design</p>          
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Go Getter (Grade 3-5)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                             <PricingIntro />
                            </div>
                            <div className="card-footer card_footer_hcj">
                               <p>Your child will learn :</p>
                                <p>Sequence, Basic Coding Blocks, Loops</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Go Getter (Grade 3-5)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                              <PricingDeveloper />
                            </div>
                            <div className="card-footer card_footer_hcj">
                                <p>Your child will learn :</p>
                                <p>[Introduction to Coding]+</p>
                                <p>Variables,UI Events,Conditions, Nested Loop, Turtle Coding</p>             
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Go Getter (Grade 3-5)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                              <PricingExpert />
                            </div>
                            <div className="card-footer card_footer_hcj">
                            <p>Your child will learn :</p>
                            <p>[Developer Certificate]+</p>
                            <p>UI/UX,Data Control, Game Lab </p>                     
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Go Getter (Grade 3-5)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                               <PricingEnterpreneur />
                            </div>
                            <div className="card-footer card_footer_hcj">
                            <p>Your child will learn :</p>
                            <p>[Expert  Developer]+</p>
                            <p>Extended UI, Professional Game design</p>                   
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Explorer (Grade 6-8)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                                <PricingIntro />
                            </div>
                            <div className="card-footer card_footer_hcj">
                                <p>Your child will learn :</p>
                                <p>Sequence, Basic Coding Blocks, Loops, Java Basic</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Explorer (Grade 6-8)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                               <PricingDeveloper />
                            </div>
                            <div className="card-footer card_footer_hcj">
                                <p>Your child will learn :</p>
                                <p>[Introduction to coding]+</p>
                                <p>Variables,UI Events,Conditions, Nested Loop, Turtle Coding , Java Basic </p>              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Explorer (Grade 6-8)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                              <PricingExpert />
                            </div>
                            <div className="card-footer card_footer_hcj">
                               <p>Your child will learn :</p>
                               <p>[Developer  Certificate]+</p>
                               <p>UI/UX,Data Control, Game Lab, Web App Basic</p>                 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Explorer (Grade 6-8)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                               <PricingEnterpreneur />
                            </div>
                            <div className="card-footer card_footer_hcj">
                              <p>Your child will learn :</p>
                              <p>[Expert Developer]+</p>
                              <p>Web App and Data Processing, Professional Game design</p>           
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Creator (Grade 9-12)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                                <PricingIntro />
                            </div>
                            <div className="card-footer card_footer_hcj">
                                <p>Your child will learn :</p>
                                <p>Sequence, Basic Coding Blocks, Loops, Python Basic  </p>           
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Creator (Grade 9-12)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                              <PricingDeveloper />
                            </div>
                            <div className="card-footer card_footer_hcj">
                                <p>Your child will learn :</p>
                                <p>[Introduction to coding]+</p>
                                <p>Variables,UI Events,Conditions, Nested Loop, Turtle Coding , Python Basic, AI</p>
                            </div>                   
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Creator (Grade 9-12)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                              <PricingExpert />
                            </div>
                            <div className="card-footer card_footer_hcj">
                                <p>Your child will learn :</p>
                                <p>[Developer Certificate]+</p>
                                <p>UI/UX,Data Control, Game Lab, Web App Basic </p>       
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <br></br>
                        <div className="card">
                            <div className="card-header card_header_hcj text-white"><b>Creator (Grade 9-12)</b>
                            </div>
                            <div className="card-body card_body_hcj">
                              <PricingEnterpreneur />
                            </div>
                            <div className="card-footer card_footer_hcj">
                                 <p>Your child will learn :</p>
                                 <p>[Expert Developer]+</p>
                                 <p>Web App and Data Processing, Professional Game design</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>

                <div className="row text-background">
                    <div className="col-md-12">
                        <h2 className="text_heading">Why your child should start coding now?</h2>
                        <p className="p1">In this tech-savvy world, mastering coding at an early age helps children 
                        become better architects of their future. From automated cars to robot-assisted surgery to 
                        social media- code is revolutionizing every aspect of the world today. 
                        Coding helps students to develop academic skills and builds crucial soft 
                        skills like perseverance and organization. It instills valuable 21st-century 
                        skills that can translate into a career.
                            </p>
                    </div>
                </div>
                <br></br>
                <div className="row text-background">
                    <div className="col-md-12">
                        <h2 className="text_heading">Why <b>#</b>Code JR?</h2>
                        <p className="p1">
                        &#10004; Introducing computer programming to kids may seem tough, but our experience-based 
                                 technology methods can make it  fun and engaging for them. 
                                 <br/><br/>
                        &#10004; Our LIVE and interactive sessions are specifically designed for kids of the
                                 age group 6-14 to make them aware  about logic, structure, inventive thinking,
                                 sequencing, collaborating,  algorithmic thinking, etc.
                                 <br/><br/>
                        &#10004; Our faculty members are highly competent and qualified people with expertise in
                                 computer science and children’s education. They can assess the student and adjust
                                 the curriculum for optimal learning.
                                 <br/><br/>
                             </p>
                    </div>
                </div>
                <div className="row text-background">
                    <div className="col-md-12">
                        <h2 className="text_heading">#Code JR Way of Learning </h2>
                        <p className="p1">&#10004; Signup with your details for a free demo class. You’ll need: A desktop or tablet with strong internet connection.</p>

                        <p className="p1">&#10004; Our team will reach out to assist you in scheduling the class</p>

                        <p className="p1">&#10004; We will arrange ONE HOUR of interactive coding session with your child</p>

                        <p className="p1">&#10004; If you like the experience, you can enroll for the class packages that suits you</p>

                        <p className="p1">&#10004; Start Learning. 2-3 sessions per week will be scheduled. Happy Coding!</p>
                    </div>
                </div>
                <br></br>
            <div className="row text-background">
                    <div className="col-md-12">
                        <h2 className="text_heading">About <b>#</b>Code JR</h2>
                        <p className="p1">
                        #Code JR, an initiative by LEJHRO is a coding platform for kids. 
                        In our instructor-led online classes, students will learn concepts like AI, 
                        VR, App Development, Game Development, Database, API Integration, etc. 
                        Our courses ensure kids spend more time practicing than just learning theory. 
                        We include activities like playing games or solving logic puzzles to create an 
                        interactive and fun learning experience. Our diverse curriculum is built by leading 
                        industry experts, covering essential kid's coding languages that enhance algorithmic 
                        thinking and fundamentals like logic & structure.

                         </p>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-8 col-sm-8"></div>
                    <div className="col-md-4 text-right">
                        <h6>FOLLOW US : </h6>
                        <a href="https://www.facebook.com/Hashcodejr/" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + "/images/facebook.jpg"}
                                alt="Mypic3"
                            />
                        </a>
                                        &nbsp;
                         <a href="https://www.instagram.com/hashcodejr/" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + "/images/instagram.jpg"}
                                alt="Mypic4"
                            />
                        </a>
                                        &nbsp;
                       <a href="https://www.linkedin.com/company/code-jr/" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + "/images/linkedin.jpg"}
                                alt="Mypic5"
                            />
                        </a>
                                        &nbsp;
                      <a href="https://www.twitter.com/Hashcodej/" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + "/images/twitter.jpg"}
                                alt="Mypic6"
                            />
                        </a>
                        <br />
                    </div>
                </div>
                <ScrollTopArrow />
                </div>
        </>
    }
}

export default CodingKids;