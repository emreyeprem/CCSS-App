import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../assets/css/myproducts.css'
import Filter from './Filter'
import Footer from './Footer'
import StarRatingComponent from 'react-star-rating-component';

class MyProducts extends Component{
  constructor(props){
    super(props)
    this.state={
      items:[]
    }
  }
componentDidMount=()=>{
  axios.post('http://localhost:3001/api/getmyproducts',{
    userid: this.props.userid
  }).then((response)=>{
    this.setState({
      ...this.state,
      items: response.data
    })
  })
}
sendproductid=(e)=>{
  console.log(e.target.value)
  this.props.sendProductIdForWholePage(e.target.value)

}
  render(){
     let items= this.state.items.map((each)=>{
       return <div className="container myproductContainer">
           <div className="photo-card" >
               <embed className='pdfDisplay2 photo-background' src={each.fileurl} scroll="no" seamless="seamless" frameborder="0"></embed>
               <div className="photo-details">
                   <h1 >{each.title}</h1><hr/>
                   <p className="price capitalize smallfont"><span className="capitalize standardspan">Standard: </span>{each.standard}</p><hr/>
                   <p className="price capitalize"><span className="capitalize">Grade: </span>{each.grade} / <span>Subject: </span> {each.subject}</p><hr/>

                   <p className="price"><span className="capitalize">Resource Type: </span>{each.resourcetype}</p>
               </div>
               <div className="photo-tags tags" >
                   <ul>
                   <li className="ratingbtn">Rating</li>
                   <li className="ratingnumber">{each.rating}</li>
                   <li className="starRating"><StarRatingComponent
           name="rate2"
           editing={false}

           starCount={5}
           value={Math.round(each.rating)}
         /></li><hr/>
                   <div className="priceDiv"><li className="ratingbtnprice">Price</li><br/>
                   <li className="pricenumber">${each.price}</li></div>
                   <li><a className='buttonHover downloadbtn' href={each.fileurl} target="_blank" download>Print File</a></li>
                       <a href='/productwholeinfo' className="detailsAnchor"><li><button onClick={this.sendproductid} className='buttonHover detailsbtn' value={each.productid}>See Details</button></li></a>

                   </ul>
               </div>

           </div>
       </div>
     })
    return (
      <div>
      <section>
        {items}
      </section>
      <Footer/>
      </div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr
     userid: state.userid
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
sendProductIdForWholePage : (value) => dispatch({type: "PRODUCTID",productid: value})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyProducts)
