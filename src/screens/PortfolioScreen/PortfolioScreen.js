import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import './PortfolioScreen.scss'

function PortfolioScreen() {
  return (
    <Paper className='root'>
      <Grid container justify='space-around' alignItems='center'>
        <Grid item justify='space-evenly' alignItems='center' style={{ height: 120, backgroundColor: 'lightgray' }}>
          <Typography>
            My first programming project was Daylight, an Android app for reporting corrupt officials.
          </Typography>
          <Button variant='contained' href='' target='_blank'>
            Daylight
          </Button>
        </Grid>
        <Grid item justify='space-evenly' alignItems='center' style={{ backgroundColor: 'lightgreen' }}>
          <Typography>
            Lorem Ipsum.
          </Typography>
          <Button variant='contained' href='' target='_blank'>
            Project Lorem
          </Button>
        </Grid>
        <Grid item justify='space-evenly' alignItems='center' style={{ backgroundColor: 'lightgreen' }}>
          <Typography>
            Lorem Ipsum.
          </Typography>
          <Button variant='contained' href='' target='_blank'>
            Kashin
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default PortfolioScreen
