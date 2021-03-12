import React from 'react'

function LinkTab({ , ...rest }) {
  return (
    <Grid item justify='space-evenly' alignItems='center' style={{ height: 120, backgroundColor: 'lightgray' }}>
      <Typography>
        My first programming project was Daylight, an Android app for reporting corrupt officials.
      </Typography>
      <Button variant='contained' href='' target='_blank'>
        Daylight
      </Button>
    </Grid>
  )
}

export default LinkTab
