import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'
import '../assets/css/homepage.css'
import Filter from './Filter'
import deskimg from '../assets/img/desk.jpg'
import {Link, NavLink} from 'react-router-dom'
import history from '../history'
import axios from 'axios'
import StarRatingComponent from 'react-star-rating-component';

class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchBoxValue : "",
      elem:[],
      middle:[],
      high:[]
    }
  }
componentDidMount=()=>{
  axios('http://localhost:3001/api/getpopularitems').then((response)=>{
         this.setState({
           ...this.state,
           elem: response.data.elem,
           middle: response.data.middle,
           high:response.data.high
         })
  }).catch((error)=>{
    console.log(error)
  })
}
  getSearchValue = (e) =>{
         this.setState({
           ...this.state,
           searchBoxValue : e.target.value
         })


       }
 sendValueToStore = ()=>{
    this.props.sendSearchValue(this.state.searchBoxValue)
    history.push('/search')

 }
 sendproductid=(e)=>{
   console.log(e)
   this.props.sendProductIdForWholePage(e)

 }
  render() {
   let elemItems = this.state.elem.map((each)=>{
     return <div className="col-md-4 offset-0 d-flex flex-column cust_blogteaser cardSelf" ><a href="#"><embed className='pdfDisplay3 img-fluid' src={each.fileurl} scroll="no" seamless="seamless" frameborder="0"></embed></a>
         <h3 className="cardTitle">{each.title.slice(0,27)+'...'}</h3>
         <p className="text-secondary cardText" >{each.standard.slice(0,75)+'...'}</p><p className="text-secondary cardText subjectText" >{each.grade} / {each.subject}<br/>
         <div className="combineRating"><StarRatingComponent
 name="rate2"
 editing={false}

 starCount={5}
 value={Math.round(each.rating)}
/> &nbsp;&nbsp;&nbsp;<p>{each.rating}</p></div>
         </p>
         <h4>${each.price}</h4>
        <a href="/productwholeinfo" className='h4'><button className="arrowDiv" onClick={() => this.sendproductid(each.productid)}><i className="fa fa-arrow-circle-right" ></i></button></a></div>
   })
   let middleItems = this.state.middle.map((each)=>{
     return <div className="col-md-4 offset-0 d-flex flex-column cust_blogteaser cardSelf" ><a href="#"><embed className='pdfDisplay3 img-fluid' src={each.fileurl} scroll="no" seamless="seamless" frameborder="0"></embed></a>
         <h3 className="cardTitle">{each.title.slice(0,27)+'...'}</h3>
         <p className="text-secondary cardText" >{each.standard.slice(0,75)+'...'}</p><p className="text-secondary cardText subjectText" >{each.grade} / {each.subject}<br/>
         <div className="combineRating"><StarRatingComponent
 name="rate2"
 editing={false}
 starCount={5}
 value={Math.round(each.rating)}
/> &nbsp;&nbsp;&nbsp;<p>{each.rating}</p></div>
         </p>
         <h4>${each.price}</h4>
         <Link to='/productwholeinfo' href="#" className="h4 arrowDiv"><i className="fa fa-arrow-circle-right"></i></Link></div>
   })
   let highItems = this.state.high.map((each)=>{
     return <div className="col-md-4 offset-0 d-flex flex-column cust_blogteaser cardSelf" ><a href="#"><embed className='pdfDisplay3 img-fluid' src={each.fileurl} scroll="no" seamless="seamless" frameborder="0"></embed></a>
         <h3 className="cardTitle">{each.title.slice(0,27)+'...'}</h3>
         <p className="text-secondary cardText" >{each.standard.slice(0,75)+'...'}</p><p className="text-secondary cardText subjectText" >{each.grade} / {each.subject}<br/>
         <div className="combineRating"><StarRatingComponent
 name="rate2"
 editing={false}

 starCount={5}
 value={Math.round(each.rating)}
/> &nbsp;&nbsp;&nbsp;<p>{each.rating}</p></div>
         </p>
         <h4>${each.price}</h4>
         <Link to='/productwholeinfo' href="#" className="h4 arrowDiv"><i className="fa fa-arrow-circle-right"></i></Link></div>
   })

    return(
      <div>

      <header className="masthead bg-primary text-white text-center searchheader" >


            <ul className="listItemUl">
              <Link to="/"><li className="listItemHeader">Home</li></Link>
              <Link to='/aboutus'><li className="listItemHeader">About Us</li></Link>
              <Link to='/help'><li className="listItemHeader">Help</li></Link>
              <li className="listItemHeader">Schools</li>
              <hr />
            </ul>


            <div className="row padMar">
                 <div className="col padMar">
                     <div className="input-group">
                         <div className="input-group-prepend"></div><input onChange={this.getSearchValue} className="form-control autocomplete searchbar" type="text" placeholder="Search  by  title  or  resource  type" />
                         <div className="input-group-append"><button onClick={this.sendValueToStore} className="btn btn-warning searchbtn" type="button" ><i className="fa fa-search"></i></button></div>
                     </div>
                 </div>
             </div>
      </header>

     <Filter />



     <section id="portfolio" className="portfolio cardMainContainer" >
         <aside></aside>
         <div className="gradeContainer">
             <h3 className="text-uppercase text-center text-secondary gradeSection"> Elementary School Popular Resources</h3>
             <hr className="star-dark mb-5 starSign"/>
             <div className="row">
                 <div className="col cardDiv1">
                     <div className="cardDiv2">
                         <div className="container cardContainer">
                             <div className="cust_bloglistintro"></div>
                             <div className="row flex-nowrap marginTop">

                                     {elemItems}

                 </div>
             </div>
         </div>
         </div>
         </div>
         </div>
         <div className="">
             <h3 className="text-uppercase text-center text-secondary gradeSection" >Middle School Popular Resources</h3>
             <hr className="star-dark mb-5 starSign" />
             <div className="row">
                 <div className="col cardDiv1" >
                     <div className="cardDiv2">
                         <div className="container cardContainer">
                             <div className="cust_bloglistintro"></div>
                             <div className="row flex-nowrap">
                                {middleItems}
                 </div>
             </div>
         </div>
         </div>
         </div>
         </div>
         <div className="">
             <h3 className="text-uppercase text-center text-secondary gradeSection" >High School Popular Resources</h3>
             <hr className="star-dark mb-5 starSign" />
             <div className="row">
                 <div className="col cardDiv1">
                     <div className="cardDiv2">
                         <div className="container cardContainer">
                             <div className="cust_bloglistintro"></div>
                             <div className="row flex-nowrap">
                                {highItems}
                 </div>
             </div>
         </div>
         </div>
         </div>
         </div>
     </section>

     <Footer />

      </div>
    )
  }
}

// map global state to local props
const mapStateToProps = (state) => {
  return {

     //this.props.isAuthenticated
    //ctr: state.counter // this.props.ctr
  }
}

// make the dispatches available on local props
// dispatch is used to communicate with the reducer
// so the reducer can change the global state
const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
    sendProductIdForWholePage : (value) => dispatch({type: "PRODUCTID",productid: value}),
   sendSearchValue : (value) => dispatch({type: "SEARCHVALUE", searchValue: value})

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomePage))
