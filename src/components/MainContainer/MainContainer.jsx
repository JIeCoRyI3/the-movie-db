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
        let content = <NotFound />;
        if (this.props.films) {
            if (this.props.films.length > 0) {
                content = <FilmsContainer films={this.props.films} />;
            }
        }

        return <main className={styles.mainContainer}>{content}</main>;
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

const mapDispatchToProps = {
    loadData,
};

const withStore = connect(mapStateToProps, mapDispatchToProps);

export default withStore(MainContainer);
