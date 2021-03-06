import React from 'react';
import { BrowserRouter,Switch } from 'react-router-dom'
import Admin from './admin';
import User from './user';
import Header from './Header';
import Route from './CustomRoute';
import Loader from './loader';
import {lifecycle,withState,compose} from 'recompose';
import './App.css';

class Routes extends React.Component{
    render(){
        const {loggedInUser} = this.props;
        if(loggedInUser === undefined ) return <Loader />;
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/admin" component={() =><Admin {...this.props}/>} loggedInUser={loggedInUser} roles={["admin"]} />
                    <Route path="/user" component={() => <User {...this.props}/>} loggedInUser={loggedInUser} roles={["user"]} />
                    <Header loggedInUser={loggedInUser}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

function componentDidMount(){
    /*
        mock the api using the following command
        json-server --watch db.json -d 1000
        {
        "id": 2,
        "username":"shaana",
        "role":"user",
        "dob":"19-03-1996"
      },
    */
    const url = 'http://localhost:5000/users';
    const {store:{updateState}} = this.props;
    fetch(url,{
        headers:{
            method:'GET'
        }
    }).then(res =>res.json()).then(data =>{
        updateState('users',data)
        this.props.setLoggedIn(data[0]);
    });
    const data = [{
        "id": 2,
        "username":"shaana",
        "role":"user",
        "dob":"19-03-1996"
      }];
    updateState('users',data);
    this.props.setLoggedIn(data[0]);

}

export default compose(
    withState('loggedInUser','setLoggedIn',undefined),
    lifecycle({componentDidMount})
)(Routes)