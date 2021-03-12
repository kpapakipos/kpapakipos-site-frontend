import { Tabs } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeScreen from 'screens/HomeScreen/HomeScreen'
import PortfolioScreen from 'screens/PortfolioScreen/PortfolioScreen'
import ResumeScreen from 'screens/ResumeScreen/ResumeScreen'
import LinkTab from '../../components/LinkTab/LinkTab'
import './App.scss'

function App() {

  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'production') {
    var axe = require('react-axe');
    axe(React, 1000);
  }

  return (
    <BrowserRouter>
      <Tabs variant='fullWidth' className='navBar' textColor='white'>
        <LinkTab label={<span className='navBarTab'>Home</span>} href='/' />
        <LinkTab label={<span className='navBarTab'>Resume</span>} href='/resume' />
        <LinkTab label={<span className='navBarTab'>Portfolio</span>} href='/portfolio' />
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
    </BrowserRouter>
  )
}

export default App
