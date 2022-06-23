import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppCustomers from './AppCustomers';
import AppProducts from './AppProducts'


function App() {
return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/appcustomers'>App customers</Link>
            </li>
            <li>
              <Link to='/appproducts'>App products</Link>
            </li>
          </ul>
        </nav> 
        <Switch>
          <Route path='/appcostumers'>
            <AppCustomers />
          </Route>
          <Route path='/appproducts'>
            <AppProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
