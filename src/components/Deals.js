import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Col, Row} from 'react-bootstrap'



const Deals =()=>{
    return(
        
        <div>
            <div className="bar">
            <div className="bar1">
                <div className="bar2"><i class="fas fa-phone-alt"></i><h6 class="num">+234 (0) 894820401</h6></div>
                <div className="bar3"><i class="far fa-envelope"></i><Link to='/cont'><h6 className="enq" >Contact Us</h6></Link></div>
                </div>
            </div>
        <div className="car1">
        <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
                <img className="logo" src="./images/w1.png" alt="picture" width="180px" height="80px"/>
            <Nav className="mr-auto">    
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/cargo'>Cargo Delivery</Link>
                <Link className="nav-link" to='/rent'>Rent a Van</Link>
                <a className="nav-link" href='https://moovafrica.com/shop2me/'>Shop2me</a>
                <Link className="nav-link" to='/deals'>Deals</Link>
                <Link className="nav-link" to='/hail1'>Hail a Repair</Link>
                <a className="nav-link" href='https://moovafrica.com/news/'>Logistics News</a>
                <a className="nav-link" href='https://moovafrica.com/delivery/pages/login'>Login/Sign Up</a>
                <div className="vl"></div>
                <Link id="ser" to='/search'><i class="fas fa-search"></i></Link>
            </Nav>  
        </Navbar.Collapse>
    </Navbar>
    <div className="deal"> 
    <div className="deal2">
            <h4 className="wha">What we offer</h4>
            <h3 className="wha1">Exceptional Services</h3>
            <h6 className="whaa">We would always beat your imagination, and even more. 
                We partner with you to give you exactly what you need, now and always.
             </h6>
        </div>
           
    </div>   
    </div> 
    <div className="pur">
        <div className="pur1">
            <div className="pur2"><i class="far fa-handshake"></i></div>
            <div className="pur3">
                <h6 id="for">Opportunities</h6>
                <h2>We set out varieties of business platforms</h2>
                <div className="var">
                    <div className="var1"><h2>just to suit your need</h2></div>
                    <div className="var2"><i id="class"class="fas fa-long-arrow-alt-right"></i></div>
                </div> 
                <h6 id="for">For better explanation, you could always reach out to Larry. 
                    Meetings could be set up to give you your custom services</h6>  
            </div>
        </div>
    </div>
    <div className="red col-md-3 offset-md-3"></div>
    <div className="red1"><h3>In your <strong id="qe">Quest</strong> to find the <em>easy</em> life</h3></div>
    <div className="red1"><h6>We offer our patners the choice to make the right business Moov. Moov Africa is 
        the best </h6></div>
    <h6 className="red1">platform to always count on.</h6>
    <div className="redd col-md-4 offset-md-4"><img src="./images/deals6.jpg" alt="deals image" width="400px" height="400px"/></div>
    <div className="red col-md-3 offset-md-3"></div>
    <div className="ma">
        <div class="mag"><img id ="mag1"src="./images/mmm.jpg" width="300px" height="300px"/></div>
            <div className="mag1">
            <div className="mag2">
                <h2 id="le">Learn more about what we do. Get in touch with us at Moov Africa.</h2>
                <h6 id="le1">We market and sell your products with us and you</h6>
                <h6 id="le2">and you get real time business deals</h6>
            </div>
            <div className="white"></div>  
            </div>
            
        </div>
        <div className="foot" style={{backgroundColor:'black', height:'400px',width:'100%'}} variant='dark'>
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
                      <a href="https://web.facebook.com/moov.nigeria?_rdc=1&_rdr" ><i class="fab fa-facebook-f"></i></a> 
                      <a href="https://twitter.com/moovnigeria"><i class="fab fa-twitter"></i></a>
                        <i class="fab fa-instagram"></i>
                       <a href="https://www.linkedin.com/company/moovafrica/"><i class="fab fa-linkedin-in"></i></a>
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

    )
}
export default Deals