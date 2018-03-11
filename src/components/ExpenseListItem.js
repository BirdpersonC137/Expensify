import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <div>
        {numeral(amount).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do YYYY')}</div>
    </div>
)
export default ExpenseListItem;