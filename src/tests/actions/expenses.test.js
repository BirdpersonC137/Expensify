import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up remove expense action object', ()=>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })

})
test('should set up edit expense action object', ()=>{
    const action = editExpense('123abc',{note:'123', description:"Testing", createdAt: 1000})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note:'123',
            description: 'Testing',
            createdAt: 1000
        }
    })
})
test('should generate add expense action object', ()=>{
    const expenseData = {description: "Coffee", note: "123", amount: 1000, createdAt:1000} 
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should generate add expense action object with default value', ()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})