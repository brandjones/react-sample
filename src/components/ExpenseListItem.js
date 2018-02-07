import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
      <Link to={`/edit/${id}`}>
        <h3> {description} </h3>
      </Link>
      <p>
        { numeral(amount / 100).format('$0,0.00') } -
        { moment(createdAt).format('MMMM Do, YYYY') }
      </p>
    </div>
);




export default ExpenseListItem;



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

// **** THIS COMPONENT

// To delete an item I need to call connect to get access to the dispatch function(which sends an action to the redux store)
// then I need to call the dispatch function pass in an action generator and pass in the appropriate prop.
