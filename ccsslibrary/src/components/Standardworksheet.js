import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import '../assets/css/standardworksheet.css'
import Footer from './Footer'
import Filter from './Filter'
import axios from 'axios'



class Standardworksheet extends Component{
  constructor(props){
    super(props)
    this.state={

      worksheetstandard : ''


    }
  }

  componentDidMount = ()=>{
  axios.post('http://localhost:3001/api/filterbystandard',{
     worksheetstandard: this.props.filteredstandard
  }).then((response)=>{
    console.log(response.data)

  })
}


  render(){


    return (
      <div>
      <header className="masthead bg-primary text-white text-center searchHeaderStandard" >


            <ul className="listItemUl standardHeaderList">
            <Link to="/"><li className="listItemHeader">Home</li></Link>
            <Link to="/aboutus"><li className="listItemHeader">About Us</li></Link>
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


      <section>

         <div className="container myproductContainer standardPageCard1">
             <div className="photo-card standardPageCard2" >
                 <embed className='pdfDisplay photo-background pdfContainer' src="" scroll="no" seamless="seamless" frameborder="0"></embed>
                 <div className="photo-details">
                     <h1 >Title</h1><hr/>
                     <p >Standard</p><hr/>
                     <p >Grade/Subject</p><hr/>
                     <p >Resource Type</p>
                 </div>
                 <div className="photo-tags" >
                     <ul>
                     <li className="ratingbtn">Rating:</li>
                     <li className="ratingbtn">Price:</li>
                         <li><a className='buttonHover detailsbtn' href="#">See Details</a></li>
                         <li><a className='buttonHover downloadbtn' href="#" download>Download</a></li>
                     </ul>
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
    //ctr: state.counter // this.props.ctr
    // userid:state.userid
    filteredstandard : state.filteredstandard
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
    // updateUserType : () => dispatch({type: "UPDATEUSERTYPE"})


  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Standardworksheet)
