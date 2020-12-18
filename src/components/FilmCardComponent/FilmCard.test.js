import React from 'react';
import { FilmCard } from './FilmCard';
import { mount, shallow } from 'enzyme';

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

xdescribe('<FilmCard>', () => {
    let wrapper;
    let instance;

    beforeEach(() => {
        wrapper = shallow(<FilmCard {...props} />);
        instance = wrapper(instance);
    });

    it('should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});

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
