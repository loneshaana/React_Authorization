import React from 'react';
import SimpleTable from './dataTable';

function getData(users,type){
    if(users === undefined)return [];
    return users.filter(user => user.role === type);
}
const Admin = ({store}) =>{
    const {state:{users,isChecked}} = store;
    const {filterOnName,filterOnDob} = store;
    return <React.Fragment>
        <h1 style={{
            marginTop:'10%'
        }}> Admin Panel</h1>
        <SimpleTable isChecked={isChecked} data={getData(users,'admin')} filterOnDob={filterOnDob} filterOnName={filterOnName} />
    </React.Fragment>
}

export default Admin;