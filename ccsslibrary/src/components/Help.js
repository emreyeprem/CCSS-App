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
                <img className="d-block w-100 slideHeight" src="https://i2.wp.com/blog.signalnoise.com/wp-content/uploads/2010/08/i_backtoschool.jpg" alt="First slide"/>
                <img className="d-block w-100 slideHeight" src="https://ecdn.teacherspayteachers.com/thumbitem/LAB-SAFETY-POSTERS-Secondary-Science-humor--2692109-1471818151/original-2692109-1.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item ">
                <img className="d-block w-100 slideHeight" src="https://ecdn.teacherspayteachers.com/thumbitem/Exponent-Rules-Coloring-Sheet-2201651-1460014812/original-2201651-1.jpg" alt="Second slide"/>
                <img className="d-block w-100 slideHeight" src="https://ecdn.teacherspayteachers.com/thumbitem/-1-Deals-Nouns-Worksheets-4200328-1542330001/original-4200328-1.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item ">
                <img className="d-block w-100 slideHeight" src="https://ecdn.teacherspayteachers.com/thumbitem/Division-using-Repeated-Subtraction-098785800-1379881223-1516786197/original-885131-4.jpg" alt="Third slide"/>
                <img className="d-block w-100 slideHeight" src="http://cialiswow.com/wp-content/uploads/2018/08/free-printable-abacus-worksheets-pattern-cards-homeschool-deals-575x300.jpg" alt="Third slide"/>
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
     <div className="clearfix numberHeading">

      <div className="col-md-1 faq_num nmbrBox">1</div>
     <div className="col-md-10 faq">
         <h3 className="faq_question">{"What if my file isn't printing correctly?"}</h3>
          <div className="faq_answer">
          <p>{"First, determine what file type you're having trouble printing. If it's a ZIP file, you'll need to uncompress the file first before you can print the components. Here's how you can open a Zip file. If the file is a PDF, especially a PDF with a lot of graphics, it may look fine on your screen, but may not print out correctly. If you’re having trouble printing a PDF, please be sure that you're opening the PDF with the latest version of Adobe Acrobat Reader."}
          </p>
          </div>
     </div>
     </div>

         <div className="clearfix numberHeading">

        	<div className="col-md-1 faq_num nmbrBox">2</div>
         <div className="col-md-10 faq">
             <h3 className="faq_question">How and when do I get paid?</h3>
              <div className="faq_answer">
              <p>We work with third party service providers to issue your payments to you. The provider we currently work with is Paypal. In order to get paid, you'll need to have an account with PayPal and be sure that your account is eligible and ready to receive payments. Finally, make sure that you've provided this information in the "Payment Options" section of your TpT account information.


              </p>
              </div>
         </div>
         </div>

         <div className="clearfix numberHeading">

         <div className="col-md-1 faq_num nmbrBox">3</div>
         <div className="col-md-10 faq">
             <h3 className="faq_question">What are CCSS credits?</h3>
              <div className="faq_answer">
              <p>{"CCSS credits are points which can be applied to future purchases to save you money. To earn credits: After you make a purchase, you'll need to leave feedback on your purchase. We recommend waiting to do so until you've had a chance to use the product. When you're ready to leave feedback, just return to My Purchases and click the Provide Feedback link to the right of the date purchased. For every dollar you spend on TpT, you'll earn 1 credit—and we'll round up for you, too! If you provide fair feedback on a $4.75 item, you will earn 5 credits. Every 20 credits you earn equals $1 to apply toward future TpT purchases. Please note that TpT credits are only earned for feedback left on active, paid teacher-created resources. There isn’t an option to leave feedback when you purchase TpT gift cards so credits aren’t earned for them. Credits are not earned for feedback left on free downloads either."}
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
                <h6>How do I cancel my account?</h6>
{"We're sorry to see you go! Keep in mind that if you close your account, you won’t be able to download items any longer, even the ones you’ve already paid for. If you’d just like to turn off your notifications, you can do so by clicking Email Preferences on the “My Account” section of your profile, and unsubscribing from any emails you would prefer not to receive. If you’d still like to cancel your account, please follow the steps below: Hover over My CCSS and click on My Account Click the red Edit button at the bottom of the page then scroll down to the bottom and click “Close My Account Now” and press OK."}

                </p>
                    </div>
            <div className="col-md-4 col-12 px-2">
                <div className="text-center"><i><span className="fa fa-industry fa-5x"></span></i></div>
                <p className="mt-3">
                <h6>Can I post the same resource with a different title?</h6>
No. To help avoid Buyer confusion, please don’t post the same resource more than once. If there are substantive differences that truly change the nature of the resource, feel free to post as a separate resource and clearly outline the differences in your resource description. If it’s brought to our attention that a Seller has been posting duplicate resources, we’ll reach out and ask that Seller to remove them. This prohibition does not apply to posting resources combined into bundles, although the Seller should be as clear as possible about what the bundle contains to avoid confusion.
               </p>
            </div>
            <div className="col-md-4 col-12 px-2">
                <div className="text-center"><i><span className="fa fa-dashboard fa-5x"></span></i></div>
                 <p className="mt-3">
                 <h6>How do I search for resources?</h6>
 From the TpT home page, you have a few options:
 1. Use the search bar at the top of the page—just type in a keyword and go. You can sort your results by relevance, price, rating, recency or best selling.<br/>
 2. Use the category labels on the left side of the page to narrow your search, then browse. You can select one or more options:
 3. Once you've found some products you like, follow those Sellers by clicking the "Follow Me" link right under their store name. You'll then receive a notification each time they post something new.
                </p>
            </div>
        </div>

      <div className="row">
          <div class="col-12 col-md-5 p-5">
              <address className="m-lg-5">
                  <b className="d-block">Common Core Library, Inc.</b>
                  <p>1255 Down Hill St, Suite 700</p>
                  <p>Houston, TX 77103</p>
                  <p> <abbr title="Phone Number">Tel</abbr>: &nbsp;(732) 456-6890 </p>
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
