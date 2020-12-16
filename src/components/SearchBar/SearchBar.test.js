import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from './SearchBar';

describe('<SearchBar/>', () => {
    it('should renders', () => {
        const component = shallow(<SearchBar />);
        expect(component).toMatchSnapshot();
    });

    // describe('searchByTitle', () => {
    //     it('should be called after click', () => {
    //         const component = mount(<SearchBar />);
    //         const instance = component.instance();
    //         jest.spyOn(instance, 'searchByTitle');
    //         expect(instance.searchByTitle).toHaveBeenCalled();
    //     });
    //
    // });
});
