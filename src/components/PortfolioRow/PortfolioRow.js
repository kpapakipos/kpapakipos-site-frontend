import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

function PortfolioRow({ firstText, firstLinkText, firstLink, secondText, secondLinkText, secondLink, thirdText, thirdLinkText, thirdLink, ...rest }) {
  return (
    <Grid container justify='space-around' alignItems='center'>
      <Grid item justify='space-evenly' alignItems='center' style={{ height: 120, backgroundColor: 'lightgray', ...rest }}>
        <Typography>
          {firstText}
        </Typography>
        <Button variant='contained' href={firstLink} target='_blank'>
          {firstLinkText}
        </Button>
        <Typography>
          {secondText}
        </Typography>
        <Button variant='contained' href={secondLink} target='_blank'>
          {secondLinkText}
        </Button>
        <Typography>
          {thirdText}
        </Typography>
        <Button variant='contained' href={thirdLink} target='_blank'>
          {thirdLinkText}
        </Button>
      </Grid>
    </Grid>
  )
}

export default PortfolioRow
