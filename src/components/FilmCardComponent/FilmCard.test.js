import React from 'react';
import { FilmCard } from "./FilmCard";
import { shallow } from 'enzyme';

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

    it('should render img', () => {
        expect(wrapper.find('#filmCardImg')).toHaveLength(1);
    });

    it('should render h5', () => {
        expect(wrapper.find('#filmCardTitle')).toHaveLength(1);
    });

    it('should render p (date)', () => {
        expect(wrapper.find('#filmCardYear')).toHaveLength(1);
    });

    it('should render p (genres)', () => {
        expect(wrapper.find('#filmCardGenresList')).toHaveLength(1);
    })

    it('should handle click on card', () => {
        const instance = wrapper.instance();
        const mock = jest.fn()
        instance.props = {'id': true, history: [mock()]}
        jest.spyOn(instance,'handleRoute');
        wrapper.find('#filmCard').simulate('click');
        expect(mock).toHaveBeenCalled();
    })

});
