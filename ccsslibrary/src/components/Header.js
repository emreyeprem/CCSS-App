import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../assets/css/header.css'
import ccsslogo from '../assets/img/ccsslogo.png'

class Header extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  logout = ()=>{
      localStorage.clear()
      this.props.deleteToken()

    }

  render(){
          let withUser = ''
          let withoutUser = ''
          let withoutUser2 = ''
          if(!this.props.token==''){
            withUser= <li className="nav-item dropdown"><a id="dropdown" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Welcome {this.props.username}</a>
                <div className="dropdown-menu" role="menu"><Link to="/sellerregistration" className="dropdown-item">Become a seller</Link><Link to="/sellerpurchases" className="dropdown-item">My Purchases</Link><Link to="/sellerwishlist" className="dropdown-item">My Wish List</Link><Link to="/" onClick={this.logout} className="dropdown-item" role="presentation" href="#">Logout</Link></div></li>

          } else {
            withoutUser =  <li className="loginItem nav-item mx-0 mx-lg-1" role="presentation"><Link to="/login" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Login</Link></li>
             withoutUser2= <li className="getstartedItem nav-item mx-0 mx-lg-1" role="presentation"><Link to="/register" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" >get started</Link></li>
          }
    return (


     <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
         <div className="container"><Link to="/" className="navbar-brand js-scroll-trigger"><img id="logo" src={ccsslogo}/></Link><button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" data-toggle="collapse"
                 data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
             <div className="collapse navbar-collapse" id="navbarResponsive">
                 <ul className="nav navbar-nav ml-auto">
                    {withUser}{withoutUser}{withoutUser2}

                 </ul>
             </div>
         </div>
     </nav>


    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr
     username: state.username,
     token: state.token
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
    deleteToken : () => dispatch({type: "DELETETOKEN"})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header)
