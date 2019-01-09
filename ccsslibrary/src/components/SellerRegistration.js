import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import '../assets/css/sellerregistration.css'
import Footer from './Footer'

import axios from 'axios'
import '../assets/css/filter.css'
import '../assets/css/standards.css'



class SellerRegistration extends Component{
  constructor(props){
    super(props)
    this.state={
      nickname:'',
      paypalEmail: '',
    }
  }
  getNickname = (e) =>{
    this.setState({
      ...this.state,
      nickname: e.target.value
    })
  }
  getPaypalEmail = (e) =>{
    this.setState({
      ...this.state,
      paypalEmail: e.target.value
    })
  }

  sendSellerToServer = ()=>{
    this.props.updateUserType()
    let nickname = this.state.nickname
    let paypalEmail = this.state.paypalEmail
    axios.post('http://localhost:3001/api/sellerregister',{
     nickname : nickname,
     paypalEmail : paypalEmail,
     usertype : 'seller',
     userid:this.props.userid

    })
  }





  render(){


    return (
      <div>
      <header className="masthead bg-primary text-white text-center searchheaderSeller" >


            <ul className="listItemUl">
              <li className="listItemHeader">Home</li>
              <li className="listItemHeader">About Us</li>
              <li className="listItemHeader">Help</li>
              <li className="listItemHeader">Schools</li>
              <hr />
            </ul>


          <div className="row padMar">
              <div className="col padMar">
                  <div className="input-group">
                      <div className="input-group-prepend"></div><input className="form-control autocomplete searchbar" type="text" placeholder="Search  by  title  or  resource  type" />
                      <div className="input-group-append"><button className="btn btn-warning searchbtn" type="button" ><i className="fa fa-search"></i></button></div>
                  </div>
              </div>
          </div>
      </header>



      <div className="container containerForm">
 <div className="row">






   <div className="col-md-9">
       <div className="card">
           <div className="card-body">
               <div className="row">
                   <div className="col-md-12">
                       <h4>Your Profile</h4>
                       <hr />
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-12">
                       <form>
                             <div className="form-group row">
                               <label for="username" className="col-4 col-form-label" >User Nickname*</label>
                               <div className="col-8">
                                 <input id="username" name="username" placeholder="Enter your seller nickname" onChange={this.getNickname} className="form-control here" required="required" type="text" />
                               </div>
                             </div>


                             <div className="form-group row">
                               <label for="email" className="col-4 col-form-label">PayPal Email Address*</label>
                               <div className="col-8">
                                 <input id="email" name="email" placeholder="Your Email on PayPal account" onChange={this.getPaypalEmail} className="form-control here" required="required" type="text" />
                               </div>
                             </div>


                             <div className="form-group photo">
                              <label className="col-md-4 control-label " for="Upload photo">Upload photo</label>
                              <div className="col-md-4">
                                <input id="Upload photo" name="Upload photo" className="input-file" type="file" />
                              </div>
                            </div>


                             <div className="form-group row">
                               <div className="offset-4 col-8">
                                 <button name="submit" type="submit" onClick={this.sendSellerToServer} className="btn btn-primary">Create My Seller Account</button>
                               </div>
                             </div>
                           </form>
                   </div>
               </div>

           </div>
       </div>
   </div>
 </div>
</div>






</div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr
    userid:state.userid
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
    updateUserType : () => dispatch({type: "UPDATEUSERTYPE"})

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SellerRegistration)
