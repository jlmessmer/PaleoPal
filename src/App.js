import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Typography
} from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite'

import {
  createMuiTheme,
  ThemeProvider,
  withStyles
} from "@material-ui/core/styles";


import './App.css';

import HomePage from './components/pages/Home'
import SearchPage from './components/pages/Search'

import NavBar from './components/utils/NavBar'


const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2576b7'
    },
    secondary: {
      main: '#aa3b4a'
    }
  }
})


class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path='/search'>
                <SearchPage />
              </Route>
            </Switch>
            <footer className={classes.footer}>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Made with <FavoriteIcon color='secondary' style={{ fontSize: '0.75rem' }} /> in New York City.
            </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                {new Date().getFullYear()}
                {' Jimmy Messmer.'}
              </Typography>
            </footer>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
