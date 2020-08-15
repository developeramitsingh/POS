import {LOAD_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT} from '../actionTypes/ActionTypes'

export const loadProducts = (dispatch)=>{
	dispatch({type:LOAD_PRODUCTS})
}


export const addProducts = (data)=>(dispatch)=>{
	console.log("rec", data)
	dispatch({type:ADD_PRODUCT, payload:data})
}