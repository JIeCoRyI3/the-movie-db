import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './index';

describe('<HomePage />', () => {
    const wrapper = shallow(<HomePage />);

    it('should be rendered', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
