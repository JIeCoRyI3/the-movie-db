import React from 'react';
import Header from '../Header/';
import SearchBar from '../SearchBar/';
import { Route, Switch } from 'react-router';
import CurrentFilmDescription from '../CurrentFilm/CurrentFilmDescription';

function HomePage() {
    return (
        <>
            <Header>
                <Switch>
                    <Route path={'/'} component={SearchBar} exact />
                    <Route
                        path={'/film/:id'}
                        component={CurrentFilmDescription}
                        exact
                    />
                </Switch>
            </Header>
        </>
    );
}

export { HomePage };
