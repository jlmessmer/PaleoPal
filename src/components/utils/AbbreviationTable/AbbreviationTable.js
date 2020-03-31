import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Paper
} from '@material-ui/core'

import AbbreviationRow from './AbbreviationRow'

class AbbreviationTable extends React.Component {
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
                {this.props.abbreviations.map(abbreviation => {
                  return (
                    <AbbreviationRow abbreviation={abbreviation} key={abbreviation.img_num} />
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
      )
    }
  }
}

export default AbbreviationTable