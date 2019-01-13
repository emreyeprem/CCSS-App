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
  axios.post('http://localhost:3001/api/filterby',{
     filtereditem: this.props.filtereditem
  }).then((response)=>{
    console.log(response.data)
    this.setState({
      ...this.state,
      standardsOfGrades : response.data
    })
  })
}
componentWillReceiveProps =(props)=>{
  axios.post('http://localhost:3001/api/filterby',{
     filtereditem: props.filtereditem
  }).then((response)=>{
    console.log(response.data)
    this.setState({
      ...this.state,
      standardsOfGrades : response.data
    })
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
      let filteredStandards= this.state.standardsOfGrades.map((each)=>{
       return <div className="container myproductContainer">
           <div className="photo-card photoCard" >
               <embed className='pdfDisplay2 photo-background' src={each.fileurl} scroll="no" seamless="seamless" frameborder="0"></embed>
               <div className="photo-details borderRight">
                   <h6 >{each.title}</h6><p> by {each.nickname}</p><hr/>
                   <p className="price capitalize smallfont textStandard"><span className="capitalize standardspan">Standard: </span>{each.standard}</p><hr/>
                   <div className="buttonDiv">
                  <Link to="/standardworksheet" className="detailsAnchor "><button onClick={this.sendtomycart} className='detailsbtn addCartbtn detailsbutton' value={each.productid}>Add To Cart</button></Link>
                  <a href='/productwholeinfo' className="detailsAnchor"><button onClick={this.sendproductid} className='buttonHover detailsbtn detailsbutton' value={each.productid}>See Details</button></a>
                       <a href='/productwholeinfo' className="detailsAnchor"><button onClick={this.sendproductid} className='buttonHover detailsbtn wishbtn detailsbutton' value={each.productid}>Move to Wish List</button></a>
                       </div>
               </div>

               <div className="photo-tags giveborder" >
                   <ul>
                   <li className="price capitalize middleclm"><span className="capitalize">Grade: </span>{each.grade}  <span className="subject">Subject: </span> {each.subject}</li><hr/>

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
    filtereditem : state.filtereditem,
    userid:state.userid,
    cartcount:state.cartcount
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
    updatecartcount : (cartcount) => dispatch({type: "UPDATECARTCOUNT",cartcount:cartcount})


  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Standardworksheet)
