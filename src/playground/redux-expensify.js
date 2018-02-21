import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//////////////////////////////////ACTIONS/////////////////////////////////
//ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt =0}={}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
const setTextFilter = (text="")=>({
    type: 'ADD_TEXT',
    text
})

const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT',
})
const sortByDate = () =>({
    type: 'SORT_BY_DATE',
})
const setStartDate = (date) =>({
    type: 'SET_START_DATE',
    startDate: date
})
const setEndDate = (date)=>({
    type: 'SET_END_DATE',
    endDate: date
})
/////////////////////////////////////////REDUCERS///////////////////////////////////////////////
//Expenses reducer
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

}
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id!==action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense
                }
            })
        default:
            return state;
    }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}
//////////////////////////////////////FILTER/SEARCH/SORT/////////////////////////////////////////////
//get visible expenses
//                                      Filters object destructured for ease
//                                      e.g. to call text insead of filters.text
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }/*filters*/)=>{
    return expenses.filter((expense)=>{
//                             wont filter if NaN             if start date is a number it will
//                                                            check whether the createdAt is greater
//                                                            than the startDate indicated in filter
//                                                            if the startDate is true, then it won't be filterd
//                                                        
        const startDateMatch = typeof startDate!=='number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//      will be filtered out if any of the below are false
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === 'amount') {
            return a.mount < b.amount ? 1: -1;
        }
    })
}
/////////////////////////////////CALLS//////////////////////////////////////////
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 3, createdAt: 1000}));
// const expenseThree = store.dispatch(addExpense({description: 'Car', amount: 130}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1250));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());


const demoState = {
    expenses: [{
        id: 'rwanraworawnruoaw',
        description: 'January Rent',
        note: 'This was the final payment for that location',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

