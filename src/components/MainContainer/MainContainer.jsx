import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.css';
import FilmsContainer from '../FilmsContainer/';
import { connect } from 'react-redux';

class MainContainer extends React.Component {
    render() {
        const { films } = this.props;

        return (
            <main className={styles.mainContainer}>
                {films ? <FilmsContainer films={films} /> : null}
            </main>
        );
    }
}

MainContainer.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
    return {
        films: state.app.moviesList,
    };
};

const withStore = connect(mapStateToProps);

export default withStore(MainContainer);
