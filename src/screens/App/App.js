import { Paper, Tabs } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ResumeScreen from 'screens/ResumeScreen/ResumeScreen'
import HomeScreen from 'screens/HomeScreen/HomeScreen'
import PortfolioScreen from 'screens/PortfolioScreen/PortfolioScreen'
import LinkTab from '../../components/LinkTab'
import './App.scss'

function App () {

  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'production') {
    var axe = require('react-axe');
    axe(React, 1000);
  }

  return (
    <BrowserRouter>
      <Paper className='page'>
        <Tabs variant='fullWidth' style={{ backgroundColor: 'rgb(221, 222, 236)' }}>
          <LinkTab label='Home' href='/' />
          <LinkTab label='Resume' href='/resume' />
          <LinkTab label='Portfolio' href='/portfolio' />
        </Tabs>
        <Switch>
          <Route path='/resume'>
            <ResumeScreen />
          </Route>
          <Route path='/portfolio'>
            <PortfolioScreen />
          </Route>
          <Route path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </Paper>
    </BrowserRouter>
  )
}

export default App
