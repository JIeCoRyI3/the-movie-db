import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('<NotFound/> render', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NotFound />);
    });

    it('should render NotFound component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should be not empty text', () => {
        expect(wrapper.find('p')).not.toBe(null);
    });
});
