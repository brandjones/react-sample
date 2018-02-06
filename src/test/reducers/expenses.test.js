import expensesReducers from '../../reducers/expenses';
import moment from 'moment';
import { expenses } from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducers(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: 'Yes!',
    createdAt: 20000,
    amount: 295
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});


test('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };

  const state = expensesReducers(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      amount
    }
  };

  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});