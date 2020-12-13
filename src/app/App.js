import styles from './App.module.css';
import React from 'react';
import MainContainer from '../components/MainContainer';
import { connect } from 'react-redux';
import { ActionCreator } from '../store/actions/appActions';

function App() {
    return (
        <div className={styles.App}>
            <MainContainer>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </MainContainer>
        </div>
    );
}

const mapStateToProps = (state) => {
  return {
    currMovie: state.currMovie,
    moviesList: state.moviesList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  reset(){
    dispatch(ActionCreator.reset());
  },

});



export default connect(mapStateToProps, mapDispatchToProps)(App);
