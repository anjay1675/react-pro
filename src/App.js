import React, {Component} from 'react';
import Menu from './components/Menu'
import Cargo from './components/Cargo'
import Rent from './components/Rent'
import Deals from './components/Deals'
import Hail from './components/Hail'
import Ecom from './components/Ecom'
import Hail1 from './components/Hail1'
import Comp1 from './components/Comp1'
import Contact from './components/Contact'
import {Switch,Route} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Menu}/>
          <Route path='/ecom' component={Ecom}/>
          <Route path='/cont' component={Comp1}/>
          <Route path='/cargo' component={Cargo}/>
          <Route path='/hail' component={Hail}/>
          <Route path='/rent' component={Rent}/>
          <Route path='/deals' component={Deals}/>
          <Route path='/hail1' component={Hail1}/>
          <Route path='/comp1' component={Comp1}/>
        </Switch>
      </div>
    )
  }
}
export default App 