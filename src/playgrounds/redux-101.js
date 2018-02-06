import {createStore} from 'redux';

// Creates a container for the redux store. This is needed
// to control the state in large, complex production applications.
// It works much like the react store except each component has
// access to the state and is able to manipulate the state without
// calling on a parent container. Create store take a function as its
// first arg and then must set initial state of the application.


const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});


const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions.
// 2. Never change the state or action.

const countReducer = () => (state = {count: 0}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {count: state.count + action.incrementBy};
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {count: state.count - action.decrementBy};
    case 'RESET':
      return {count: 0};
    case 'SET':
      return {count: action.count};
      default:
        return state;
  }
};



const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
 console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count:101}));
