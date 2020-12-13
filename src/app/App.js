import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from '../components/MainContainer';
import Header from '../components/Header';
import styles from './App.module.css';

function App() {
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header />
                <MainContainer>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </MainContainer>
            </div>
        </BrowserRouter>
    );
}

export default App;
