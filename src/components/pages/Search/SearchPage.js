import React from 'react'
import {
  Container,
  CssBaseline,
  Grid,
  Paper,
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
          <Container style={{ minHeight: '100vh'}}>
            <Grid xl={12}>
              <Paper style={{ marginTop: '2rem', marginBottom: '2rem', padding: '2rem' }}>
                <Typography variant="h3" align="left">Search</Typography>
                <hr />
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <TextField
                    onChange={this.updateAbbrev}
                    label="Input abbreviation"
                    helperText="Type the abbreviation as it appears on the page"
                  />
                </Grid>
                <Grid>
                  <Grid item xs={12}>
                    {this.state.currentAbbrev !== '' && <AbbreviationTable currentAbbrev={this.state.currentAbbrev} />}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    )
  }
}

export default withFirebase(SearchPage)