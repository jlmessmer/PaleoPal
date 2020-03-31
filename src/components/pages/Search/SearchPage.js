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
      loading: false,
      currentOptions: []
    }
    this.sendRequest = this.sendRequest.bind(this)
  }
  sendRequest(event) {
    let value = event.target.value
    let query = this.props.firebase.getAbbreviationsStartingWith(value)
    this.setState({ 
      loading: true,
      currentOptions: []
     })
    query.get().then((querySnapshot) => {
      let newOptions = []
      querySnapshot.forEach((doc) => {
        let abbrev = doc.data()
        newOptions.push(abbrev)
      })
      this.setState({
        currentOptions: newOptions,
        loading: false
      })
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
                  onChange={this.sendRequest}
                  label="Input abbreviation"
                  helperText="Type the abbreviation as it appears on the page"
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid item xs={12}>
                <AbbreviationTable loading={this.state.loading} abbreviations={this.state.currentOptions} />
              </Grid>
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    )
  }
}

export default withFirebase(SearchPage)