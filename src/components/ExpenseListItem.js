import React from 'react'
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import moment from 'moment';
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <div>{amount} - {moment(createdAt).format('D-MMM-YY')}</div>
        <button onClick={()=>{
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)
export default connect()(ExpenseListItem);