import React         from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import LoginPage   from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/HelpPage';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
      <div>
        <Switch>
          <Route path='/'           component={LoginPage} exact={true}/>
          <PrivateRoute path='/dashboard'  component={ExpenseDashBoardPage} />
          <PrivateRoute path='/create'     component={AddExpensePage} />
          <PrivateRoute path='/edit/:id'   component={EditExpensePage} />
          <Route path='/help'       component={HelpPage} />
          <Route                    component={NotFoundPage} />
        </Switch>
      </div>
  </Router>
);


export default AppRouter;
