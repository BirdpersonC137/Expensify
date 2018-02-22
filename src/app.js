import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, setEndDate, setStartDate, sortByDate, sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { setTimeout } from 'timers';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', note: 'Pay for water usage', amount: 700,createdAt: 1000}))
store.dispatch(addExpense({description: 'Gas Bill', note: 'Pay for gas usage', amount: 80000,createdAt: 1001}))
store.dispatch(addExpense({description: 'Rent', note: 'Pay for gas usage', amount: 1050,createdAt: 1002}))

// setTimeout(()=>{
//     store.dispatch(setTextFilter('water'))
// }, 3000)
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));

