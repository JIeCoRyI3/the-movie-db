import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { loadData } from './connect-store';
import MainContainer from '../components/MainContainer';
import LoaderComponent from '../components/LoaderComponent';

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
                        <Route path={'/film/:id'} component={HomePage} exact />
                        <Route path={'*'} component={NotFoundPage} />
                    </Switch>
                    <MainContainer />
                    <Footer />
                </div>
            </BrowserRouter>
        ) : (
            <LoaderComponent />
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
