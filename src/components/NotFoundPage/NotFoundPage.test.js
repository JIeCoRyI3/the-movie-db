import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from "../NotFoundPage";


describe('< NotFoundPage /> render', () => {
	it('should render component',  () => {
		const component = shallow( <NotFoundPage />);
		expect(component).toMatchSnapshot();
	})
})
