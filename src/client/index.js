import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import makeStore from './store';

import App from './components/App';
import Login from './containers/Login';
import Recommendation from './containers/Recommendation';

// create store
const store = makeStore();

// routes
const routes = <Route path="/" component={App}>
	<Route path="/login" component={Login} />
	<Route path="/recommendation" component={Recommendation} />
</Route>

// render
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			{routes}	
		</Router>	
	</Provider>,
	document.getElementById('app')
);

//temp till i figure out where to put this
import { login, load, evaluate } from './action_creators';

let unsub = store.subscribe(() => {
	console.log('State change..');	
	console.dir(store.getState());
});
unsub(); //turn off

// dispatch
//user,pass,type,lat,lnd,alt)
const user =  'username';
const pass = 'password';
const type = 'ptc';
const lat = 0;
const lnd = 0;
const alt = 0;
//store.dispatch(login(user,pass,type,lat,lnd,alt));

// evaluate
setTimeout(() => {
	//store.dispatch(evaluate(store.getState()));
},2000);
