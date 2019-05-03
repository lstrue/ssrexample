import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UsersList';

export default() => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/" component={() => 'hi' } /> */}
            <Route path="/hi" component={() => 'hi'} />
            <Route path="/users" component={UsersList} />
        </div>
    )
}