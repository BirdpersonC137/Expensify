import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, setEndDate, setStartDate, sortByDate, sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', note: 'Pay for water usage', amount: 70,createdAt: 1000}))
store.dispatch(addExpense({description: 'Gas Bill', note: 'Pay for gas usage', amount: 50,createdAt: -1000}))
store.dispatch(setTextFilter('bill'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

//add Expense
// text filter
//get visible expenses
ReactDOM.render(<AppRouter />, document.getElementById('app'));

