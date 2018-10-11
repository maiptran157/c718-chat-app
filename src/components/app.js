import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';
import Home from './home';
import Chat from './chat';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path='/chat-room' component={Chat} />
        </div>
    </div>
);

export default App;
