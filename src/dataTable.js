import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Filter from './Filter';

const SimpleTable = (props) =>{
    const {data,filterOnName,filterOnDob,isChecked} = props;
    return <Paper>
            <Filter filterOnDob={filterOnDob} filterOnName={filterOnName} isChecked={isChecked}/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>username</TableCell>
                        <TableCell>dob</TableCell>
                        <TableCell align="right">role</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(item =>(
                        <TableRow id={item.id}>
                            <TableCell component="th" scope="row">{item.username}</TableCell>
                            <TableCell component="th" scopre="row">{item.dob}</TableCell>
                            <TableCell align="right">{item.role}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
    </Paper>
}

export default SimpleTable;