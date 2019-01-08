import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ccsslogo from '../assets/img/ccsslogo.png'
import '../assets/css/footer.css'



class Footer extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }


  render(){

    return (
      <div style={this.props.style}>
      <footer  className="footer text-center">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 mb-5 mb-lg-0">
                      <h4 className="text-uppercase mb-4"><img id="logoFooter" src={ccsslogo} /></h4>
                  </div>
                  <div className="col-md-4 justify-content-center align-items-center align-content-center align-self-center mb-5 mb-lg-0">
                      <ul className="list-inline text-center d-flex d-lg-flex flex-row justify-content-end align-items-center align-content-end align-self-center justify-content-lg-center align-items-lg-end">
                          <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-facebook fa-fw"></i></a></li>
                          <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-google-plus fa-fw"></i></a></li>
                          <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-twitter fa-fw"></i></a></li>
                          <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-dribbble fa-fw"></i></a></li>
                      </ul>
                  </div>
                  <div className="col-md-4">
                      <h4 className="text-uppercase mb-4">About us</h4>
                      <p className="lead mb-0"><span>Common Core Library is a platform where teachers can buy and sell their educational materials.&nbsp;</span></p>
                  </div>
              </div>
          </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
          <div className="container"><small>Copyright © Common Core Library &nbsp;2018</small></div>
      </div>
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


export default connect(mapStateToProps,mapDispatchToProps)(Footer)
