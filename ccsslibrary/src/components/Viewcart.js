import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/css/viewcart.css'
import Footer from './Footer'



class Aboutus extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }


  render(){


    return (
        <div>




        <div className="container">
<div className="row">
  <div className="col-md-9">
      <div className="row">
                          <div className="col-md-12">
                              <div className="card mb-1 itemMainCard">
                                  <div className="card-body cardMainDiv">
                                      <div className="row">
                                      <div className="col-md-3 imageContainer">
                                          <img className="imgViewCard" src="https://ecdn.teacherspayteachers.com/thumbitem/Solving-Inequalities-Coloring-Activity-2732130-1543848132/original-2732130-2.jpg" />
                                          <p className="card-text"><small className="text-muted">By John Doe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Everything for Algebra</small></p>
                                      </div>
                                      <div className="col-md-6 border-right">
                                          <h5 className="text-danger">Solving Inequalities by Adition & Subtraction </h5>
                                          <a href="#" className="badge badge-secondary">Move to Wish List &nbsp; &#10084;</a>
                                          <p className="card-text">Many simple inequalities can be solved by adding, subtracting, multiplying or dividing both sides until you are left with the variable on its own.</p>
                                          <p className="card-text"><small className="text-muted">&#9776;&#124;&nbsp;Digital Download</small></p>

                                      </div>
                                      <div className="col-md-3">
                                          <div className="itemPriceDiv"><h5>Price :</h5>&nbsp;<span>$</span><span>26.5</span></div>
                                          <div className="starBox"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                          <small>Ratings</small></div>
                                          <div className="quantityBox"><p>Quantity:</p><input type="number" className="form-control itemQuantity"  value="1"/></div>
                                        <button type="button" className="btn btn-warning rounded-1 mb-1 btnRemove">&#128465;&nbsp;Remove</button>
                                       <button type="button" className="btn btn-success rounded-1 mb-1 btnBack">&#8617;Back</button>


                                      </div>
                                  </div>
                                  </div>
                              </div>



                          </div>
                      </div>
                  </div>




            <div className="col-md-3">
                <div className="card checkoutCard">

                   <div className="panel panel-default">
                       <div className="panel-heading text-center">
                           <h4>Review Order</h4>
                       </div>
                         <div className="panel-body">
                             <div className="col-md-12">
                                 <strong>Subtotal (# item)</strong>
                                 <div className="pull-right"><span>$</span><span>26.5</span></div>
                             </div>
                             <div className="col-md-12">
                                 <strong>Tax</strong>
                                 <div className="pull-right"><span>$</span><span>1.85</span></div>
                             </div>
                             <div className="col-md-12">
                                 <small>Shipping</small>
                                 <div className="pull-right"><span>-</span></div>
                                 <hr/>
                             </div>
                             <div className="col-md-12">
                                 <strong>Order Total</strong>
                                 <div className="pull-right"><span>$</span><span>28.35</span></div>
                                 <hr/>
                             </div>

                             <button type="button" className="btn btn-primary btn-lg btn-block">Checkout</button>

                     </div>
                 </div>






      </div>
  </div>
</div>
</div>







          <Footer />

       </div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr
    // userid:state.userid
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
    // updateUserType : () => dispatch({type: "UPDATEUSERTYPE"})

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Aboutus)
