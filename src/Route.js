import React from 'react';
import { BrowserRouter,Switch } from 'react-router-dom'
import Admin from './admin';
import User from './user';
import Header from './Header';
import Route from './CustomRoute';
import Loader from './loader';
import './App.css';
class Routes extends React.Component{
    state ={
        users:[]
    }

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
        }).then(res =>res.json()).then(data =>this.setState(prevState =>{
            console.log('update state')
            return {users:data};
        }))

    }


    render(){
        if(this.state.users.length === 0) return <Loader />
        const loggedInUser = this.state.users[this.state.users.length -2];
        // console.log(loggedInUser);
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