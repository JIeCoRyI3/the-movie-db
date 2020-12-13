import React from 'react';
import Header from '../Header/';
import NotFound from '../NotFound';
import SearchBar from '../Header/Mocks/MockSearchBar';

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

export { NotFoundPage };
