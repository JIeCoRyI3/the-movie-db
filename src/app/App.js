import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import FilmPage from '../components/FilmPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { loadData } from './connect-store';

class App extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return this.props.genres ? (
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
        ) : (
            <h1>Loading</h1>
        );
    }
}

const mapStateToProps = (state) => ({
    genres: state.app.genresList,
});

const mapDispatchToProps = {
    loadData,
};

const withStore = connect(mapStateToProps, mapDispatchToProps);

export default withStore(App);
