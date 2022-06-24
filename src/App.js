import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppCustomers from './pages/AppCustomers';
import AppProducts from './pages/AppProducts'
import LatestPurchases from './LatestPurchases';


function App() {
return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/app-customers'>App customers</Link>
            </li>
            <li>
              <Link to='/app-products'>App products</Link>
            </li>
          </ul>
        </nav> 
        <Switch>
          <Route path='/app-customers'>
            <AppCustomers />
          </Route>
          <Route path='/app-products'>
            <AppProducts />
          </Route>
          <Route path='/app-customers/:id'>
            <LatestPurchases />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
