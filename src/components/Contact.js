import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Row, Col, Navbar, Nav,} from 'react-bootstrap'


class Contact extends React.Component{
  
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
     }
    
  
    handleSubmit(e){
      e.preventDefault();
      axios({
        method: "POST", 
        url:"http://localhost:5000/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    }
  
    resetForm(){
      
       this.setState({name: '', email: '', message: ''})
    }
    
    render() {
      return(
        <div className="bodyy">
            <div className="bar">
                <div className="bar1">
                <div className="bar2"><i class="fas fa-phone-alt"></i><h6 className="num">+234 (0) 894820401</h6></div>
                <div className="bar3"><i class="far fa-envelope"></i><Link to='/cont'><h6 className="enq" >Contact Us</h6></Link></div>
            </div>
        </div>
        <div className="car">
    <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
                <img className="logo" src="./images/w1.png" width="180px" alt="picture"height="80px"/>
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
      </div>
      <div className="call">
          <div className="call1">
          <h5 id="any">HAVE A QUESTION ?</h5>
          <h1 id="uss">CONTACT US NOW</h1>
          </div>         
    </div>
    <div className="form1"> 
        <div className="formx">
        <div className="htp"><h5 id="send">Send a message</h5>
          <h6 id="gig">Fill the form below with the inquiries you may have and we would get back to you as sonn as possible</h6></div>
          <div className="form">  
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" value={this.state.name}/>
    </div>
        <div className="form-group">
            <label htmlFor="InputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" id="email" value={this.state.email}/>
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" id="message" value={this.state.message}></textarea>
        </div>
    <button id="sbb" type="submit" className="btn btn-primary">Submit</button>
        </form>
          </div>
          </div>
          <div className="form2">
              <div className="form3">
                  <h5 id="send1">Address</h5>
                  <h6 id="gig">48 Oyedele Ogunniyi Street</h6>
                  <h6 id="gig">Anthony village, Lagos</h6>

                  <h5 id="send2">Email</h5>
                  <h6 id="gig">connect@moov.com.ng</h6>
              </div>
              <div className="form4">
                  <h5 id="send1">Phone</h5>
                  <h6 id="gig">+234 (0) 894820401</h6>
                  <h6 id="gig">+234 (0) 894820402</h6>
                  <div>
                      <h5 id="send2">Connect</h5>
                      <div className="thin">
                      <a href="https://web.facebook.com/moov.nigeria?_rdc=1&_rdr" ><i id="net" className="fab fa-facebook-f"></i></a>
                      <a href="https://twitter.com/moovnigeria"><i id="net" className="fab fa-twitter"></i></a> 
                      <i id="net" className="fab fa-instagram"></i>
                      <a href="https://www.linkedin.com/company/moovafrica/"><i id="net" className="fab fa-linkedin-in"></i></a>  
                      </div>

                  </div>
              </div>
          </div>
      </div>
  
	{/* );
    } */}

  {/* onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
} */}

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
                      <a href="https://web.facebook.com/moov.nigeria?_rdc=1&_rdr" ><i  class="fab fa-facebook-f"></i></a> 
                      <a href="https://twitter.com/moovnigeria"><i  className="fab fa-twitter"></i></a>
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
        )}
}
      export default Contact