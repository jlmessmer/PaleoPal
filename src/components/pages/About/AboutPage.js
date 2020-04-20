import React from 'react'

import {
  CssBaseline, Typography, Container, Grid, Paper
} from '@material-ui/core'

class AboutPage extends React.Component {
  render() {
    // const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <Container>
            <Grid xl={12} justify="start">
              <Paper style={{ marginTop: '2rem', marginBottom: '2rem', padding: '2rem' }}>
                <Typography variant="h3" align="left">About</Typography>
                <hr />
                <Typography paragraph align="left">
                  A major challenge facing all historians of the Middle Ages is making sense of the myriad of scribal abbreviations that are littered all over medieval manuscripts. While there are certain common notations that are easy to remember, it is nearly impossible to commit all of them to memory. That’s where the Amicus Pal&aelig;ograhicorum, or Amplorum for short, comes in. Based on Adriano Cappelli’s excellent work from the 20s, this online resource seeks to aid historians and streamline the process for looking up any unfamiliar scribal abbreviations.
                </Typography>
                <Typography paragraph align="left">
                  Amplorum is a free online resource available to all historians that uses cutting edge web technologies to streamline work with manuscripts. By using our search page, all matching abbreviations that you would normally have to search for by hand in Cappelli will automatically appear in a table below.
                </Typography>
              </Paper>
            </Grid>
          </Container>
        </main >
      </React.Fragment >
    )
  }
}

export default AboutPage