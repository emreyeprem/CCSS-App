import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import '../assets/css/productwholeinfo.css'
import Footer from './Footer'
import axios from 'axios'
import '../assets/css/filter.css'
import '../assets/css/standards.css'
import MarkdownForReact from 'markdown-for-react';
import StarRatingComponent from 'react-star-rating-component';


class Productwholeinfo extends Component{
  constructor(props){
    super(props)
    this.state={
      product:{},
      productwithreviews: []
    }
  }
 componentDidMount =()=>{
   console.log(this.props.fileurl)
   this.setState({
     ...this.state,
     fileurl:this.props.fileurl
   })
   axios(`http://localhost:3001/api/products/${this.props.productid}`).then((response)=>{
       console.log(response.data)
        console.log(response.data.description.toString())
        //this.props.sendFileUrl(response.data.fileurl)
       this.setState({
         ...this.state,
         product: response.data,
         description: response.data.description
       })
       axios.post('http://localhost:3001/api/getallreviews',{
         productid : response.data.productid
       }).then((response)=>{
         console.log(response.data)
         this.setState({
           ...this.state,
           productwithreviews: response.data,

         })
       })
   }).catch((error)=>{
     console.log(error)
   })
 }
 sendtomycart=(e)=>{
   console.log(e.target.value)
   axios.post('http://localhost:3001/api/sendtomycart',{
      cartcount: this.props.cartcount,
      userid: this.props.userid,
      productid: e.target.value
   }).then((response)=>{
     console.log(response.data.cartcount.cartcount)
     this.props.updatecartcount(response.data.cartcount.cartcount)
   })
 }
  render(){
   let reviewsanduser = this.state.productwithreviews.map((each)=>{
     return         <div className="review">
                       <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>

                       by {each.username}
                       <p className="blockquote">
                           <p className="mb-0">{each.review}</p>
                       </p>
                       <hr/>
                   </div>


   })

    return (
      <div>

      <div className="container containerBox">
   <div className="card">
     <div className="container-fliud">
       <div className="wrapper row">
         <div className="preview col-md-6">

           <div className="preview-pic tab-content">
             <div className="tab-pane active" id="pic-1"><embed className='pdfDisplay' src={this.state.product.fileurl} scroll="no" frameborder="0"></embed></div>

           </div>


         </div>
         <div className="details col-md-6">
           <h3 className="product-title">{this.state.product.title}</h3>
           <div className="rating">
           <StarRatingComponent
  name="rate2"
  editing={false}

  starCount={5}
  value={Math.round(this.state.product.rating)}
/>
             <span className="review-no">{this.state.product.rating}</span>
           </div>
           <p className="product-description">{this.state.product.standard}</p>
           <h4 className="price">Item price: <span>${this.state.product.price}</span></h4>
           <h6 className="price">Grade Level: <span>{this.state.product.grade}</span></h6>
           <h6 className="price">Resource Type: <span>{this.state.product.resourcetype}</span></h6>
           <h6 className="price btnAddCart">Subject: <span>{this.state.product.subject}</span></h6>



           <div className="action buttonDiv">
             <button onClick={this.sendtomycart} value={this.state.product.productid} className="add-to-cart btn btn-default" type="button">add to cart</button>
             <button className="like btn btn-primary btn-block" type="button">Move to Wish List<span className="fa fa-heart"></span></button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>



<div className="row descriptionCard">
 <div className="col-12 descriptionMainBox">
            <div className="descriptionfield card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-align-justify"></i> Description</div>
                <div className="card-body">
                    <p className="card-text">
                      <MarkdownForReact value={`${this.state.description}`} />

                    </p>

                </div>
            </div>
        </div>
        <div className="col-12 reviewCard itemDescriptionDiv" id="reviews">
              <div className="card border-light mb-3">
                  <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-comment"></i> Reviews</div>
                  <div className="card-body">
       {reviewsanduser}
       </div>
     </div>
   </div>
              </div>

     <Footer/>
     </div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr
    productid: state.productid,
    fileurl:state.fileurl,
    filtereditem : state.filtereditem,
    userid:state.userid,
    cartcount:state.cartcount,
    searchValue:state.searchValue
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
  // sendFileUrl : (fileurl)=> dispatch({type:'FILEURL',fileurl:fileurl})
  updatecartcount : (cartcount) => dispatch({type: "UPDATECARTCOUNT",cartcount:cartcount}),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Productwholeinfo)
