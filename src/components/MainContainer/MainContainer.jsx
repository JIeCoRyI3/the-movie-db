import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.css';
import FilmsContainer from '../FilmsContainer/';
import { connect } from 'react-redux';
import NotFound from '../NotFound';
import { loadData } from './connect-store';

class MainContainer extends React.Component {
    render() {
        return (
            <main className={styles.mainContainer}>
                {this.props.films && this.props.films.length ? (
                    <FilmsContainer films={this.props.films} />
                ) : (
                    <NotFound />
                )}
            </main>
        );
    }
}

MainContainer.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            poster_path: PropTypes.string,
            genres_ids: PropTypes.arrayOf(PropTypes.number),
            release_date: PropTypes.string,
            title: PropTypes.string.isRequired,
        })
    ),
};

const mapStateToProps = (state) => ({
    films: state.app.moviesList,
});

const mapDispatchToProps = {
    loadData,
};

const withStore = connect(mapStateToProps, mapDispatchToProps);

export default withStore(MainContainer);
