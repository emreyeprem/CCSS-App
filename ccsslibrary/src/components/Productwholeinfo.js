import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import '../assets/css/productwholeinfo.css'
import Footer from './Footer'

import axios from 'axios'
import '../assets/css/filter.css'
import '../assets/css/standards.css'



class Productwholeinfo extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }



  render(){


    return (
      <div>



      <div className="container">
   <div className="card">
     <div className="container-fliud">
       <div className="wrapper row">
         <div className="preview col-md-6">

           <div className="preview-pic tab-content">
             <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
             <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
             <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
             <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
             <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
           </div>
           <ul className="preview-thumbnail nav nav-tabs">
             <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
             <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
             <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
             <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
             <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
           </ul>

         </div>
         <div className="details col-md-6">
           <h3 className="product-title">Rational Exponents Activity</h3>
           <div className="rating">
             <div className="stars">
               <span className="fa fa-star checked"></span>
               <span className="fa fa-star checked"></span>
               <span className="fa fa-star checked"></span>
               <span className="fa fa-star"></span>
               <span className="fa fa-star"></span>
             </div>
             <span className="review-no">41 reviews</span>
           </div>
           <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
           <h4 className="price">current price: <span>$7.5</span></h4>
           <h6 className="price">Grade Levels: <span>8th, 9th, 10th</span></h6>
           <h6 className="price">Resource Type: <span>Worksheets, Activities</span></h6>
           <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
           <h5 className="sizes">Subject:
             <span className="size" data-toggle="tooltip" title="small">Pre-Algebra</span>
             <span className="size" data-toggle="tooltip" title="medium">Algebra 1</span>
             
           </h5>
           <h5 className="colors">colors:
             <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
             <span className="color green"></span>
             <span className="color blue"></span>
           </h5>
           <div className="action">
             <button className="add-to-cart btn btn-default" type="button">add to cart</button>
             <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>



<div className="row descriptionCard">
 <div className="col-12">
            <div className="card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-align-justify"></i> Description</div>
                <div className="card-body">
                    <p className="card-text">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                    </p>
                    <p className="card-text">
                        Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classNameique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classNameique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.
                    </p>
                </div>
            </div>
        </div>


        <div className="col-12 reviewCard" id="reviews">
            <div className="card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-comment"></i> Reviews</div>
                <div className="card-body">
                    <div className="review">
                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                        <meta itemprop="datePublished" content="01-01-2016"/>January 01, 2018

                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        by Paul Smith
                        <p className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </p>
                        <hr/>
                    </div>
                    <div className="review">
                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                        <meta itemprop="datePublished" content="01-01-2016"/>January 01, 2018

                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        by Paul Smith
                        <p className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </p>
                        <hr/>
                    </div>
                    </div>
                  </div>
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


  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Productwholeinfo)
