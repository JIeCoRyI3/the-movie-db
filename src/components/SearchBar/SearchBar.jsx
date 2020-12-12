import React from 'react';
import { searchBarContainer, 
    title, 
    searchTitle, 
    underInput, 
    leftSide, 
    leftSideItem, 
    input} from './SearchBar.module.css';

export default function SearchBar () {
    return (
        <div className={ searchBarContainer }>
            <h4 className={ title }>Find your movies</h4>
            <input className={ input } placeholder="Enter movie title or genre"/>
            <div className={ underInput }>
                <div className={ leftSide }>
                    <h5 className={ leftSideItem + ` ` + searchTitle }>Search by</h5>
                    <button className={ leftSideItem + ` btn btn-primary` }>Title</button>
                    <button className={ leftSideItem + ` btn btn-primary` }>Genre</button>
                </div>
                <div>
                    <button className="btn btn-primary">SEARCH</button>
                </div>
            </div>
        </div>
    );
};