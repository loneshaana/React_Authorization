import React from 'react';

const Should = ({loggedInUser,roles,children}) =>{
    if(loggedInUser === undefined) return <React.Fragment />
    if(roles.includes(loggedInUser.role)) return <React.Fragment>{children}</React.Fragment>
    else return <React.Fragment/>
}

export default Should;