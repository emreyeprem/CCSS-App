import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import Filter from './Filter'
import Footer from './Footer'
import 'rc-menu/assets/index.css';
import axios from 'axios'
import '../assets/css/filter.css'
import '../assets/css/standards.css'

  let config = {headers: {
    'Accept': 'application/json',
    'Api-Key': 'hgvsDmBJtYaWJUkSCMUUJhYm',
    'Content-Type': 'application/json',
    'crossDomain': true,
    "async": true
}}

class Standards extends Component{
  constructor(props){
    super(props)
    this.state={
      standards: []
    }
  }

componentWillReceiveProps = (props)=>{
  if(!props.subjectid==''){
  axios(`http://api.commonstandardsproject.com/api/v1/standard_sets/${props.subjectid}`,config).then((response)=>{   if(response.data.data.subject=='Mathematics' && response.data.data.title=='Grade 9'){
    console.log('hey')
    let standardArr=Object.values(response.data.data.standards)

    let standardString=standardArr.map((each)=>{
      return each.description.charAt(0).toUpperCase() + each.description.slice(1)

    })

    this.setState({
      ...this.state,
      standards: standardString.reverse()
    })
     this.props.resumeSubjectId()
     this.setState({
       ...this.state,
       footer: <Footer/>
     })
  }else {
    console.log('hey2')
       let standardArr=Object.values(response.data.data.standards)

       let standardString=standardArr.map((each)=>{
         return each.statementNotation + ' : ' + each.description.charAt(0).toUpperCase() + each.description.slice(1)

       })
       this.setState({
         ...this.state,
         standards: standardString.reverse()
       })
     }
     this.props.resumeSubjectId()
     this.setState({
       ...this.state,
       footer: <Footer/>
     })
  })
}
}

  render(){
    let orderedStandards=this.state.standards.map((each)=>{
      return <Link className="hover1" to='/'><li>{each}</li></Link>
    })
    return (
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
         <div className="main-container">
         <div className="filterStandard-container">
        <Filter/>
          </div>
          <div className="standard-container">
        <ul >
        {orderedStandards}
        </ul>
         </div>

</div>
{this.state.footer}
</div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr
    subjectid:state.subjectid
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
resumeSubjectId : (value) => dispatch({type: "RESUMESUBJECTID"})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Standards)
