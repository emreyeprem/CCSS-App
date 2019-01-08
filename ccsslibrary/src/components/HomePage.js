import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'
import '../assets/css/homepage.css'
import Filter from './Filter'
import deskimg from '../assets/img/desk.jpg'

class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {


    return(
      <div>

      <header className="masthead bg-primary text-white text-center searchheader" >


            <ul className="listItemUl">
              <li className="listItemHeader">Home</li>
              <li className="listItemHeader">About Us</li>
              <li className="listItemHeader">Help</li>
              <li className="listItemHeader">Schools</li>
              <hr />
            </ul>


          <div className="row padMar">
              <div className="col padMar">
                  <div className="input-group">
                      <div className="input-group-prepend"></div><input className="form-control autocomplete searchbar" type="text" placeholder="Search  by  title  or  resource  type" />
                      <div className="input-group-append"><button className="btn btn-warning searchbtn" type="button" ><i className="fa fa-search"></i></button></div>
                  </div>
              </div>
          </div>
      </header>

     <Filter />



     <section id="portfolio" className="portfolio cardMainContainer" >
         <aside></aside>
         <div className="container gradeContainer">
             <h3 className="text-uppercase text-center text-secondary gradeSection"> Elementary School Popular Resources</h3>
             <hr className="star-dark mb-5 starSign"/>
             <div className="row">
                 <div className="col cardDiv1">
                     <div className="cardDiv2">
                         <div className="container cardContainer">
                             <div className="cust_bloglistintro"></div>
                             <div className="row flex-nowrap">
                                 <div className="col-md-4 offset-0 d-flex flex-column cust_blogteaser cardSelf" ><a href="#"><img className="img-fluid" src={deskimg} /></a>
                                     <h3 className="cardTitle">Heading</h3>
                                     <p className="text-secondary cardText" >Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id. </p><hr className="cardHr" /><a href="#" className="h4"><i className="fa fa-arrow-circle-right"></i></a></div>

                 </div>
             </div>
         </div>
         </div>
         </div>
         </div>
         <div className="container">
             <h3 className="text-uppercase text-center text-secondary gradeSection" >Middle School Popular Resources</h3>
             <hr className="star-dark mb-5 starSign" />
             <div className="row">
                 <div className="col cardDiv1" >
                     <div className="cardDiv2">
                         <div className="container cardContainer">
                             <div className="cust_bloglistintro"></div>
                             <div className="row flex-nowrap">
                                 <div className="col-md-4 offset-0 d-flex flex-column cust_blogteaser cardSelf" ><a href="#"><img className="img-fluid" src={deskimg} /></a>
                                     <h3>Heading</h3>
                                     <p className="text-secondary cardText" >Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id. </p><a href="#" className="h4"><i className="fa fa-arrow-circle-right"></i></a></div>

                 </div>
             </div>
         </div>
         </div>
         </div>
         </div>
         <div className="container">
             <h3 className="text-uppercase text-center text-secondary gradeSection" >High School Popular Resources</h3>
             <hr className="star-dark mb-5 starSign" />
             <div className="row">
                 <div className="col cardDiv1">
                     <div className="cardDiv2">
                         <div className="container cardContainer">
                             <div className="cust_bloglistintro"></div>
                             <div className="row flex-nowrap">
                                 <div className="col-md-4 offset-0 d-flex flex-column cust_blogteaser cardSelf"><a href="#"><img className="img-fluid" src={deskimg} /></a>
                                     <h3>Heading</h3>
                                     <p className="text-secondary cardText" >Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id. </p><a href="#" className="h4"><i className="fa fa-arrow-circle-right"></i></a></div>

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


  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomePage))
