import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

/* redux */
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(<Provider store={store}>
	<HashRouter>
		<App />
	</HashRouter>
</Provider>, document.getElementById('root')); 