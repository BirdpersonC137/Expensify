import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesTotal from './ExpensesTotal';
const Home = () => (
    <div>
        <ExpensesTotal/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
)

export default Home;