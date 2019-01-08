import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../assets/css/login.css'
import Footer from './Footer'
import {Link, NavLink} from 'react-router-dom'


class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      password: '',
      loginMessage: ''
    }
  }
  getEmail = (e) =>{
    this.setState({
      ...this.state,
      email: e.target.value
    })
  }
  getPassword = (e) =>{
    this.setState({
      ...this.state,
      password: e.target.value
    })
  }
  sendUserServer=()=>{
let email = this.state.email
let password = this.state.password
axios.post('http://localhost:3001/api/login',{
 email: email,
 password: password,

}).then((response)=>{
  if(response.data == 'The email you entered is invalid!'){

           this.setState({
             ...this.state,
             loginMessage: response.data
           })

         } else if(response.data == 'The password you entered is incorrect!'){

           this.setState({
             ...this.state,
             loginMessage : response.data
           })
         }  else {
           this.props.user(response.data.user)
           this.props.authenticate(response.data.token)
           localStorage.setItem('jsonwebtoken',response.data.token)

         // put the token in the request header
        // setAuthenticationToken(response.data.token)

          this.props.history.push('/')

         }


       }).catch((error)=>{

         console.log(error)
       })

  }
  render(){

    return (
      <div>

      <div className="login-card login1-card">

          <div className="form-signin">
          <h5 className="logintitle">Login</h5>
          <span className="reauth-email"> </span><input onChange={this.getEmail} className="form-control" type="email" required="" placeholder="Enter your email" autofocus="" id="inputEmail"/><input onChange={this.getPassword} className="form-control" type="password" required="" placeholder="Enter your password" id="inputPassword"/>
              <div
                  className="checkbox"></div><button onClick={this.sendUserServer} className="loginbtn btn btn-primary btn-block btn-lg btn-signin" type="submit" >Login</button></div>
                    <p className="loginMessage">{this.state.loginMessage}</p>
      </div>
      <div className="registerInvite">
        <div className="registerInviteText">

        <h5>{"Don't Have Account Yet?"}</h5>
        <p> Register and;</p>
        <li>Become a seller</li>
        <li>Post your resources</li>
          <li>Review and rate products</li>
          <li>Purchase products</li>
          <Link to="/register"><button className="registernowbtn btn btn-primary btn-block btn-lg btn-signin" type="submit" >Register now!</button></Link>

        </div>
      </div>
      <Footer style={{position: 'absolute',
     left: '0',
     bottom: '0',
     height: '205px',
     width: '100%',
     overflow: 'hidden'}}/>
      </div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
    authenticate: (token) => dispatch({type: "AUTHENTICATED", token: token}),
    user: (user) => dispatch({type: "USER", user: user})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)
