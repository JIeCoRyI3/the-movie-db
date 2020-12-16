import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';
import SearchBar from "../SearchBar/SearchBar";
import NotFound from "../NotFound";


describe('< NotFoundPage /> render', () => {
	it('should render component',  () => {
		const tree = shallow(
			<>
				<Header>
					<SearchBar />
				</Header>
				<NotFound />
			</>
		);
		expect(tree).toMatchSnapshot();
	})
})
