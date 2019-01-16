import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Filter from './Filter'
import Footer from './Footer'
import Header from './Header'
import HomePage from './HomePage'
import Login from './Login'
import Register from './Register'
import Standards from './Standards'
import ListProduct from './ListProduct'
import Aboutus from './Aboutus'
import SellerRegistration from './SellerRegistration'
import ProductWholeInfo from './ProductWholeInfo'
import MyProducts from './MyProducts'
import MyPurchases from './MyPurchases'
import Viewcart from './Viewcart'
import Standardworksheet from './Standardworksheet'
import LeaveReview from './LeaveReview'
import Search from './Search'
import Help from './Help'
//------------css---------------
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/fonts/font-awesome.min.css'
import '../assets/css/Card-Group-Classic.css'
import '../assets/css/dh-card-image-left-dark.css'
import '../assets/css/trelyco-login-vertical-horizontal-1.css'
import '../assets/css/trelyco-login-vertical-horizontal.css'






class BaseLayout extends Component{
  constructor(props){
    super(props)
  }

  render(){

    return (

     <div id="page-top">
      <Header />
     {this.props.children}

     </div>



    )
  }
}

export default withRouter(BaseLayout)
