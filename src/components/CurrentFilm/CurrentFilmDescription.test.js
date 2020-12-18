import React from 'react';
import { shallow, mount } from 'enzyme';
import { CurrentFilmDescription } from './CurrentFilmDescription';

const match = {
    params: {
        id: 602211,
    },
};

const history = {
    push() {
        return 1;
    },
};

describe('<CurrentFilmDescription/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <CurrentFilmDescription history={history} match={match} />
        );
    });

    afterEach(() => {
        wrapper = null;
    });

    it('should render', () => {
        const component = shallow(
            <CurrentFilmDescription history={history} match={match} />
        );
        expect(component).toMatchSnapshot();
    });

    it('should be called getMovie', () => {
        const instance = wrapper.instance();

        const spy = jest.spyOn(instance, 'getMovie');
        instance.componentDidMount();

        expect(instance.getMovie).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('shoud be called getGenres', () => {
        const filmData = {
            genres: [{ name: '1' }, { name: '2' }, { name: '3' }],
        };
        const instance = wrapper.instance();

        const spy = jest.spyOn(instance, 'getGenres');
        instance.getGenres(filmData);

        expect(instance.state.genres).toBe('1, 2, 3');
        spy.mockRestore();
    });

    it('should be called getMovies after update', () => {
        const instance = wrapper.instance();
        const prevProps = {
            match: {
                params: {
                    id: 602211222,
                },
            },
        };

        const spy = jest.spyOn(instance, 'getMovie');
        instance.componentDidUpdate(prevProps);

        expect(instance.getMovie).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('should return date', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'getDate');
        instance.state.filmData = {
            release_date: '2002-08-28',
        };

        expect(spy()).toBe('28.08.2002');
        spy.mockRestore();
    });

    it('should handle error poster', () => {
        const instance = wrapper.instance();
        const mock = jest.fn()
        instance.props = {isPosterLoad: mock()}
        jest.spyOn(instance,'errorPosterHandler');
        wrapper.find('#poster').simulate('error');
        expect(mock).toHaveBeenCalled();
    })
});
