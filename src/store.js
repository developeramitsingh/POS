import {createStore, compose} from 'redux';
import Reducers from './reducers/Reducers'

const initstate = {
	
}

const store = createStore(Reducers, initstate, compose(		
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	))


export default store;