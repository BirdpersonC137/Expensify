import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
)
const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
)
const EditExpensePage = () => (
    <div>
        This is from Edit expense page
    </div>
)
const HelpPage = () =>(
    <div>
        HELP!
    </div>
)
const NotFoundPage = () =>(
    <div>
        404 - not found - <Link to="/">Go Home</Link>
    </div>
)
const Header = () =>(
    <header>
        <h1>Expensify</h1>
        <Link to="/">Home</Link>|
        <Link to="/create">Add expense</Link>|
        <Link to="/edit">Edit expense</Link>|
        <Link to="/help">Help</Link>
    </header>
)
const routes = (
  <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
  </BrowserRouter>  
);

ReactDOM.render(routes, document.getElementById('app'));

