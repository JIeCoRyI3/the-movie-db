import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContainer.module.css';
import FilmsContainer from '../FilmsContainer/';
import { connect } from 'react-redux';
import NotFound from '../NotFound';
import { loadData } from './connect-store';

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

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
    films: PropTypes.arrayOf(PropTypes.shape),
};

const mapStateToProps = (state) => ({
    films: state.app.moviesList,
});

const mapDispatchToProps = {
    loadData,
};

const withStore = connect(mapStateToProps, mapDispatchToProps);

export default withStore(MainContainer);
