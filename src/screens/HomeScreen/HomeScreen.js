import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import './HomeScreen.scss'

function HomeScreen() {
  return (
    <div className='topLevel'>
      <Typography inline>
        Welcome to my homepage!
      </Typography>
      <Typography>
        I'm a mobile dev first (Swift on iOS and Java on Android), but I'm learning to make websites in Javascript and Python.
      </Typography>
      <Box flexWrap="nowrap" p={2} className='socialButtonsContainer'>
        <Box>
          <Button variant='contained' href='https://www.github.com/kpapakipos' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default HomeScreen
