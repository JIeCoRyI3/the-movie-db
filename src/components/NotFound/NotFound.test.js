import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';



describe('<NotFound/> render', () => {
    it('should has div', () => {
        const component = shallow(<NotFound />);
        expect(component.find('div')).toHaveLength(1);
    });
});
