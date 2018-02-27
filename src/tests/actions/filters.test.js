import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('expect setStartDate action object to be generated', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('expect setEndDate action object to be generated', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('expect sort by amount action object to be generated', () => {
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
});

test('expect sort by date action object to be generated', ()=>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'})
});

test('expect setTextFilter action object to be generated', () => {
    const action = setTextFilter('bill')
    expect(action).toEqual({
        type: 'ADD_TEXT',
        text: 'bill'
    });
});

test('expect setTextFilter action object to be generated with default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'ADD_TEXT',
        text: ''
    });
});

