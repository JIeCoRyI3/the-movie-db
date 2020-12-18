import React from 'react';
import { FilmCard } from './FilmCard';
import { shallow } from 'enzyme';

const props = {
    poster_path: 'poster',
    title: 'title text',
    release_date: 'date',
    genres: ['genres'],
    id: '123',
    location: {
        search: '?searchBy=genreOrTitle&input=adv&sortBy=rating&sortType=asc',
    },
    genre_ids: [35, 80, 53],
    history: {
        push() {
            return 1;
        },
    },
};

describe('handle route', () => {
    it('shoud call handleRoute', () => {
        const wrapper = shallow(<FilmCard {...props} />);
        const instance = wrapper.instance();

        jest.spyOn(instance, 'handleRoute');

        instance.handleRoute();

        expect(instance.handleRoute).toHaveBeenCalled();
    });

    it('should use another branch', () => {
        const props = {
            poster_path: 'poster',
            title: 'title text',
            release_date: 'date',
            genres: ['genres'],
            id: undefined,
            location: {
                search:
                    '?searchBy=genreOrTitle&input=adv&sortBy=rating&sortType=asc',
            },
            genre_ids: [35, 80, 53],
            history: {
                push() {
                    return 1;
                },
            },
        };
        const wrapper = shallow(<FilmCard {...props} />);
        const instance = wrapper.instance();

        jest.spyOn(instance, 'handleRoute');

        instance.handleRoute();

        expect(instance.handleRoute).toHaveBeenCalled();
    });
});

describe('<FilmCard>', () => {
    let wrapper;

    const props = {
        poster_path: 'poster',
        title: 'title text',
        release_date: '2323-20-20',
        genres: ['genres', 'genres', 'genres'],
        genre_ids: [1, 2, 3, 4],
    };

    beforeEach(() => {
        wrapper = shallow(<FilmCard {...props} />);
    });

    it('should render <FilmCard/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render image poster', () => {
        expect(wrapper.find('#filmCardImg')).toHaveLength(1);
    });

    it('should render film title', () => {
        expect(wrapper.find('#filmCardTitle')).toHaveLength(1);
    });

    it('should render date', () => {
        expect(wrapper.find('#filmCardYear')).toHaveLength(1);
    });

    it('should render genres', () => {
        expect(wrapper.find('#filmCardGenresList')).toHaveLength(1);
    });

    it('should handle click on card', () => {
        const instance = wrapper.instance();
        const mock = jest.fn();
        instance.props = { id: true, history: [mock()] };
        jest.spyOn(instance, 'handleRoute');
        wrapper.find('#filmCard').simulate('click');
        expect(mock).toHaveBeenCalled();
    });
});
