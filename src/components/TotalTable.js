import React, {useState} from 'react'
import {connect} from 'react-redux'

const TotalTable =(props)=>{
	//const [state, setState] = useState({"subtotal":"", ""})

	let cartProducts = props.cartState.cart;
	let keys  = Object.keys(cartProducts)
	let subtotal, totalQuantity;
	if(keys.length>0){
		subtotal = keys.reduce((elem, elem1)=>{return parseInt(cartProducts[elem]["total"])+parseInt(cartProducts[elem1]["total"])})
		totalQuantity = keys.reduce((elem, elem1)=>{return parseInt(cartProducts[elem]["quantity"])+parseInt(cartProducts[elem1]["quantity"])})	
	}
	

	return(
			<div>
				<div className ="TotalTable-list">
					<div className="row">
						<div>Subtotal</div>
						<div>{subtotal}</div>
						<div>{totalQuantity+" items"}</div>
					</div>
					<div className="row">
						<div>VAT tax</div>
						<div><input type="value" /></div>
						<div>{10+" EUR"}</div>
					</div>
					<div className="row">
						<div>Discount</div>
						<div><input type="value" /></div>
						<div>{10+" EUR"}</div>
					</div>
					<div className="row">
						<div>Total</div>
						<div><input type="value" /></div>
						<div>{10+" EUR"}</div>
					</div>
				</div>	

			</div>
		)
}


const mapStateToProps=(state)=>{
	return{
		cartState:state.ProcessProductsReducer
	}
}


export default connect(mapStateToProps)(TotalTable);