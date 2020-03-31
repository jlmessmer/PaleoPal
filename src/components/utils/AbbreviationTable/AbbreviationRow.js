import React from 'react'

import { withFirebase } from '../Firebase'
import { 
  TableRow,
  TableCell,
  CircularProgress 
} from '@material-ui/core'

class AbbreviationRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imgUrl: '',
      loading: true
    }
  }

  componentDidMount() {
    let imgRef = this.props.firebase.getImageUrl(this.props.abbreviation.img_num)
    imgRef.getDownloadURL().then((url) => {
      this.setState({
        imgUrl: url,
        loading: false
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <TableRow key={this.props.abbreviation.img_num}>
          <TableCell>
            {this.state.loading && <CircularProgress />}
            {!this.state.loading && <img src={this.state.imgUrl} alt='scribal abbreviation' />}
          </TableCell>
          <TableCell>{this.props.abbreviation.text}</TableCell>
          <TableCell>{this.props.abbreviation.transcription}</TableCell>
          <TableCell>{this.props.abbreviation.century}</TableCell>
        </TableRow>
      </React.Fragment>
    )
  }
}

export default withFirebase(AbbreviationRow)