import React, { Component } from 'react';
import {button, Navbutton} from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../history';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import {Link, NavLink} from 'react-router-dom'
import Footer from './Footer'
import Filter from './Filter'
import StarRatingComponent from 'react-star-rating-component';

class Search extends Component {
     constructor(props){
       super(props)
       this.state={
         searchValue: [],

       }

     }
  componentWillReceiveProps = (props) => { //bu fonksiyon global store daki degisiklikte get fired olur. Yeni degisikligi yakalamak icin kullanilir.
    // axios.get(`http://localhost:3001/getSearchItem/${props.searchInputValue}`)
    // .then((response) => {
    //   this.setState({
    //      items: response.data
    //      })
    //
    //
    // })
  }
  componentDidMount = () => {
    console.log(this.props.searchValue)
    axios.post('http://localhost:3001/api/searchby',{
       searchValue: this.props.searchValue
    }).then((response)=>{
      console.log(response.data)
      if(response.data.length==0){
        this.setState({
          ...this.state,
          footer: ''
        })
      }else{
        this.setState({
          ...this.state,
          footer: <Footer/>
        })
      }
      console.log(response.data)
      this.setState({
        ...this.state,
        searchValue : response.data,

      })
    })
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

     render() {
       let items = this.state.searchValue.map((each)=>{

         return <div className="container myproductContainer itemMainContainer">
             <div className="photo-card photoCard" >
                 <embed className='pdfDisplay2 photo-background' src={each.fileurl} scroll="no" seamless="seamless" frameborder="0"></embed>
                 <div className="photo-details borderRight">
                     <h6 >{each.title}</h6><p>&#10070; Digital download</p><hr/>
                     <p className="price capitalize smallfont textStandard"><span className="capitalize standardspan">Standard: </span>{each.standard}</p><hr/>
                     <div className="buttonDiv">
                    <Link to="/search" className="detailsAnchor "><button onClick={this.sendtomycart} className='detailsbtn addCartbtn detailsbutton' value={each.productid}>Add To Cart</button></Link>
                    <a href='/productwholeinfo' className="detailsAnchor"><button onClick={this.sendproductid} className='buttonHover detailsbtn detailsbutton' value={each.productid}>See Details</button></a>
                         <a href='/productwholeinfo' className="detailsAnchor"><button onClick={this.sendproductid} className='buttonHover detailsbtn wishbtn detailsbutton' value={each.productid}>Move to Wish List</button></a>
                         </div>
                 </div>

                 <div className="photo-tags giveborder" >
                     <ul className="ratingBox">
                     <a href="#" className="badge badge-secondary categoryTag">CCSS category &nbsp; &#10021;&#9776;</a>
                     <li className="price capitalize middleclm"><span className="capitalize">Grade: </span>{each.grade}  <span className="subject">Subject: </span> {each.subject}</li><hr/>
                     <li className="price"><span className="capitalize">Resource Type: </span>{each.resourcetype}</li>


                     </ul>
                 </div>
                 <div className="photo-tags ratingDiv" >
                     <ul className="ratingBox2">
                     <a href="#" className="badge badge-secondary categoryTag">Item Info &nbsp; &#10021;&#9776;</a>
                     <li className="price ratingList"><span className="capitalize ratingSpan">Rating: </span><br />{each.rating}</li>
                     <li><StarRatingComponent
             name="rate2"
             editing={false}

             starCount={5}
             value={Math.round(each.rating)}
           /></li>
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
                            <div className="input-group-prepend"></div><input onChange={this.getSearchValue} className="form-control autocomplete searchbar" type="text" placeholder="Search  by  title  or  resource  type" />
                            <div className="input-group-append"><a href="/search"><button onClick={this.sendValueToStore} className="btn btn-warning searchbtn" type="button" ><i className="fa fa-search"></i></button></a></div>
                        </div>
                    </div>
                </div>
         </header>

              <Filter />


         {items}


    {this.state.footer}


   </div>
  )

  }

}


     // map global state to local props
     const mapStateToProps = (state) => {
       return {

         filtereditem : state.filtereditem,
         userid:state.userid,
         cartcount:state.cartcount,
         searchValue:state.searchValue
       }
     }

     // make the dispatches available on local props
     // dispatch is used to communicate with the reducer
     // so the reducer can change the global state
     const mapDispatchToProps = (dispatch) => {
       return {
         // this.props.onIncrementCounter
           updatecartcount : (cartcount) => dispatch({type: "UPDATECARTCOUNT",cartcount:cartcount}),
 sendSearchValue : (value) => dispatch({type: "SEARCHVALUE", searchValue: value})
       }
     }


     export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search))
