import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import './HomeScreen.scss'

function HomeScreen() {
  return (
    <Paper style={{
      display: 'flex',
      padding: '1em',
      backgroundColor: 'white',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <Typography inline>
        Welcome to my homepage.
      </Typography>
      <Typography>
        I'm a software engineer. I mostly code in Swift and Javascript.
      </Typography>
      <Box flexWrap="nowrap" p={2} style={{
        display: 'inline-flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'flex-start'
      }}>
        <Box mr={1}>
          <Button variant='contained' href='https://www.facebook.com/kpapakipos' target='_blank'>
            <FontAwesomeIcon icon={faFacebook} />
          </Button>
        </Box>
        <Box>
          <Button variant='contained' href='https://www.twitter.com/kpapakipos' target='_blank'>
            <FontAwesomeIcon icon={faTwitter} />
          </Button>
        </Box>
      </Box>
    </Paper >
  )
}

export default HomeScreen
