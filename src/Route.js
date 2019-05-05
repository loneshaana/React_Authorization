import React from 'react';
import { BrowserRouter,Switch } from 'react-router-dom'
import Admin from './admin';
import User from './user';
import Header from './Header';
import Route from './CustomRoute';
import Loader from './loader';
import './App.css';

class Routes extends React.Component{
    componentDidMount(){
        /*
            mock the api using the following command
            json-server --watch db.json -d 1000
        */
        const url = 'http://localhost:5000/users';
        fetch(url,{
            headers:{
                method:'GET'
            }
        }).then(res =>res.json()).then(data =>{
            const {store:{updateState}} = this.props;
            updateState('users',data)
        });
    }


    render(){
        const {store:{state:{users}}} = this.props;
        if(users === undefined || users.length === 0 )return <Loader />;
        const loggedInUser = users[users.length -2];
        /*
            Expirementing with react state
        */
        // const rou = this.props.store.readOnly();
        // rou.Author = "Shaana";
        // users[0].username= 'something';
        // rou.users[0].username = 'Anwar';
        // rou.users[0].role = 'admin';
        // console.log(rou);
        // console.log(users)
        

        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/admin" component={Admin} loggedInUser={loggedInUser} roles={["admin"]} />
                    <Route path="/user" component={User} loggedInUser={loggedInUser} roles={["user"]} />
                    <Header loggedInUser={loggedInUser}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;