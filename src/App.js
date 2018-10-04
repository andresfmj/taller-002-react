import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation/Navigation';
import Cursos from './containers/Courses/Courses';
import Usuarios from './containers/Users/Users';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation navs={[
                        {id: 1, url: '/courses', label: 'Cursos'},
                        {id: 2, url: '/users', label: 'Usuarios'}
                    ]} />
                    <Switch>
                        <Route path='/courses' component={Cursos} />
                        <Route path='/users' component={Usuarios} />
                        <Redirect from='/all-courses' to='/courses' />
                        <Route render={() => <h3>404 Pagina no encontrada</h3>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
