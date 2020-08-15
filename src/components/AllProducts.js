import React from 'react';
import {connect} from "react-redux"
import uniqid from "uniqid"
import './allproducts.css'
import colors from '../res/colors'
import {addProducts} from '../actions/Actions'

const AllProducts = (props)=>{
    const handleAddProduct = (e)=>{
    	let data  = props.allproducts.filter(product=>{    		
    		return product.name==e.currentTarget.dataset.name
    	})
    	
    	props.addProducts(data[0])
    } 

	let products = props.allproducts.map((product,i)=>{
					let image;
					
					try{
						image = require('../images/'+product.image)					
					}catch(e){}
					
					return(
							<div key={uniqid()} data-name={product.name} style={{backgroundImage:'url('+image+')'}} className="product-card" onClick={handleAddProduct} >
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

export default connect(mapStateToProps, {addProducts})(AllProducts);