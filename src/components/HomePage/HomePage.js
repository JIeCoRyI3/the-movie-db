import React from 'react';
import Header from '../Header/';
import MainContainer from '../MainContainer';
import SearchBar from '../SearchBar/';

function HomePage() {
    return (
        <>
            <Header>
                <SearchBar />
            </Header>
            <MainContainer />
        </>
    );
}

export { HomePage };
