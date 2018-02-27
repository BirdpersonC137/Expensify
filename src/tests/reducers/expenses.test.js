import expensesReducer from '../../reducers/expenses';
import moment, { lang } from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]])
});
test('should not remove expense if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

// Should add expense
test('should add an expense', ()=>{
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'Tea',
            note: '',
            amount: 2400,
            description: '',
            createdAt: undefined
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense])
});
// Should edit expense
test('should edit the expense', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates:{
            description: 'Sugar'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe('Sugar')
})
// Should not edit expense if expense not found
test('should not edit the expense', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates:{
            description: 'Milk'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})