import React, {useState} from 'react';
import {connect} from "react-redux"
import uniqid from "uniqid"
import './allproducts.css'
import colors from '../res/colors'

const AllProducts = (props)=>{	
	let products = props.allproducts.map((product,i)=>{
					let image;
					
					try{
						image = require('../images/'+product.image)					
					}catch(e){}
					
					return(
							<div key={uniqid()} style={{backgroundImage:'url('+image+')'}} className="product-card" >
								<div style={{background:colors[i]}}>
									<div>{product.name}</div>
									<div className="hidden">{product.price}</div>
									<div className="hidden">{product.description}</div>								
								</div>
							</div>
						)
				})

	return(			
			<div className="AllProducts">
				{products}
			</div>
		)
}

const mapStateToProps =(state)=>{
  return{
  	allproducts: state.AllProductsReducer.products
  }
}

export default connect(mapStateToProps)(AllProducts);