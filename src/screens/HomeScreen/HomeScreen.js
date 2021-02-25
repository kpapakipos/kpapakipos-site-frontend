import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import './HomeScreen.scss'

function HomeScreen() {
  return (
    <Paper className='topLevel'>
      <Typography inline>
        Welcome to my homepage!
      </Typography>
      <Typography>
        I'm a mobile dev first (Swift and Java), but I also do some web stuff in Javascript and Python.
      </Typography>
      <Box flexWrap="nowrap" p={2} className='socialButtonsContainer'>
        <Box mr={1}>
          <Button variant='contained' href='https://www.facebook.com/kpapakipos' target='_blank'>
            <FontAwesomeIcon icon={faFacebook} />
          </Button>
        </Box>
        <Box mx={1}>
          <Button variant='contained' href='https://www.twitter.com/kpapakipos' target='_blank'>
            <FontAwesomeIcon icon={faTwitter} />
          </Button>
        </Box>
        <Box>
          <Button variant='contained' href='https://www.github.com/kpapakipos' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default HomeScreen
