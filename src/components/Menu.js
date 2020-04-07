import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Navbar, Nav, Carousel} from 'react-bootstrap'


   const Menu =()=>{
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
    <Carousel class="ccc">
      <Carousel.Item>
    <img
      class="imgtrux"
      src="./images/front.jpg"
      alt="moov africa"
    />
    <div class="container">
      <span class="text1">Welcome to Moov Africa</span>
      <span class="text2">Trusted Cargo handlers</span>
    </div>
    <Carousel.Caption>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      class="imgtrux"
      src="./images/package.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <button className="but text-center"  type="type" style={{backgroundColor:"black",
    marginBottom:"60px",color:"white", height:"40px", width:"140px",border:"none", 
    outline:"none", borderRadius:"5px"}}><a id="reg2" href='https://moovafrica.com/shop2me/'>Shop2me</a></button>
    <div className="qq">
      <h1 id="one">The most reliable express Delivery</h1>
      <h1 id="sho">of Parcels and Cargo service providers</h1>
      <h1 id="me">'Worldwide'</h1>
    </div>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      class="imgtrux"
      src="./images/img51.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <div class="ww">
        <h4 class="ww1">Express delivery services</h4>
        <h1 class="ww2">Make the Moov..</h1>
        <h5 class="ww3">The most Reliable and trusted cargo handlers worldwide. 
            Taste the experience and feel the defference with Moov Africa.
        </h5>
    </div>
    <button className="but"  type="type" style={{backgroundColor:"white",
    marginBottom:"300px",color:"black", height:"40px", width:"140px",border:"none", 
    outline:"none", borderRadius:"5px"}} ><a id="reg3" href='https://moovafrica.com/shop2me/'>Shop2me</a></button>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    
    {/* <div className="on fixed-top"><h1 id="tra1">TRACKING</h1>
    </div> */}
    {/* <div className="track fixed-top"><a href="" 
    id="tra2">Track<i class="fas fa-long-arrow-alt-right"></i></a>
    </div> */}
    </div>
    <div className="reg fixed-top">
    <div className="fa1"><i class="fa fa-angle-up"></i>
    </div>
    <div className="fa2"><a href="https://moovafrica.com/delivery/pages/login" id="reg1">Sign Up</a>
    </div>
    </div>
    <div class="under">
        <h6 class="our text-center">OUR SERVICES</h6>
        <h2 class="exp">EXPRESS DELIVERY SOLUTIONS</h2>
        <div class="div2">
                  <img id="divi" 
                        src="./images/divider.jpg" 
                        width="100px"
                        height="30px"
                        alt="image"
                        />
        </div>
    </div>
    <div className="we">
        <div className="we1">
        <div className="mo">More Than Renting A Van</div>
       <div className="text">We provide superior service experience to our Customers 
           through fast express delivery service of parcels and cargo, anywhere in
            Nigeria and Africa when you use Moov Africa
        </div>
        </div>
       <div className="truck">
           <img
            src="./images/moov-project.jpg"
            alt="Moov Africa Image"
            width="380px"
            height="220px;"
           />
       </div>
    </div>
    <button type="button" className="butx"><Link id="rent" to='/rent'>Rent a Van</Link></button>
    <div className="bod">
            <Row>
                <Col>
                <div className="el1"><img
                    className="el2" 
                    src="./images/imgx2.jpeg"
                    alt="moov africa image"
                /></div><div className="giv">Giving You The Best</div><h6 id="pro">We provide superior service experience to our Customers 
                through fast express delivery service of parcels and cargo, anywhere in
                 Nigeria and Africa when you use Moov Africa</h6><button type="button" className="but1"><h6 id="rent">Transport</h6></button>
    
                </Col>
                <Col>
                <div className="el1"><img
                    className="el2" 
                    src="./images/e-com.jpg"
                    alt="moov africa image"
                /></div><div className="giv">Quality Services</div><h6 id="pro">Moov Africa also ushers us into the world of E-cooomerce, making life easier.
                 Our online services gets you want you want, and where you want it taken or delivered. Explore and discover.
                </h6><button type="button" className="but1"><Link id="rent" to='/ecom'>E-commerce</Link></button>
                </Col>
                <Col>
                <div className="el1"><img
                    className="el2" 
                    src="./images/crop2.jpg"
                    alt="moov africa image"
                /></div><div className="giv">Guess What?</div><h6 id="pro">Cargo delivery services is what we do best. With our professional drivers
                 and safety measures, you can bet that your desired services are guaranteed. Try it now.</h6><button type="button" className="but1"><h6 id="rent">Cargo Delivery</h6></button>
                </Col>
            </Row>
            </div>
            <div className="img">
                <img src="./images/e-com7.png" class="img2"/>
                <img src="./images/cargo.jpg" class="img1"/>
            </div>
            <div className="sat1">
                <div className="more">
                    <div className="more1">More</div>
                    <div className="more2">About Us</div>
                </div>
                <Row>
                    <Col></Col>
                <Col>
                <img
                src="./images/woman.jpg"
                width="240px"
                height="180px"
                />
                </Col>
                <Col>
                <img
                src="./images/ship.jpeg"
                width="240px"
                height="180px"
                />
                </Col>
                <Col>
                <img
                src="./images/hail3.jpeg"
                width="240px"
                height="180px"
                />
                </Col>
                <Col>
                <img
                src="./images/connect.jpg"
                width="240px"
                height="180px"
                />
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                <div class="more3">
                    <div class="more4"><h4 id="topic">Smart Services</h4></div>
                    <div class="more5">We would always beat your imagination, and even more. 
                        Our staff are always very courteous and would always attend to your 
                        needs in due time.We would always beat your imagination, and even more. </div>
                </div>
                </Col>
                <Col>
                <div class="more3">
                <div class="more4"><h4 id="topic">Global Biz</h4></div>
                    <div class="more5">We extend our services, within Africa and beyond, providing speedy and reliable cargo, 
                    courier and frieght services globally. We are your best chance of taking you into the future. </div>
                </div>
                </Col>
                <Col>
                <div class="more3">
                <div class="more4"><h4 id="topic">Hail A Repair</h4></div>
                    <div class="more5">Do you need your divices and gadgets fixed at very low rates with 100% performace and efficency. 
                    Hail A Repair offers you a platform of getting your toys fixed with delivery services.</div>
                </div>
                </Col>
                <Col>
                <div class="more3">
                <div class="more4"><h4 id="topic">Deals</h4></div>
                    <div class="more5">In the fast paced moving world of technology, business and looking for the easy life. We offer open 
                    doors to all business platforms and new discoveries. Let us know what you really want.</div>
                </div>
                </Col>
                <Col></Col>
            </Row>
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
export default Menu
