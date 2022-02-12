import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Main, Profile } from './pages'

import './styles/global.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Main} />
        <Route path='/profile/:id' component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
