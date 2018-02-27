import filtersReducer from '../../reducers/filters';
import moment from 'moment';
test('should setup default filter values', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', ()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', ()=>{
    const state = filtersReducer(undefined, {type: 'ADD_TEXT', text:'bill'});
    expect(state.text).toBe('bill');
});

test('should set startDate filter', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: 10000});
    expect(state.startDate).toBe(10000);
});

test('should set endDate filter', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: 10000});
    expect(state.endDate).toBe(10000);
});