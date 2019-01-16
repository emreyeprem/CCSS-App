import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ccsslogo from '../assets/img/ccsslogo.png'
import '../assets/css/footer.css'
import StarRatingComponent from 'react-star-rating-component';
import {Link, NavLink} from 'react-router-dom'
import Footer from './Footer'
import history from '../history'

class LeaveReview extends Component{
  constructor(props){
    super(props)
    this.state={
       rating:0
    }
  }

  onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }
  sendFeedback=()=>{
     axios.post('http://localhost:3001/api/sendFeedback',{
       productreviewid: this.props.productreviewid,
       rating: this.state.rating,
       textvalue: this.state.textvalue,
       userid: this.props.userid
     }).then((response)=>{
         console.log(response)
         history.push('/mypurchases')
     })
  }
  getReview=(e)=>{
    this.setState({
      ...this.state,
      textvalue: e.target.value
    })
  }
  render(){
  const { rating } = this.state;
    return (
      <div className="review-container">
      <label>Leave a review:</label>
      <textarea onChange={this.getReview} className="reviewtext" placeholder="Write your review here..."></textarea>
      <label>Rate Product:</label><br/>
      <StarRatingComponent
    name="rate1"
    starCount={5}
    value={rating}
    onStarClick={this.onStarClick.bind(this)}
  />
  <div className="reviewbtn-container">
  <Link to='/mypurchases'><button className='detailsbtn backbtn'>Back</button></Link>
      <button onClick={this.sendFeedback} className='submitbtn'>Submit</button>
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
    productreviewid:state.productreviewid,
    userid:state.userid
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(LeaveReview)
