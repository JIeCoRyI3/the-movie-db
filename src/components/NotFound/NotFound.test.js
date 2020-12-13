import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('<NotFound/>', () => {
    it('should has div', () => {
        const component = shallow(<NotFound />);
        expect(component.find('div')).toHaveLength(1);
    });
});
