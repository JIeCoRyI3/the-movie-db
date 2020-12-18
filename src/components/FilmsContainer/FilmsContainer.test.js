import { shallow } from 'enzyme';
import { FilmsContainer } from './FilmsContainer';
import React from 'react';

describe('<FilmsContainer>', () => {
    let wrapper;

    const props = {
        films: [
            {
                poster_path: 'test',
                genres_ids: [1, 2, 3],
                release_date: 'test',
                title: 'test',
            },
            {
                poster_path: 'test',
                genres_ids: [1, 2, 3],
                release_date: 'test',
                title: 'test',
            },
        ],
    };

    beforeEach(() => {
        wrapper = shallow(<FilmsContainer {...props} />);
    });

    it('should render <FilmsContainer/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
