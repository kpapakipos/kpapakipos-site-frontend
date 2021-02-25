import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Grid, Paper } from '@material-ui/core'
import React from 'react'
import './PortfolioScreen.scss'

function PortfolioScreen() {
  return (
    <Paper>
      <Grid container>
        <Grid item>
          <Box className='gridItem'>
            <Button variant='contained' href='' target='_blank'>
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
          </Box>
        </Grid>
        <Grid container>
          <Grid item>
            <Button variant='contained' href='' target='_blank'>
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default PortfolioScreen
