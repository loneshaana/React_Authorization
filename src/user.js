import React from 'react';
import SimpleTable from './dataTable';

function getData(users,type){
    if(users === undefined)return [];
    return users.filter(user => user.role === type);
}

const User = ({store}) =>{
    const {state:{users,isChecked}} = store;
    const {filterOnName,filterOnDob} = store;
    return <React.Fragment>
        <div className="flex-equal">
            <h1>users</h1>
            <SimpleTable data={getData(users,'user')} filterOnName={filterOnName} filterOnDob={filterOnDob} isChecked={isChecked}/>
        </div>
    </React.Fragment>
}

export default User;