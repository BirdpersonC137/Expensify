import React from 'react';
import {shallow} from 'enzyme';
import {EditExpense} from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let  editExpense, history, wrapper, removeExpense;
beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpense 
        history={history} 
        editExpense={editExpense} 
        removeExpense={removeExpense}
        expense={expenses[1]}/>)
})
test('should render EditExpense', ()=>{
    expect(wrapper).toMatchSnapshot();
})
test('should handle editExpense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1])
})
test('should handle removeExpense', ()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenCalledWith({id: expenses[1].id})
})