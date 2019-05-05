import React from 'react';
import {Route} from 'react-router-dom';
import Can from './Can';

const User_Route = ({path,component,loggedInUser,roles}) =>{
    return<Route component={component} />
}

const UserRoute = Can(User_Route);
export default UserRoute;