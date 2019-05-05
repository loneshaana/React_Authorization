import React from 'react';
import Header from './Header';

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
                    <Header loggedInUser={loggedInUser} />
                    <div style={{
                        marginTop:'10%'
                    }}>You don't have access to view this </div>
                </React.Fragment>
            )
        }
    }
}
export default Can; 