import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './ducks/store';
import { BrowserRouter as BR } from 'react-router-dom';

ReactDOM.render(
<BR>
<Provider store={store}>
<App />
</Provider>
</BR>, document.getElementById('root'));


