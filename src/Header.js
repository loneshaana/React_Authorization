import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom';
import Should from './Should';
const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

function DenseAppBar(props) {
  const { classes,loggedInUser } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Welcome {loggedInUser.username}
          </Typography>
          <Typography variant="h6" color="inherit">

          <Should roles={["user"]} loggedInUser={loggedInUser}>
            <NavLink to="/user">User</NavLink>
          </Should>

          </Typography>
          <Typography variant="h6" color="inherit">
            <Should roles={["admin"]} loggedInUser={loggedInUser}>
                <NavLink to="/admin">Admin</NavLink>
            </Should>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);

