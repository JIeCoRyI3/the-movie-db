import React from 'react';
import styles from './App.module.css';
import MainContainer from '../components/MainContainer';
import { connect } from 'react-redux';
import { ActionCreator } from '../store/actions/appActions';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import CurrentFilmDescription from '../components/CurrentFilm';

function App() {
    return (
        <>
            <CurrentFilmDescription />
            <SearchBar />
            <div className={styles.App}>
                <MainContainer>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </MainContainer>
            </div>
            <Footer />
        </>
    );
}

const mapStateToProps = (state) => {
  return {
    currMovie: state.currMovie,
    moviesList: state.moviesList,
  };
};

const mapDispatchToProps = {
    reset: ActionCreator.reset
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
