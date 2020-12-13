import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    it('test', () => {
        const component = shallow(<App />);
        expect(component.find('p')).toHaveLength(1);
    });
});
