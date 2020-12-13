import React from 'react';
import PropTypes from 'prop-types';

function FilmsContainer(props) {
    return (
        <>
            {props.films.map((Film, index) => (
                <Film key={index} />
            ))}
        </>
    );
}

FilmsContainer.propTypes = {
    films: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export { FilmsContainer };
