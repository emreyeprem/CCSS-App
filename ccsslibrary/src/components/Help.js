import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import '../assets/css/help.css'
import Footer from './Footer'
import history from '../history'



class Help extends Component{
  constructor(props){
    super(props)
    this.state={

    }
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




  render(){


    return (
      <div>
      <header className="masthead bg-primary text-white text-center searchheaderSeller" >


            <ul className="listItemUl aboutHeaderList">
            <Link to="/"><li className="listItemHeader">Home</li></Link>
            <Link to="/aboutus"><li className="listItemHeader">About Us</li></Link>
              <li className="listItemHeader">Help</li>
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


    <div className="sliderAlertDiv">

      <div id="carouselExampleControls" className="carousel slide slideHeight" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active ">
                <img className="d-block w-100 slideHeight" src="https://www.dailyherald.com/storyimage/da/20190114/news/190119820/EP/1/3/EP-190119820.jpg&updated=201901140932&imageversion=Facebook&exactH=630&exactW=1200&exactfit=crop&noborder" alt="First slide"/>
            </div>
            <div className="carousel-item ">
                <img className="d-block w-100 slideHeight" src="https://ecdn.teacherspayteachers.com/thumbitem/Exponent-Rules-Coloring-Sheet-2201651-1460014812/original-2201651-1.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item ">
                <img className="d-block w-100 slideHeight" src="https://ecdn.teacherspayteachers.com/thumbitem/Division-using-Repeated-Subtraction-098785800-1379881223-1516786197/original-885131-4.jpg" alt="Third slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" ></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" ></span>
            <span className="sr-only">Next</span>
        </a>
    </div>




    <div className="alertContainer">
     <div className="alert alert-warning alert-dismissible alertDiv" role="alert">
         <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
         This section contains a wealth of information, related to <strong>PrepBootstrap</strong> and its store. If you cannot find an answer to your question,
         make sure to contact us.
     </div>


     <div className="containerBoxQ">
     <br />
     <div className="row site_content numberHeading">

         <div className="col-md-1 faq_num ">1</div>
         <div Name="col-md-10 faq ">
             <h3 className="faq_question">How do I apply?</h3>
              <div className="faq_answer">
              <p>
                  You can apply online to PTCL after searching for openings/vacancies relevant to your area of interest.
                  However, if there is no opening/vacancy, currently, to your area of interest, you can still leave your information with us by clicking on My Profile.
              </p>
              </div>
         </div>
         </div>

         <div className="clearfix numberHeading">

        	<div className="col-md-1 faq_num">2</div>
         <div className="col-md-10 faq">
             <h3 className="faq_question">I cannot find a suitable job on your website. Can I still apply?</h3>
              <div className="faq_answer">
              <p>Yes. You can update your profile in the My Profile section and specify you area of interest(s) according to your desired role. Once you save your profile, your information will be saved into our Talent Pool and a member of our Talent Acquisition team will contact you with relevant opportunities as they arise.
              </p>
              </div>
         </div>
         </div>

         <div className="clearfix numberHeading">

         <div className="col-md-1 faq_num">3</div>
         <div className="col-md-10 faq">
             <h3 className="faq_question">If I submit an application or submit my details, will PTCL keep me on file?</h3>
              <div className="faq_answer">
              <p>Yes. After you apply on our website at www.ptcl.com.pk/careers or create your profile, your information will be saved into our Talent Pool.
              </p>
              </div>
         </div>


     </div>
     </div>

   </div>

 </div>




    <div className="container jumbotron clearfix my-lg-4">
        <div className="row no-gutters p-md-5 p-2">

            <div className="col-md-4 col-12 px-2">
                <div className="text-center"><i><span className="fa fa-user fa-5x"></span></i></div>
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto
                consequatur cum eum laborum magni nam necessitatibus nisi? Ad cumque debitis
                dolore eum hic laboriosam nesciunt odit officia omnis similique.

                </p>
                    </div>
            <div className="col-md-4 col-12 px-2">
                <div className="text-center"><i><span className="fa fa-industry fa-5x"></span></i></div>
                <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto
                consequatur cum eum laborum magni nam necessitatibus nisi? Ad cumque debitis
                dolore eum hic laboriosam nesciunt odit officia omnis similique.
               </p>
            </div>
            <div className="col-md-4 col-12 px-2">
                <div className="text-center"><i><span className="fa fa-dashboard fa-5x"></span></i></div>
                 <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto
                consequatur cum eum laborum magni nam necessitatibus nisi? Ad cumque debitis
                dolore eum hic laboriosam nesciunt odit officia omnis similique.
                </p>
            </div>
        </div>

      <div className="row">
          <div class="col-12 col-md-5 p-5">
              <address className="m-lg-5">
                  <b className="d-block">Twitter, Inc.</b>
                  <p>1355 Market St, Suite 900</p>
                  <p>San Francisco, CA 94103</p>
                  <p> <abbr title="Phone Number">P</abbr>: (123) 456-7890 </p>
              </address>
          </div>
          <div className="col-12 col-md-7">
              <form>
                  <div className="md-form">
                      <label for="name">Name</label>
                      <input type="text" name="" className="form-control" id="name"/>
                  </div>
                  <div className="md-form">
                      <label for="email">Email</label>
                      <input type="email" name="" className="form-control" id="email"/>
                  </div>
                  <div className="md-form">
                      <label for="pswd">Password</label>
                      <input type="password" name="" className="form-control" id="pswd"/>
                  </div>
                  <div className="md-form">
                      <input type="password" name="" className="form-control" id="r-paswd"/>
                      <label for="r-paswd">Repeat Password</label>
                  </div>
                  <div className="text-center text-lg-right">
                      <input type="submit"   name="submit" id="submit" className="btn btn-warning"/>
                  </div>
              </form>
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
    sendSearchValue : (value) => dispatch({type: "SEARCHVALUE", searchValue: value})

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Help)
