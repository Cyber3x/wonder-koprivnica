import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import LocationsPage from './pages/LocationsPage'
import LocationPage from './pages/LocationPage'
import RoutesPage from './pages/RoutesPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/locations' component={LocationsPage} />
        <Route exact path='/location/:id' component={LocationPage} />
        <Route exact path='/routes' component={RoutesPage} />
        <Route path='/' component={LandingPage} />
      </Switch>
    </Router>
  )
}

export default App
