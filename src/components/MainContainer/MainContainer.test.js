import React from 'react';
import { shallow } from 'enzyme';
import { MainContainer } from './MainContainer';

const historyMock = {
    push() {
        return 1;
    },
};

const locationMock = {
    search: '?searchBy=genreOrTitle&input=adv&sortBy=rating&sortType=asc',
};

describe('<Header />', () => {
    it('should renders', () => {
        const component = shallow(
            <MainContainer history={historyMock} location={locationMock} />
        );
        expect(component).toMatchSnapshot();
    });

    // it('should render sort by rating button', () => {
    //     const component = shallow(<MainContainer location={locationMock}/>);
    //     expect(component.find('#rating')).toMatchSnapshot();
    // });

    // it('should render sort by release date button', () => {
    //     const component = shallow(<MainContainer location={locationMock}/>);
    //     expect(component.find('#releaseDate')).toMatchSnapshot();
    // });
});
