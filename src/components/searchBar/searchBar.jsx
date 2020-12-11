import React from 'react';
import './searchBar.css';

export default function SearchBar () {
    return (
        <header>
            <div className="searchBarContainer">
                <h4 className="searchBarContainer_title">Find your movies</h4>
                <input className="searchBarContainer_input" placeholder="Enter movie title or genre"/>
                <div className="searchBarContainer_underInput">
                    <div className="searchBarContainer_leftSide">
                        <h5 className="searchBarContainer_search-title searchBarContainer_leftSide-item">Search by</h5>
                        <button className="btn btn-primary searchBarContainer_leftSide-item">Title</button>
                        <button className="btn btn-primary searchBarContainer_leftSide-item">Genre</button>
                    </div>
                    <div className="searchBarContainer_rightSide">
                        <button className="btn btn-primary">SEARCH</button>
                    </div>
                </div>
            </div>
        </header>
    );
};