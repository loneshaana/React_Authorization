import React from 'react';
import { Checkbox } from '@material-ui/core';

const Filter = ({type,filterOnName,filterOnDob,isChecked}) =>{
    return(
        <div>
            <label>username</label>
            <Checkbox onClick={filterOnName} checked={isChecked==='name'}/>
            <label>dob</label>
            <Checkbox onClick={filterOnDob} checked={isChecked==='dob'}/>
        </div>
    )
}

export default Filter;