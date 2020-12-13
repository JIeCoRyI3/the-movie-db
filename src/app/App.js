import React from 'react';
import styles from './App.module.css';
import MainContainer from '../components/MainContainer';
import Footer from '../components/Footer';
import CurrentFilmDescription from '../components/CurrentFilm';

function App() {
    return (
        <>
            <CurrentFilmDescription />
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

export default App;
