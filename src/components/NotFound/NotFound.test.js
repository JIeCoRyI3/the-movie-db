import React from 'react';
import { shallow } from 'enzyme';



describe('<NotFound/> render', () => {
    it('should render component with text', () => {
        const tree = shallow(
          <div>
            <div/>
            <p>NOT FOUND</p>
          </div>);
        expect(tree).toMatchSnapshot();
    });
});
