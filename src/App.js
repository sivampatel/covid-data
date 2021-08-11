import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"
import View from './View'
import "antd/dist/antd.css";

function App() {
  let areas = ['state', 'county', 'cbsa', 'country']
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/:area/:id"} render={(props) => areas.includes(props.match.params.area) ? <View {...props} /> : <Redirect to="/" /> } />
          <Route render={() => <Redirect to="/country/us" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
