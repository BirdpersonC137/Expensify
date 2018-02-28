import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import EditExpense from '../components/EditExpense';
import AddExpensePage from '../components/AddExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/create" component={AddExpense}/>
                <Route path="/edit/:id" component={EditExpense}/>
                <Route path="/help" component={Help}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>  
)

export default AppRouter