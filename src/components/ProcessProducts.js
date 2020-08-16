import React from 'react';
import {connect} from 'react-redux'
import close from '../images/close.png'
import './processProducts.css'

const ProcessProducts = (props)=>{
	let cartProducts = props.cartState.map(product=>{
		let keys  = Object.keys(product);
		console.log(product[keys])
		return(
				<React.Fragment key={keys}>
					<div className="wd--1"><img className="deleteProduct" src={close}/></div>
					<div className="wd--2">{keys}</div>
					<div className="wd--3">{product[keys]["price"]}</div>
					<div className="wd--2">{product[keys]["quantity"]}</div>
					<div className="wd--2">{product[keys]["total"]}</div>	
				</React.Fragment>
			)
	})

	return(
			<div className="ProcessProducts">
				<div className="ProcessProducts-head">
					<div className="wd--1"></div>
					<div className="wd--2">PRODUCTS</div>
					<div className="wd--3">PRICE</div>
					<div className="wd--2">QUANTITY</div>
					<div className="wd--2">TOTAL</div>
				</div>
				<div className="ProcessProducts-cart">
					{props.cartState.length===0?"THERE ARE NO PRODUCTS":cartProducts}
				</div>
			</div>
		)
}

const mapStateToProps=(state)=>{
	return{
		cartState:state.ProcessProductsReducer.cart
	}
}

export default connect(mapStateToProps)(ProcessProducts);