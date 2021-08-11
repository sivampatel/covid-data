import logo from './logo.svg';
import './App.css';
import { Route, Switch, HashRouter, Redirect } from "react-router-dom"
import View from './View'
import "antd/dist/antd.css";
import process from "process"

const areas = ['state', 'county', 'cbsa', 'country']

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={"/:area/:id"} render={(props) => areas.includes(props.match.params.area) ? <View {...props} /> : <Redirect to="/" /> } />
          <Route from="/bayarea" to="/cbsa/41860" />
          <Route from="/dfw" to="/cbsa/19100" />
          <Route from="/sanjose" to="/cbsa/41940" />
          <Route from="/dallas" to="/county/01047" />
          <Route from="/sf" to="/county/06075" />
          <Route from="/sanmateo" to="/county/06081" />
          <Route render={() => <Redirect to="/country/us" />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
