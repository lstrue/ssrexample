import React from 'react';
// import {Route} from 'react-router-dom';
import Home from './pages/HomePage';
import UsersListPage, {loadData} from './pages/UsersListPage';
import HomePage from './pages/HomePage';

export default [
    {
        ...HomePage,
        path: '/',
        // component: Home,
        exact: true
    },
    {
        ...UsersListPage,
        loadData,
        path: '/users',
        // component: UsersList
    }
]

// export default() => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             {/* <Route exact path="/" component={() => 'hi' } /> */}
//             <Route path="/hi" component={() => 'hi'} />
//             <Route path="/users" component={UsersList} />
//         </div>
//     )
// }