import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('<Footer />', () => {
    const wrapper = shallow(<Footer />);

    it('should be rendered', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
