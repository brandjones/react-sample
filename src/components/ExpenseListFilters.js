import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate} from '../actions/filters';


export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    if(e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
        <div>
          <input
            type='text'
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
          <select
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
          >
            <option value='date'> Date </option>
            <option value='amount'> Amount </option>
          </select>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);



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
