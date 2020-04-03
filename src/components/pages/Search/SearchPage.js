import React from 'react'
import {
  Container,
  CssBaseline,
  Grid,
  Typography,
  TextField
} from '@material-ui/core'

import AbbreviationTable from '../../utils/AbbreviationTable'

import { withFirebase } from '../../utils/Firebase'

class SearchPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentAbbrev: ''
    }
    this.updateAbbrev = this.updateAbbrev.bind(this)
  }
  updateAbbrev(event) {
    let value = event.target.value
    this.setState({
      currentAbbrev: value
    })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <Container style={{ minHeight: '100vh', paddingTop: '2rem' }}>
            <Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                  Search for an abbreviation
              </Typography>
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <TextField
                  onChange={this.updateAbbrev}
                  label="Input abbreviation"
                  helperText="Type the abbreviation as it appears on the page"
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid item xs={12}>
                {this.state.currentAbbrev !== '' && <AbbreviationTable currentAbbrev={this.state.currentAbbrev} /> }
              </Grid>
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    )
  }
}

export default withFirebase(SearchPage)