import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import FilmPage from '../components/FilmPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Switch>
                    <Route path={'/'} component={HomePage} exact />
                    <Route path={'/film/:id'} component={FilmPage} exact />
                    <Route path={'*'} component={NotFoundPage} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
