import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Navbar, Nav, Carousel} from 'react-bootstrap'


   const Hail1 =()=>{
    return(
        <div class="bodyy">
            <div className="bar">
                <div class="bar1">
                <div class="bar2"><i class="fas fa-phone-alt"></i><h6 class="num">+234 (0) 894820401</h6></div>
                <div class="bar3"><i class="far fa-envelope"></i><Link to='/cont'><h6 class="enq" >Contact Us</h6></Link></div>
                </div>
            </div>
        <div className="car">
    <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
                <img className="logo" src="./images/w1.png" width="180px" height="80px"/>
            <Nav className="mr-auto">    
                <Link class="nav-link" to='/'>Home</Link>
                <Link class="nav-link" to='/cargo'>Cargo Delivery</Link>
                <Link class="nav-link" to='/rent'>Rent a Van</Link>
                <a class="nav-link" href='https://moovafrica.com/shop2me/'>Shop2me</a>
                <Link class="nav-link" to='/deals'>Deals</Link>
                <Link class="nav-link" to='/hail1'>Hail a Repair</Link>
                <a class="nav-link" href='https://moovafrica.com/news/'>Logistics News</a>
                <a class="nav-link" href='https://moovafrica.com/delivery/pages/login'>Login/Sign Up</a>
                <div className="vl"></div>
                <Link id="ser" to='/search'><i class="fas fa-search"></i></Link>
            </Nav>  
        </Navbar.Collapse>
    </Navbar>
    </div> 
    <div class="cre">
        <div class="cre1 mt-4">
            <div class="cre2">
                <h5 id="gadx">Gadgets</h5>
                <h5 id="wee">We handle repairs of all sort of electronics and house whole equipment.</h5>
                <h6 id="gad2"> The possibility is endless..</h6>
            </div>
            <div class="cre3">
                <h5 id="gadx">Machines</h5>
                <h5 id="wee">Sometimes people wonder where you get some of your heavy duty, medium and light 
                    machines fixed. I guess you got the solution</h5>
                <h6 id="gad2">At Moov Africa we profer that solution</h6>
            </div>
        </div>
        <div class="cre4">
            <div class="red"></div>
            <h2>Excellence through </h2>
            <h2>quality</h2>
            <h6 id="gad">Moov Africa helps you get your daily gadgets fixed at affordable prices. 
                We have experienced repair outlets with the guarantee of giving you the best services</h6>
           
            <div class="red"></div>
        </div>
    </div>
    <div class="rep">
        <div class="shi">
        <div class="red"></div>
            <h3 id="our1">Our <strong>Assurance</strong> to <em>device</em> owners</h3>
            <h6 id="our2">Moov Africa partners with professional engineers and specialist in the divers fields, 
            to yeild high quality services on your repairs.</h6>
            <h6 id="our3">Get in touch and feel the difference.</h6>
        <Link to=""><button class="buttn" type="submit" style={{backgroundColor:"rgb(206, 0, 88)", width:"200px",
         height:"40px",borderRadius:"5px", color:"white",marginTop:"15px"}}>
            <h6 id="tac">Contact Us</h6></button></Link>    
        </div>
    </div>
    <div class="pho"><img id="src" src="./images/repair5.jpeg" alt="Phone pic" width="580px" height="400px"/></div>    
    <div class="pho1">
        <div class="pho2">
            <div class="pho3">
                <div class="pho4">
                    <div class="imag"><div class="img2"><h6 id="ele">Electronics</h6></div></div>
                    <div class="imag1"><div class="img2"><h6 id="ele">Machines</h6></div></div>
                </div>
                <div class="pho5">
                    <div class="imag2"><div class="img2"><h6 id="ele">Phones</h6></div></div>
                    <div class="imag3"><div class="img2"><h6 id="ele">Gadgets</h6></div></div>
                </div>
            </div>
            <div class="pho6">
                <div class="red"></div>
                <div><h2>Pick Fix and</h2>
                    <h2>Return</h2>
                    <h6 id="gad">Have your damaged devices taken out for urgent professional 
                    repair and returned to you. Faulty device, no time to waste in trafic. We'll pick, repair 
                    and return to you. Repair done by verified experienced technicians.</h6>
                    <h4 id="sav"><em>Save cost</em></h4>
                    <h6 id="gad">Get a temporary replacement while you wait.</h6>
                    <h2>Hail a Repair</h2>
                    <div class="red"></div>
                </div>
            </div>
        </div>
    </div>
    <div className="foot" fluid={true} style={{backgroundColor:'black', height:'400px',}} variant='dark'>
                <Row>
                    <Col>
                    <h6 id="las1">About</h6>
                    </Col>
                    <Col>
                    <h6 id="las2">Store</h6>
                    </Col>
                    <Col>
                    <h6 id="las3">Get in touch</h6>
                    </Col>
                    <Col>
                    <h6 id="las4">Social 
                      <a href="https://web.facebook.com/moov.nigeria?_rdc=1&_rdr" ><i className="fab fa-facebook-f"></i></a> 
                      <a href="https://twitter.com/moovnigeria"><i className="fab fa-twitter"></i></a>
                        <i className="fab fa-instagram"></i>
                       <a href="https://www.linkedin.com/company/moovafrica/"><i className="fab fa-linkedin-in"></i></a>
                    </h6>
                    </Col>   
                </Row>
                <Row>
                    <Col>
                    <h6 id="ll">An independent Courier, Haulage n Logistics</h6>
                    </Col>
                    <Col>
                    <h6 id="l1">23 Albert Road</h6>
                    </Col>
                    <Col>
                    <h6 id="l2">Mon-Sat: 9:30am-6pm/Sun 11am-4pm</h6>
                    </Col>
                    <Col>
                    <Link to='/register'><button className="bttn" type="submit" style={{ width:"180px", height:"43px", borderRadius:"4px",outline:"none"}}>
                        <h6 className="news" >Sign Up</h6></button></Link>
                    </Col>   
                </Row>
                <Row>
                    <Col>
                    <h6 id="lo"> Company with amazing services and Packages,</h6>
                    </Col>
                    <Col>
                    <h6 id="l12">Southsea</h6>
                    </Col>
                    <Col>
                    <h6 id="l21">+44(0)2392426388</h6>
                    </Col>
                    <Col>
                    
                    </Col>   
                </Row>
                <Row>
                    <Col>
                    <h6 id="lo">which include Shop2me and Hail a Repair</h6>
                    </Col>
                    <Col>
                    <h6 id="l12">P05 2SE</h6>
                    </Col>
                    <Col>
                    <h6 id="l21">shop@bored.southsea.co.uk</h6>
                    </Col>
                    <Col>
                    </Col>   
                </Row>
                <Row id="row">
                    <Col>
                    <h6 id="pac"><a href=""/>About</h6>
                    </Col>
                    <Col>
                    <h6 id="pac1">Delivery & Returns</h6>
                    </Col>
                    <Col>
                    <h6 id="pac2">Contact</h6>
                    </Col>
                    <Col>
                    <h6 id="pac3">Terms and Condition</h6>
                    </Col>
                    <Col>
                    <h6 id="pac4">Privacy</h6>
                    </Col>
                    <Col>
                    <h6 id="pac5">Cookies</h6>
                    </Col>
                    <Col id="cc"></Col>
                    <Col id="cc"></Col>
                    <Col id="cc"></Col>
                    <Col id="cc"></Col>
                    <Col id="cc"></Col>
                    
                </Row>


            </div>
    
    
      </div>
        )}
      export default Hail1