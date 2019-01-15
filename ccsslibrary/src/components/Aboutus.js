import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import '../assets/css/aboutus.css'
import Footer from './Footer'
import history from '../history'



class Aboutus extends Component{
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



      <div className="how-section1">
                    <div className="row">
                        <div className="col-md-6 how-img">
                            <img src="https://seap.einaudi.cornell.edu/sites/seap/files/_MG_8729%20copy.jpg" className="rounded-circle img-fluid aboutPageImg" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4>{"Unlocking the Power of the World's Educators"}</h4>
                                        <h4 className="subheading">CCSS is a great site to find educators, and to explore and share tons of classroom products.</h4>
                        <p className="text-muted">{"Common Core Library is the go-to place for educators to find the resources, knowledge, and inspiration they need to teach at their best. We offer plenty of free and paid resources, created by educators who understand what works in the classroom. Our marketplace is growing every day to meet the evolving needs of the PreK-12 classroom. When educators get the resources and support they need, they're best equipped to inspire our next generation of learners."}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Our Vision</h4>
                                        <h4 className="subheading">To make the expertise and wisdom of all the teachers in the world available to anyone, anywhere, at any time.</h4>
                                        <p className="text-muted">{"Our team is passionate about improving people's lives through education, so we are working with passionate teachers who both dream big and know how to get stuff done. We’re also proud to partner with Code Nation so that young students can learn to code, and have access to careers in tech. CodeNation is a movement helping more young people grow from tech lovers into tech leaders."}</p>
                        </div>
                        <div className="col-md-6 how-img">
                        <div id="video"><div id="section"><iframe width="560" height="315" src="https://www.youtube.com/embed/q9qTQoiFCyI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 how-img">
                             <img src="https://store-images.s-microsoft.com/image/apps.12878.9007199266468309.406cd05f-af9c-4bfd-8047-40c36813d337.70bbe802-cc53-41ac-b3c0-80cbdee40c8f?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg" className="rounded-circle img-fluid aboutPageImg" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4>Our Founding Story</h4>
                                        <h4 className="subheading">Where educators can find essential resources, collaboration, and inspiration</h4>
                                        <p className="text-muted">{"CCSS was founded by John Doe, a Houston City public school teacher who saw incredible, untapped potential in the work that teachers create for every lesson, every day. John quickly realized that his students did the best when he incorporated ideas from other educators. This spark inspired him to create CCSS, which has grown into an enormous and global staff room: a place where any educator can find essential resources, collaboration, and inspiration."}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>A Platform for Sharing Educator Expertise</h4>
                                        <h4 className="subheading">Our Teacher-Authors are able to quickly respond to the ever-evolving needs of their fellow educators and provide them with the resources they need to teach at their best.</h4>
                                        <p className="text-muted">{"We believe the best ideas and approaches to learning come directly from educators who have experience teaching and connecting with students. Each resource on Common Core Library is created by a Teacher-Author and is tailored to a unique need or niche. When one teacher deeply understands how to bring rich, relevant, active learning to a classroom and shares that with other teachers around the globe, the benefits reach everyone, most of all the students."}</p>
                        </div>
                        <div className="col-md-6 how-img">
                            <img src="http://teachrworld.org/wp-content/uploads/2015/10/classroom-activities-for-kids.jpg" className="rounded-circle img-fluid aboutPageImg" alt=""/>
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


export default connect(mapStateToProps,mapDispatchToProps)(Aboutus)
