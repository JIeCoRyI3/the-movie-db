import React from 'react';
import { shallow } from 'enzyme';
import { FilmPage } from './FilmPage';

describe('<FilmPage>', () => {
    it('should render <FilmPage/> correctly', () => {
        const component = shallow(<FilmPage />);
        expect(component).toMatchSnapshot();
    });
});
