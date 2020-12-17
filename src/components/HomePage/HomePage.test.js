import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './index';

describe('<Footer />', () => {
    const wrapper = shallow(<HomePage />);

    it('should be rendered', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
