import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../views/home/home';
import Login from '../views/login/login';


export default function RouteView() {
    return (
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Login}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/home' exact component={Home}></Route>
            </div>
          </BrowserRouter>
    )
}

