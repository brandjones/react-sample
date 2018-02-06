import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import expenses from '../test/fixtures/expenses';

export const ExpenseList = (props) =>  {
  return (
    <div>
      {
        props.expenses.length === 0 ? (
          <p> No expenses </p>
        ) : (
            props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id}{...expense}/>;
            })
          )
      }
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};


export default connect(mapStateToProps)(ExpenseList);

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
