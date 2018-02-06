import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = (expense) => {
    this.props.removeExpense({ id: this.props.expense.id});
    this.props.history.push('/');
  };
  render () {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}> Remove </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispactch(removeExpense(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);



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


// $$%^% this

// In the mapStateToProps function of course I take the function and pass it into
// the connect function, at which point I pass in two paramenters the state and props
// object and then return an object with named expenses. I then run the find method
// to check for matching ids of the objects already inside of the array. I then
// have access to it in the component to do with it as I please.
