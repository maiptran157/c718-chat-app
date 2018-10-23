import React from 'react';
import './rooms.css'
import { Route, Switch } from 'react-router-dom';
import Lobby from './lobby';
import Create from './create';
import Chat from './chat';

export default props => {

    const { path } = props.match;
    // console.log("Path:", path);

    // console.log(props);
    return (
        <Switch>
            <Route exact path={path} component={Lobby} />
            <Route exact path={`${path}/create`} component={Create} />
            <Route path={`${path}/:room_id`} component={Chat} />
        </Switch>
    )
}