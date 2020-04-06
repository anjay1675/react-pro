import React from 'react'
import {Navbar, Nav, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Cargo=()=>{
    return(
    <div>
        <div class="caa">
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
            <img class="imgxx" 
                 src="./images/cargo1.jpg"
                 alt="moov africa image"
            />
        </div>
        <div class="nic">
            <div class="nic1">
                <img id="truc" 
                     src="./images/truck26.jpg"
                     width="240px"
                />
                <h4 id="mat">Same Day! Next Day! When?</h4>
                <h2 id="tak">Taking you forward</h2>
                <h5 id="tak2">We guarantee your important parcels and cargo get the desired Express Service</h5>
                    <div class="bick1">
                        <img 
                        id="truc2"
                        src="./images/truck25.jpg"
                        alt="truck image"
                        />
                        <h4 id="mat">Dispatch Services</h4>
                        <h2 id="tak">Just in few munites</h2>
                        <h5 id="tak2">All around Lagos</h5>
                    </div>
            </div>
            <div class="nic2">
                <div class="nic3">
                <i class="fas fa-truck-moving"></i>
                </div>
                <div class="nic4">
                    <h4 id="whaa">What do you want delivered</h4>
                    <h5>Different Categories</h5>
                    <h6 id="whaa1">Small/Medium Cargo</h6>
                    <h6 id="whaa1">Small/Big Parcels</h6>
                    <h6 id="whaa1">Bulk Cargo</h6>
                    <h6 id="whaa1">Haulage</h6>
                    <h6 id="whaa1">Home/Office Paking removal</h6>
                </div>    
                <div class="nic5">
                <div class="nic6"><i class="fas fa-luggage-cart"></i></div>
                <div class="nic7">
                    <h4 class="what1">Packing and Removal</h4>
                    <h5>What are your options</h5>
                    <h6 id="whaa1">We render various services</h6>
                    <h6 id="whaa1">Right to your door step</h6>
                    <h6 id="whaa1">From 1kg to 10,000tn</h6>
                    <h6 id="whaa1">Carefiully handled</h6>
                    <h6 id="whaa1">Very secured</h6>                
                    </div>
                </div>
                <div class="nicx5">
                <div class="nicx6"><i class="fas fa-box-open"></i></div>
                <div class="nicx7">
                    <h4 class="what1">We carry out various services</h4>
                    <h5> Our Solutions</h5>
                    <h6 id="whaa1">Limitless nationwide</h6> 
                    <h6 id="whaa1">Time-definite delivery</h6>
                    <h6 id="whaa1">Tracking Capabilities for Every Shipment - 24/7/365</h6>
                    <h6 id="whaa1">Electronic POD (Proof Of Delivery)</h6>
                    <h6 id="whaa1">Electronic Billing and Invoicing</h6>
                    </div>
                </div>    
            </div>    
            </div> 
                <div class="anim">
                    <img src="./images/img6.jpg" alt="Moov Africa Image" width="100%" height="600px"/>
                </div> 
                <div class="pack">
                    <img class="pack1"  src="./images/packa1.png" alt="Moov Africa Image" width="280px" height="240px"/>
                    <img class="pack2" src="./images/packa2.jpg" alt="Moov Africa Image" width="280px" height="190px"/>
                    <img class="pack3" src="./images/packa3.jpg" alt="Moov Africa Image" width="300px" height="220px"/>
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
            

    </div>       
            
    )
}
export default Cargo