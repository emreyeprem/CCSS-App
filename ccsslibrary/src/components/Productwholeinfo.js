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

    }
  }
 componentDidMount =()=>{
   console.log(this.props.fileurl)
   this.setState({
     ...this.state,
     fileurl:this.props.fileurl
   })
   axios(`http://localhost:3001/api/${this.props.productid}`).then((response)=>{
       console.log(response.data)
        console.log(response.data.description.toString())
        //this.props.sendFileUrl(response.data.fileurl)
       this.setState({
         ...this.state,
         product: response.data,
         description: response.data.description
       })
   }).catch((error)=>{
     console.log(error)
   })
 }

  render(){


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
             <div className="stars">
               <span className="fa fa-star checked"></span>
               <span className="fa fa-star checked"></span>
               <span className="fa fa-star checked"></span>
               <span className="fa fa-star"></span>
               <span className="fa fa-star"></span>
             </div>
             <span className="review-no">{this.state.product.rating}</span>
           </div>
           <p className="product-description">{this.state.product.standard}</p>
           <h4 className="price">Item price: <span>${this.state.product.price}</span></h4>
           <h6 className="price">Grade Level: <span>{this.state.product.grade}</span></h6>
           <h6 className="price">Resource Type: <span>{this.state.product.resourcetype}</span></h6>
           <h6 className="price">Subject: <span>{this.state.product.subject}</span></h6>



           <div className="action">
             <button className="add-to-cart btn btn-default" type="button">add to cart</button>
             <button className="like btn btn-primary btn-block" type="button">Move to Wish List<span className="fa fa-heart"></span></button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>



<div className="row descriptionCard">
 <div className="col-12">
            <div className="descriptionfield card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-align-justify"></i> Description</div>
                <div className="card-body">
                    <p className="card-text">
                      <MarkdownForReact value={`${this.state.description}`} />

                    </p>

                </div>
            </div>
        </div>


        <div className="col-12 reviewCard" id="reviews">
            <div className="card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-comment"></i> Reviews</div>
                <div className="card-body">
                    <div className="review">
                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                        <meta itemprop="datePublished" content="01-01-2016"/>January 01, 2018

                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        by Paul Smith
                        <p className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </p>
                        <hr/>
                    </div>
                    <div className="review">
                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                        <meta itemprop="datePublished" content="01-01-2016"/>January 01, 2018

                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        by Paul Smith
                        <p className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </p>
                        <hr/>
                    </div>
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
    fileurl:state.fileurl
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
  // sendFileUrl : (fileurl)=> dispatch({type:'FILEURL',fileurl:fileurl})

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Productwholeinfo)
