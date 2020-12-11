import React from 'react';
import './currentFilmDescription.css';

export default function CurrentFilmDescription () {
    return (
        <header>
           <div className="currentFilmContainer">
            <img className="currentFilmContainer_poster" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" alt="what's wrong"/>
            <div className="currentFilmContainer_detailsContainer">
                <div className="currentFilmContainer_detailsContainer-titleContainer">
                    <h4 className="currentFilmContainer_detailsContainer-titleContainer-title">The Mandalorian</h4>
                    <h4 className="currentFilmContainer_detailsContainer-titleContainer-rating">8.5</h4>
                </div>
                <div className="currentFilmContainer_detailsContainer-descriptionContainer">
                    <h5 className="currentFilmContainer_detailsContainer-descriptionContainer-year">2019</h5>
                    <h5 className="currentFilmContainer_detailsContainer-descriptionContainer-description">After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.</h5>
                </div>
            </div>
        </div> 
        </header>
        
    );
};