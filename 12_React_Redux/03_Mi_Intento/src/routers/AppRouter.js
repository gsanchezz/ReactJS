import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CreateExpense from '../components/CreateExpense'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import Help from '../components/Help'
import PageNotFound from '../components/PageNotFound'
import EditExpense from '../components/EditExpense';

export default () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/createExpense" component={CreateExpense} />
                <Route path="/help" component={Help} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)