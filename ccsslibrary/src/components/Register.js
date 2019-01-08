import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../assets/css/login.css'
import Footer from './Footer'
import {Link, NavLink} from 'react-router-dom'


class Register extends Component{
  constructor(props){
    super(props)
    this.state={
        username: '',
        email:'',
        password :'',
        message :''
      }
  }
  getUsername=(e)=>{
      this.setState({
        ...this.state,
        username: e.target.value
      })
    }
    getEmail=(e)=>{
      this.setState({
        ...this.state,
        email: e.target.value

      })
    }
    getPassword=(e)=>{
      this.setState({
        ...this.state,
        password: e.target.value
      })
    }
    sendUserToServer = ()=>{
      let username = this.state.username
  let email = this.state.email
  let password = this.state.password
 axios.post('http://localhost:3001/api/register',{
   username : username,
   email: email,
   password: password,

 }).then((response)=>{
     if(response.data=='This email is already taken. Please try with different credential!'){
         this.setState({
           ...this.state,
             message: 'Opps..This email is already taken.'
         })
     } else{
        this.props.history.push('/login')
        this.setState({
          ...this.state,
            message: ''
        })
     }
 })
    }
  render(){

    return (
      <div>


      <div className="loginInvite">
        <div className="loginInviteText">

        <h5>Already Member?</h5>
         <h6 className="loginMessage">Welcome to Common Core Library!</h6><p className="loginMessageBottom">Login to your account then explore thousands of wonderful classroom products created by inspiring <br/>teachers like you!</p>
          <Link to="/login"><button className="loginnowbtn btn btn-primary btn-block btn-lg btn-signin" type="submit" >Login</button></Link>
        </div>
      </div>
      <div className="register-card login-card">

          <div className="form-signin">
          <h5 className="logintitle">Register</h5>
          <span className="reauth-email"> </span><input onChange={this.getUsername} className="form-control username" type="username" required="" placeholder="Create username" autofocus="" id="inputEmail" /><input onChange={this.getEmail} className="form-control" type="email" required="" placeholder="Enter your email" autofocus="" id="inputEmail"/><input onChange={this.getPassword} className="form-control" type="password" required="" placeholder="Create your password" id="inputPassword"/>
              <div
                  className="checkbox"></div><button onClick={this.sendUserToServer} className="registerbtn loginbtn btn btn-primary btn-block btn-lg btn-signin" type="submit" >Register</button></div>
                  <p className="registerMessage">{this.state.message}</p>
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

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Register)
