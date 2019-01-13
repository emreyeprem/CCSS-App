import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/css/viewcart.css'
import Footer from './Footer'
import axios from 'axios'



class Viewcart extends Component{
  constructor(props){
    super(props)
    this.state={
     items:[],
     total: 0
    }
  }
componentDidMount=()=>{
   axios.post('http://localhost:3001/api/getcartitems',{
     userid:this.props.userid
   }).then((response)=>{
     console.log(response.data)
     this.setState({
       ...this.state,
       items:response.data.response,
       total: response.data.total
     })
   })
}
deleteItem=(e)=>{
  axios.post('http://localhost:3001/api/deleteitem',{
    id: e.target.value,
    cartcount: this.props.cartcount,
    userid: this.props.userid
  }).then((response)=>{
    console.log(response.data.cartcount)
    axios.post('http://localhost:3001/api/getcartitems',{
      userid:this.props.userid
    }).then((response)=>{
      console.log(response.data)
      this.setState({
        ...this.state,
        items:response.data.response,
        total: response.data.total
      })
    })
    this.props.updatecartcount(response.data.cartcount)
  })
}
  render(){

  let cartItems = this.state.items.map((each)=>{
      return  <div className="col-md-12">
              <div className="card mb-1 itemMainCard">
                  <div className="card-body cardMainDiv">
                      <div className="row">
                        {this.state.result}
                      <div className="col-md-3 imageContainer">

                          <embed className="imgViewCard" src={each.fileurl}/>
                          <p className="card-text"><small className="text-muted">Created by {each.username} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br/>{each.nickname}</small></p>
                      </div>
                      <div className="col-md-6 border-right">
                          <h5 className="text-danger">{each.title}</h5>
                          <a href="#" className="badge badge-secondary">Move to Wish List &nbsp; &#10084;</a>
                          <p className="card-text">{each.standard}</p>


                      </div>
                      <div className="col-md-3">
                          <div className="itemPriceDiv"><h5>Price :</h5>&nbsp;<span>$</span><span>{each.price}</span></div>
                          <small>Ratings</small><br/>
                          <div className="starBox">{each.rating}
                          </div>

                        <button onClick={this.deleteItem} type="button" className="btn btn-warning rounded-1 mb-1 btnRemove" value={each.id}>&#128465;&nbsp;Remove</button>
                       <Link to="/"><button type="button" className="btn btn-success rounded-1 mb-1 btnBack">&#8617;Continue Searching</button></Link>


                      </div>
                  </div>
                  </div>
              </div>



          </div>
  })
    return (
        <div>
        <div className="container">
<div className="row">
  <div className="col-md-9">
      <div className="row">

      {cartItems}
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
                                 <div className="pull-right"><span>$</span><span>{this.state.total}</span></div>
                             </div>
                             <div className="col-md-12">
                                 <strong>Tax</strong>
                                 <div className="pull-right"><span>$</span><span>0.00</span></div>
                             </div>
                             <div className="col-md-12">
                                 <small>Shipping</small>
                                 <div className="pull-right"><span>-</span></div>
                                 <hr/>
                             </div>
                             <div className="col-md-12">
                                 <strong>Order Total</strong>
                                 <div className="pull-right"><span>$</span><span>{this.state.total}</span></div>
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
    userid:state.userid,
    cartcount: state.cartcount
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
    // updateUserType : () => dispatch({type: "UPDATEUSERTYPE"})
    updatecartcount : (cartcount) => dispatch({type: "UPDATECARTCOUNT",cartcount:cartcount})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Viewcart)
