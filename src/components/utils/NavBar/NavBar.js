import React from 'react'

import { Link } from 'react-router-dom'

import { CssBaseline, AppBar, Toolbar, Button } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});


class NavBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Button color='inherit' component={Link} to='/'>
                PaleoPal
              </Button>
              <span className={classes.title} />
              <Button color="inherit" component={Link} to='/search'>Search</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Credits</Button>
            </Toolbar>
          </AppBar>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(NavBar)