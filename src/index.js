import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

import App from './views/App';

ReactDOM.render(<Router>
    <div >
        <App />
        <Routes />
    </div>
</Router>, document.getElementById('root'));