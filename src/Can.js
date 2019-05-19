import React from 'react';
import Header from './Header';
import {Redirect} from 'react-router-dom';
function Can(WrappedComponent){
    return class extends React.Component{
        render(){
            const{loggedInUser,roles} = this.props;
            if(roles.includes(loggedInUser.role))
                return(
                    <React.Fragment>
                        <Header loggedInUser={loggedInUser} />
                        <WrappedComponent  {...this.props} />
                    </React.Fragment>
                )
            return (
                <React.Fragment>
                    <Redirect to="/" />
                </React.Fragment>
            )
        }
    }
}
export default Can; 