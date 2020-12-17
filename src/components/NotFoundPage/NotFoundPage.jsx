import React from 'react';
import Header from '../Header/';
import NotFound from '../NotFound';
import SearchBar from '../SearchBar/';

function NotFoundPage() {
    return (
        <>
            <Header>
                <SearchBar />
            </Header>
            <NotFound />
        </>
    );
}

export default NotFoundPage ;
