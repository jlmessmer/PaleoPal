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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas eget odio at vulputate. Vestibulum erat ex, tincidunt eget urna et, auctor varius nibh. Mauris accumsan et lacus vel interdum. Donec id molestie ipsum, at blandit est. Nulla fermentum massa et nisl tristique, at molestie mauris auctor. In lacus nulla, porta porttitor nunc nec, tincidunt imperdiet nunc. Morbi maximus leo at aliquam volutpat. Maecenas vel velit vitae sapien porta mollis sit amet eget quam. Ut est neque, maximus ac fermentum vitae, ultrices sed justo. Proin nec purus justo. Nullam volutpat commodo ligula, non elementum lorem tempor ut. Nunc tincidunt lacinia est ut porttitor. Duis sagittis mauris id quam maximus, ullamcorper suscipit leo mollis. Praesent viverra tellus a justo consequat lacinia. Morbi maximus ligula quis vulputate molestie.
                </Typography>
                <Typography paragraph align="left">
                  Nunc posuere, ipsum quis facilisis porta, ante ante venenatis odio, eu ornare enim lectus ut metus. Aenean malesuada tortor lorem. Vestibulum dictum mi sem, eget luctus diam posuere nec. Aliquam dignissim lacus eu mattis posuere. Suspendisse eget metus convallis, facilisis sem varius, pretium augue. Integer quis ullamcorper metus. Fusce neque urna, egestas a ornare sodales, consectetur vitae metus. Aenean nec tempus magna, sit amet pellentesque orci. Nam orci arcu, porta mollis sem vel, consequat venenatis mauris. Maecenas ipsum risus, mollis vel dictum eu, posuere in mauris. Praesent vulputate nibh ac viverra congue. Phasellus nec sagittis est.
                </Typography>
                <Typography paragraph align="left">
                  Aliquam sit amet porttitor nunc, quis mollis urna. Nullam blandit, quam vel posuere sollicitudin, est metus laoreet metus, quis tincidunt mi mi quis dolor. Sed quis scelerisque dolor. Mauris aliquam ultrices sagittis. Duis egestas neque dui, vitae dignissim sem fermentum ut. Nulla a commodo sem. Ut ut dapibus erat. Donec interdum mi in nisi convallis gravida. Donec a tincidunt mi. Cras risus ipsum, pulvinar sed magna nec, pellentesque suscipit sapien. Nam quis diam ut nisi pharetra dapibus. Nulla ornare sem eget pretium aliquam. Etiam arcu ipsum, sodales in est laoreet, faucibus malesuada sem. Proin interdum pulvinar erat eget mollis. Maecenas laoreet, felis vitae tincidunt fringilla, sapien metus molestie massa, nec molestie nibh lacus nec massa. Aliquam sollicitudin nec mauris vitae viverra.
                </Typography>
                <Typography paragraph align="left">
                  Curabitur ac mauris dapibus, aliquam purus vel, pellentesque justo. Pellentesque eleifend turpis eu dapibus tristique. Phasellus non nisi scelerisque, suscipit dui et, bibendum dui. Phasellus sed dolor vehicula, dignissim tortor ac, auctor mi. Curabitur efficitur arcu et orci consequat, vel rhoncus quam condimentum. Nullam convallis lorem at lorem condimentum, vitae accumsan eros sollicitudin. Nulla vitae lectus eu leo efficitur feugiat sed in elit. Morbi tincidunt mauris nisl, ut ornare magna cursus a. Fusce eu ante sem. Nunc non tortor velit. Vivamus commodo facilisis ultrices.
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