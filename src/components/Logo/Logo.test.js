import React from 'react';
import { shallow } from 'enzyme';
import Logo from './index';

describe('<Footer />', () => {
    const wrapper = shallow(<Logo />);

    it('should be rendered', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
