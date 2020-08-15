import {createStore,applyMiddleware, compose} from 'redux';
import Reducers from './reducers/Reducers'
import thunk from 'redux-thunk';

const middleware = [thunk];

const initstate = {
	
}

const store = createStore(Reducers, initstate, compose(
		applyMiddleware(...middleware),		
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	))


export default store;