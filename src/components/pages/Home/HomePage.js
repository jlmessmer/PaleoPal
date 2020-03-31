import React from 'react'

import {
  CssBaseline, Typography, Container, Grid, Button, Card, CardContent
} from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";

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
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                PaleoPal
            </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Crush the Latin abbreviations that you don't recognize with PaleoPal!
            </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
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
            </Container>
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
                      Our web application is blazing-fast, so you can decipher an abbreviation in mere seconds.
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
                      PaleoPal is, and always will be, free to use for historians. We want to be as accessible to possible to all researchers.
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
                      We built our application to be as simple to use as possible, so you don't have to waste time learning how to use PaleoPal.
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