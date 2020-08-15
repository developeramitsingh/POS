import React from 'react';
import {connect} from 'react-redux'

import './processProducts.css'

const ProcessProducts = (props)=>{
	return(
			<div className="ProcessProducts">
				<div className="ProcessProducts-head">
					<div className="wd--3">PRODUCTS</div>
					<div className="wd--2">PRICE</div>
					<div className="wd--2">QUANTITY</div>
					<div className="wd--3">TOTAL</div>
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