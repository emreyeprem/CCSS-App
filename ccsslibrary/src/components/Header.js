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
  componentWillReceiveProps=(props)=>{

  }
  render(){
          let withUser = ''
          let withoutUser = ''
          let withoutUser2 = ''
          let withSellerUser = ''
          let withRegularUser = ''
          if(this.props.usertype == 'regular'){
            withRegularUser = <div className="cartWrapper"><div className="dropdown-menu userDropdown" role="menu"><Link to="/sellerregistration" className="dropdown-item">Become a seller</Link><Link to="/mypurchases" className="dropdown-item">My Purchases</Link><Link to="/viewcart" className="dropdown-item">My Cart</Link><Link to="/sellerwishlist" className="dropdown-item">My Wish List</Link><Link to="/" onClick={this.logout} className="dropdown-item" role="presentation" href="#">Logout</Link></div><span className="fa-stack fa-x has-badge cartImg" data-count=""><a href='/viewcart'><i className="fa fa-shopping-cart number">{this.props.cartcount}</i></a>
            </span></div>
          } else {
            withSellerUser = <div className="cartWrapper"><div className="dropdown-menu userDropdown" role="menu"><Link to="/listproduct" className="dropdown-item">List a product</Link><Link to="/myproducts" className="dropdown-item">My products</Link><Link to="/mypurchases" className="dropdown-item">My Purchases</Link><Link to="/viewcart" className="dropdown-item">My Cart</Link><Link to="/sellerwishlist" className="dropdown-item">My Wish List</Link><Link to="/" onClick={this.logout} className="dropdown-item" role="presentation" href="#">Logout</Link></div><span className="fa-stack fa-x has-badge cartImg" data-count=""><a href='/viewcart'><i className="fa fa-shopping-cart number">{this.props.cartcount}</i></a>
            </span></div>
          }
          if(!this.props.token==''){
            withUser= <li className="nav-item dropdown"><a id="dropdown" className="dropdown-toggle nav-link usernameDiv" data-toggle="dropdown" aria-expanded="false" href="#">Welcome {this.props.username}</a>
              {withSellerUser}{withRegularUser}
            </li>


          } else {
            withoutUser =  <li className="loginItem nav-item mx-0 mx-lg-1" role="presentation"><Link to="/login" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Login</Link></li>
             withoutUser2= <li className="getstartedItem nav-item mx-0 mx-lg-1" role="presentation"><Link to="/register" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" >get started</Link></li>
          }
    return (


     <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
         <div className="container headercontainer"><Link to="/" className="navbar-brand js-scroll-trigger"><img id="logo" src={ccsslogo}/></Link><button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" data-toggle="collapse"
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
     token: state.token,
     usertype : state.userType,
     cartcount : state.cartcount,
     userid: state.userid
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
    deleteToken : () => dispatch({type: "DELETETOKEN"})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header)
