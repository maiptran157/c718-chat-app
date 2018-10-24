import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Rooms from './rooms';
import auth from '../hoc/auth';
import SignIn from './accounts/sign_in';
import SignUp from './accounts/sign_up';

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={auth(Rooms, '/sign-in')} />
        <Route path="/sign-in" component={auth(SignIn, '/rooms', false)} />
        <Route path="/sign-up" component={auth(SignUp, '/rooms', false)} />
    </Switch>
)