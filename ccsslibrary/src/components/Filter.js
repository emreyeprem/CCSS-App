import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';

import 'rc-menu/assets/index.css';
import axios from 'axios'
import '../assets/css/filter.css'


  let config = {headers: {
    'Accept': 'application/json',
    'Api-Key': 'hgvsDmBJtYaWJUkSCMUUJhYm',
    'Content-Type': 'application/json',
    'crossDomain': true,
    "async": true
}}

class Filter extends Component{
  constructor(props){
    super(props)
    this.state={
           grade: ''
    }
  }

getGrade =(e)=>{
    this.setState({
      ...this.state,
      grade: e
    })
}
getStandards = (e)=>{
  axios('http://commonstandardsproject.com/api/v1/jurisdictions/28903EF2A9F9469C9BF592D4D0BE10F8',config).then((response)=>{
    let chosenStandard = response.data.data['standardSets'].filter((each)=>{
      return each.title==this.state.grade && each.subject == e
    })
    console.log(chosenStandard[0].id)
    this.props.getGradeSubjectId(chosenStandard[0].id)
  })
}

  render(){

    return (

          <div className="filter">
          <div className="filterdropdown">

          <Menu>
          <MenuItem > Search by Standards
          </MenuItem>
          <Divider/>
          <SubMenu onMouseEnter={()=>this.getGrade('Grade K')} title={'Grade K'}>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('Mathematics')} className="hover">MATH</Link></MenuItem>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('English Language Arts and Reading')} className="hover">ELA</Link></MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu onMouseEnter={()=>this.getGrade('Grade 1')} title={'Grade 1'}>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('Mathematics')} className="hover">MATH</Link></MenuItem>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('English Language Arts and Reading')} className="hover">ELA</Link></MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu onMouseEnter={()=>this.getGrade('Grade 2')} title={'Grade 2'}>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('Mathematics')} className="hover">MATH</Link></MenuItem>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('English Language Arts and Reading')} className="hover">ELA</Link></MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu onMouseEnter={()=>this.getGrade('Grade 3')} title={'Grade 3'}>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('Mathematics')} className="hover">MATH</Link></MenuItem>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('English Language Arts and Reading')} className="hover">ELA</Link></MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu onMouseEnter={()=>this.getGrade('Grade 4')} title={'Grade 4'}>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('Mathematics')} className="hover">MATH</Link></MenuItem>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('English Language Arts and Reading')} className="hover">ELA</Link></MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu onMouseEnter={()=>this.getGrade('Grade 5')} title={'Grade 5'}>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('Mathematics')} className="hover">MATH</Link></MenuItem>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('English Language Arts and Reading')} className="hover">ELA</Link></MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu onMouseEnter={()=>this.getGrade('Grade 6')} title={'Grade 6'}>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('Mathematics')} className="hover">MATH</Link></MenuItem>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('English Language Arts and Reading')} className="hover">ELA</Link></MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu onMouseEnter={()=>this.getGrade('Grade 7')} title={'Grade 7'}>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('Mathematics')} className="hover">MATH</Link></MenuItem>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('English Language Arts and Reading')} className="hover">ELA</Link></MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu onMouseEnter={()=>this.getGrade('Grade 8')} title={'Grade 8'}>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('Mathematics')} className="hover">MATH</Link></MenuItem>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('English Language Arts and Reading')} className="hover">ELA</Link></MenuItem>
          </SubMenu>
          <Divider/>
          <SubMenu onMouseEnter={()=>this.getGrade('Grade 9')} title={'High School'}>
          <MenuItem><Link to='/standards' onClick={()=>this.getStandards('Mathematics')} className="hover">MATH</Link></MenuItem>

          </SubMenu>


          </Menu>
      </div>



       <p className="search-by-price">Search by Price</p>
       <div className="adjustment">
       <div className="price-container">
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Free</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Under $5</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">$5 - $10</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">$10 - $20</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">$20 and up</label>
       </div>

       </div>



       <p className="search-by-resource">Top Resource Types</p>
       <div className="adjustment">
       <div className="price-container">
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Activities</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Worksheets</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Assessments</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Projects</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Posters</label>
       </div>
       <div id="adjustment2">
       </div>
       </div>




      </div>



    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
getGradeSubjectId : (value) => dispatch({type: "SUBJECTID",subjectid: value})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Filter)
