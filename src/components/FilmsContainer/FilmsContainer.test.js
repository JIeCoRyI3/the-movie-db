import { shallow } from 'enzyme';
import { FilmsContainer } from './FilmsContainer';
import React from 'react';

describe('<FilmCard>', () => {
    let wrapper;

    const props = {
        films: ['FilmCard', 'FilmCard', 'FilmCard'],
    };

    beforeEach(() => {
        wrapper = shallow(<FilmsContainer {...props} />);
    });

    it('should render <FilmsContainer/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
