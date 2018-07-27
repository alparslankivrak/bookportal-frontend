import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import  SearchBooks from './SearchBooks';
import  SearchUsers from './SearchUsers';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SearchUsers />, document.getElementById('root'));
registerServiceWorker();
