import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import renderer, { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import { CurrentFilmDescription } from './CurrentFilmDescription';

describe('<CurrentFilmDescription/>', () => {
    const match = {
        params: {
            id: 602211,
        },
    };

    const response = {
        original_title: 'asd',
        vote_average: 'asd',
        release_date: 'asd',
        overview: 'asd',
        poster_path: 'asd',
    };

    // it('should be alive', () => {
    //     const component = shallow(<CurrentFilmDescription match={match} />)
    //     // console.log(component);
    //     // expect(component.find('div').exists()).toBeTruthy();
    // })

    // it('should render', () => {
    //     const component = renderer.create(<CurrentFilmDescription match={match}/>).toJSON();
    //     expect(component).toMatchSnapshot()
    // })

    it('should be', () => {
        let wrapper = shallow(<CurrentFilmDescription match={match} />);

        const getMovieMock = jest.fn();
        wrapper.instance().getMovie = getMovieMock.mockReturnValueOnce(
            response
        );
        wrapper.update();
        expect(getMovieMock).toBeCalledWith(602211);
    });
});
