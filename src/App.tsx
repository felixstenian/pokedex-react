import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Main, Profile } from './pages'

import './styles/global.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/pokemon/:name' component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
