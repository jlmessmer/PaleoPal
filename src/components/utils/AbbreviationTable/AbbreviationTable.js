import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  CircularProgress,
  Paper
} from '@material-ui/core'

import AbbreviationRow from './AbbreviationRow'

import { withFirebase } from '../Firebase'

class AbbreviationTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 0,
      pageStarts: {

      },
      loading: false,
      currentOptions: [],
      last: undefined
    }

    this.changePage = this.changePage.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentAbbrev !== this.props.currentAbbrev) {
      let query = this.props.firebase.getAbbreviationsStartingWith(this.props.currentAbbrev, 0)
      this.setState({
        loading: true,
        currentOptions: [],
        page: 0
      })
      query.get().then((querySnapshot) => {
        let newOptions = querySnapshot.docs.slice(0, querySnapshot.docs.length - 1).map(doc => doc.data())
        let first = querySnapshot.docs[0]
        let last = querySnapshot.docs[querySnapshot.docs.length - 1]
        this.setState({
          currentOptions: newOptions,
          loading: false,
          last: last,
          pageStarts: {
            0: first,
            1: last
          }
        })
      })
    }
  }

  changePage(event, newPage) {
    if (this.state.currentOptions.length >=  25) {
      let query = this.props.firebase.getAbbreviationsStartingWith(this.props.currentAbbrev, this.state.pageStarts[newPage])
      let nextPage = newPage + 1
      this.setState({ 
        loading: true,
        currentOptions: [],
        page: newPage
       })
      query.get().then((querySnapshot) => {
        let newOptions = querySnapshot.docs.slice(0, querySnapshot.docs.length - 1).map(doc => doc.data())
        let last = querySnapshot.docs[querySnapshot.docs.length - 1]
        let newPageIndex = Object.assign({}, this.state.pageStarts)
        newPageIndex[nextPage] = last
        this.setState({
            currentOptions: newOptions,
            loading: false,
            pageStarts: newPageIndex
          })
      })  
    }
  }

  render() {
    if (this.props.loading) {
      return (
        <CircularProgress />
      )
    } else {
      return (
        <React.Fragment>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Abbreviation Image
                        </TableCell>
                  <TableCell>
                    Scribal Abbreviation
                        </TableCell>
                  <TableCell>
                    Proper Transcription
                        </TableCell>
                  <TableCell>
                    Century
                        </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.currentOptions.map(abbreviation => {
                  return (
                    <AbbreviationRow abbreviation={abbreviation} key={abbreviation.img_num} />
                  )
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    count={-1}
                    onChangePage={this.changePage}
                    page={this.state.page}
                    rowsPerPage={this.state.currentOptions.length}
                    rowsPerPageOptions={[]}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </React.Fragment>
      )
    }
  }
}

export default withFirebase(AbbreviationTable)