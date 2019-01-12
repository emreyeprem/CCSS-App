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

      worksheetstandard : '',
      standardsOfGrades: []

    }
  }

  componentDidMount = ()=>{
  axios.post('http://localhost:3001/api/filterbystandard',{
     worksheetstandard: this.props.filteredstandard
  }).then((response)=>{
    console.log(response.data)
    this.setState({
      ...this.state,
      standardsOfGrades : response.data
    })
  })
}


  render(){
      let filteredStandards= this.state.standardsOfGrades.map((each)=>{
       return <div className="container myproductContainer">
           <div className="photo-card photoCard" >
               <embed className='pdfDisplay2 photo-background' src={each.fileurl} scroll="no" seamless="seamless" frameborder="0"></embed>
               <div className="photo-details">
                   <h6 >{each.title}</h6><hr/>
                   <p className="price capitalize smallfont textStandard"><span className="capitalize standardspan">Standard: </span>{each.standard}</p><hr/>
                   <div className="buttonDiv">
                   <a href='/productwholeinfo' className="detailsAnchor "><button onClick={this.sendproductid} className='detailsbtn addCartbtn' value={each.productid}>Add To Cart</button></a>
                  <a href='/productwholeinfo' className="detailsAnchor"><button onClick={this.sendproductid} className='buttonHover detailsbtn' value={each.productid}>See Details</button></a>
                       <a href='/productwholeinfo' className="detailsAnchor"><button onClick={this.sendproductid} className='buttonHover detailsbtn wishbtn' value={each.productid}>Move to Wish List</button></a>
                       </div>
               </div>

               <div className="photo-tags giveborder" >
                   <ul>
                   <li className="price capitalize"><span className="capitalize">Grade: </span>{each.grade}  <span>Subject: </span> {each.subject}</li><hr/>

                   <li className="price"><span className="capitalize">Resource Type: </span>{each.resourcetype}</li>




                   </ul>
               </div>
               <div className="photo-tags ratingDiv" >
                   <ul>
                   <li className="price ratingList"><span className="capitalize ratingSpan">Rating: </span><br />{each.rating}</li>
                   <li className="price priceList pricediv"><span className="capitalize">Price <br/> </span><span className="pricebold">${each.price}</span></li>
                   </ul>
               </div>
           </div>

       </div>

})

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


      {filteredStandards}


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
