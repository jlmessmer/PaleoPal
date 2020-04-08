import React from 'react'

import {
  CssBaseline, Typography, Container, Grid, Button, Card, CardContent
} from '@material-ui/core'

import {
  Link
} from 'react-router-dom'

import { withStyles } from "@material-ui/core/styles";

import logo from '../../../assets/logo.png'

const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  mainIcon: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
      paddingRight: '2rem;'
    }
  },
  mainText: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    }
  },
  mainButtons: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'flex-start',
    }
  }
});

class HomePage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classes.heroContent}>
            <Grid container maxWidth="sm" spacing={2} justify="center">
              <Grid className={classes.mainIcon} item xs={12} sm={6} md={4}>
                <img src={logo} alt='Amplorum logo' />
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <Typography className={classes.mainText} style={{overflowWrap: 'break-word' }} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                  Amicus Pal&aelig;ographicorum
              </Typography>
                <Typography className={classes.mainText}  variant="h5" align="left" color="textSecondary" paragraph>
                  Crush the Latin abbreviations that you don't recognize with Amplorum
              </Typography>
                <div className={classes.heroButtons}>
                  <Grid container className={classes.mainButtons} spacing={2}>
                    <Grid item>
                      <Button variant="contained" color="primary" component={Link} to='/search'>
                        Search Now
                  </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Learn More
                  </Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              <Grid item key='fast' xs={12} sm={6} md={4}>
                <Card className={classes.card} variant='outlined'>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Fast
                  </Typography>
                    <Typography>
                      Our web application iszing-fast, so you can decipher an abbreviation in mere seconds.
                  </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key='free' xs={12} sm={6} md={4}>
                <Card className={classes.card} variant='outlined'>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Free
                  </Typography>
                    <Typography>
                      The Amicus Pal&aelig;ographicorum (or Amplorum) is, and always will be, free to use for historians. We want to be as accessible to possible to all researchers.
                  </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key='simple' xs={12} sm={6} md={4}>
                <Card className={classes.card} variant='outlined'>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Simple
                  </Typography>
                    <Typography>
                      We built our application to be as simple to use as possible, so you don't have to waste time learning how to use Amplorum.
                  </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main >
      </React.Fragment >
    )
  }
}

export default withStyles(styles)(HomePage)