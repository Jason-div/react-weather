import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './component/home/Home.jsx'
import Weather from './component/weather/Weather.jsx'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/weather' component={Weather} />

        <Redirect to='/home' />
      </Switch>
      
    </div>
  );
}

export default App;
