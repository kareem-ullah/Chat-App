import React from 'react';
import {Router, Route,} from 'react-router-dom';
import App from './App';
import Chat from './ChatsApp';
import History from './History'
const Custom = () => (

    <Router history={History}>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/Chat' component={Chat} />


        </div>



    </Router>

)

export default Custom;