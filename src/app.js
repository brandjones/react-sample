import React            from 'react';
import ReactDOM         from 'react-dom';
import { Provider }     from 'react-redux';
import AppRouter        from './routers/AppRouter';
import configureStore   from './store/configureStore';

import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({
  description: 'Water Bill',
  note: 'First Month Water Bill',
  amount: 17900,
  createdAt: 3005
}));



store.dispatch(addExpense({
  description: 'Rent',
  note: '2 Months Security Deposit',
  amount: 1090500,
  createdAt: 1000
}));


store.dispatch(addExpense({
  description: 'Gas Bill',
  note: 'First Month Gas Bill',
  amount: 7300,
  createdAt: 3001
}));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.dir(visibleExpenses);
});


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));


// React does not handle too many components needing access
// to props. It's not that it can't its just that the components
// will not be reusable which is a core feature of react. In order,
// to maintain the state so all components can access it I need to install
// redux which is a state container. Redux does not naturally connect
// to react which is why I have to install the react-redux library.


// The connect function takes the redux store or the state I want to
// access and the second function takes the actual component I want to
// pass the state to, in this case ExpenseList.

// I created a variable called mapStateToProps (which is convention) and pass it in to the
// the connect function which returns the state object passed from the
// redux store. Then, finally I have access to the state on the props object
// on the component ExpenseList.

// THIS PAGE ***

// The Provider is a HIGHER ORDER COMPONENT that passes the state to all of the
// components within in it. Passes AppRouter which in turn holds all the other
// components.
