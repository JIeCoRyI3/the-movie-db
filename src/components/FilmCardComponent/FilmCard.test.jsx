import React from 'react';
import FilmCard from './index';
import { shallow } from 'enzyme';

describe('<FilmCard>', () => {
    let wrapper;
    let instance;

    const props = {
        poster_path: 'poster',
        title: 'title text',
        release_date: 'date',
        genres: 'genres',
    };

    beforeEach(() => {
        wrapper = shallow(<FilmCard {...props} />);
        instance = wrapper(instance);
    });

    it('should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
