import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
    it('should could load data on componetDidMount', () => {
        const props = {
            loadData: jest.fn(() => {}),
        };
        const wrapper = shallow(<App {...props} />);
        const instance = wrapper.instance();

        instance.componentDidMount();
        expect(props.loadData).toHaveBeenCalled();
    });
});
