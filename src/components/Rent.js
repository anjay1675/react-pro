import React from 'react'
import {Row, Col, Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Rent=()=>{
    return(
        <div>
            <div className="bar">
            <div className="bar1">
                <div className="bar2"><i className="fas fa-phone-alt"></i><h6 className="num">+234 (0) 894820401</h6></div>
                <div class="bar3"><i class="far fa-envelope"></i><Link to='/'><h6 className="enq" >Contact Us</h6></Link></div>
                </div>
            </div>
            <div className="car" >
            <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
                <img className="logo" src="./images/w1.png" width="180px" height="80px"/>
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
                <Link id="ser" to='/search'><i className="fas fa-search"></i></Link>
            </Nav>  
        </Navbar.Collapse>
        </Navbar>
                <div className="rent1">
                    <div className="rent2">
                      <h6 id="ava">Available Jan - Dec</h6>
                      <h1 id="ree">Rent 'A' Van</h1>
                      <h1 id="ree1">from</h1>
                      <h1 id="ree">Moov Africa</h1> 
                      <h6 id="wee">We operate within the axis of South-south, South-East, South West of Nigeria.</h6>
                      <div className="conn">
                        <div className="conn1"><h6 id="con">Contact us</h6></div>
                        <div className="conn2"><i className="fas fa-arrow-alt-circle-right"></i></div>
                      </div>
                    </div>
                    <div className="rent3">
                        <img src="./images/trans3.jpg"
                             alt="truck image"
                             width="500px"
                             height="300px"
                        />
                    </div>
                </div> 
                <Row>
                <div className="pee">
                <img class="bl" src="./images/truck17.jpeg"
                     alt="moov africa image"
                />
                </div>
                <div className="pee">
                <img className="bl" src="./images/truckxx.jpg"
                     alt="moov africa image"     
                 />
                 </div>

                <div className="pee">
                <img className="bl" src="./images/cargox3.jpg"
                     alt="moov africa image "   
                />
                </div>
                </Row>                   
            </div> 
            <div className="eee"><i className="fas fa-angle-double-right"></i><h5 className="rel">Reliable vehecles</h5></div>
            <div className="ee1">
                <h5 id="com">Commercial Van Rental, Moving Truck or Van Rental</h5>
                <h6 id="nee">Need to rent a van or truck and driver?</h6>
                <h6 id="mo1">Moov Africa Rent A Truck Rental has good options for your truck rental needs in Lagos for use
                     anywhere in Nigeria. Rent vehicles and drivers for personal or business use. Moov Africa Truck
                      Rental is stocked with Box Trucks, Moving Vans, Trucks, Cargo Vans and more.</h6>

            </div>
            <div className="foot" style={{backgroundColor:'black', height:'400px', width:'100%'}} variant='dark'>
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
    )
    }

    export default Rent    