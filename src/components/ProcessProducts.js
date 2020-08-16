import React, {Component} from 'react';
import {connect} from 'react-redux'
import close from '../images/close.png'
import './processProducts.css'

import {deleteProduct} from '../actions/Actions'

const ProcessProducts= (props)=>{
	
		let productobj = props.cartState.cart;
		console.log("original ", productobj)
		let keys  = Object.keys(productobj);	
	
		let cartProducts = keys.map(productkey=>{
		return(
				<React.Fragment key={productkey}>
					<div className="wd--1"><img onClick={props.deleteProduct} className="deleteProduct" src={close}/></div>
					<div className="wd--2">{productkey}</div>
					<div className="wd--3">{productobj[productkey]["price"]}</div>
					<div className="wd--2">{productobj[productkey]["quantity"]}</div>
					<div className="wd--2">{productobj[productkey]["total"]}</div>	
				</React.Fragment>
			)
		})

		return(			
			<div className="ProcessProducts">
			{console.log(props.cartState.cart, "sttddkfjkdf")}
				<div className="ProcessProducts-head">
					<div className="wd--1"></div>
					<div className="wd--2">PRODUCTS</div>
					<div className="wd--3">PRICE</div>
					<div className="wd--2">QUANTITY</div>
					<div className="wd--2">TOTAL</div>
				</div>
				<div className="ProcessProducts-cart">					
					{keys.length==0?"THERE ARE NO PRODUCTS":cartProducts}
					
				</div>
			</div>
		)	
	
	
}

const mapStateToProps=(state)=>{
	return{
		cartState:state.ProcessProductsReducer
	}
}

export default connect(mapStateToProps, {deleteProduct})(ProcessProducts);