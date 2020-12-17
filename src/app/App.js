import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';

function App() {
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Switch>
                    <Route path={'/'} component={HomePage} exact />
                    <Route path={'/film/:id'} component={HomePage} exact />
                    <Route path={'*'} component={NotFoundPage} />
                </Switch>
                <MainContainer />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
