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
       return <section>
          <div className="container myproductContainer standardPageCard1">
              <div className="photo-card standardPageCard2" >
                  <embed className='pdfDisplay2 photo-background pdfContainer' src={each.fileurl} scroll="no" seamless="seamless" frameborder="0"></embed>
                  <div className="photo-details">
                      <h1 >{each.title}</h1><hr/>
                      <p className="textStandard">{each.standard}</p><hr/>
                      <p className="price capitalize"><span className="capitalize">Grade: </span>{each.grade} <br/> <span>Subject: </span> {each.subject}</p><hr/>
                      <p className="textStandard capitalize"><span className="textStandard capitalize">Resource Type :</span>{each.resourcetype}</p>
                  </div>
                  <div className="photo-tags" >
                      <ul>
                      <li className="ratingbtn">Rating</li>
                      <li className="ratingnumber">{each.rating}</li> <hr/>
                      <li className="ratingbtnprice">Price</li><br/>
                      <li className="pricenumber">${each.price}</li>
                      <li><a className='buttonHover downloadbtn' href={each.fileurl} target="_blank" download>Print File</a></li>
                      <li><button onClick={this.sendproductid} className='buttonHover detailsbtn' value={each.productid}>See Details</button></li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

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
