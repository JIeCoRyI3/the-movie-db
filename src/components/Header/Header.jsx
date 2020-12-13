import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { MockFilmInfo } from './Mocks/MockFilmInfo';
import { MockSearchBar } from './Mocks/MockSearchBar';
import NotFound from '../NotFound/index';
import styles from './Header.module.css';

function Header() {
    return (
        <section className={styles.headerComponent}>
            <header className={styles.header}>
                <h1 className={styles.mainHeading}>netflixroulette</h1>
                <Route
                    path="/film"
                    render={() => (
                        <Link to="/" className={'btn btn-primary'}>
                            go back
                        </Link>
                    )}
                />
            </header>
            <div className={styles.headerAdditional}>
                <Switch>
                    <Route path="/" component={MockSearchBar} exact />
                    <Route path="/film" component={MockFilmInfo} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </section>
    );
}

export { Header };
