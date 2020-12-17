import React from 'react';
import { shallow } from 'enzyme';
import LoaderComponent from './LoaderComponent';

describe('<LoaderComponent/> render', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LoaderComponent />);
    });

    it('should render LoaderComponent component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have div with class ldsDualRing', () => {
        expect(wrapper.find('.ldsDualRing')).toMatchSnapshot();
    });
});
