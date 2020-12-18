import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

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
            <Header history={historyMock} location={locationMock} />
        );
        expect(component).toMatchSnapshot();
    });

    it('should render sort by rating button', () => {
        const component = shallow(<Header location={locationMock} />);
        expect(component.find('#rating')).toMatchSnapshot();
    });

    it('should render sort by release date button', () => {
        const component = shallow(<Header location={locationMock} />);
        expect(component.find('#releaseDate')).toMatchSnapshot();
    });
});

describe('Sorting by rating buttons', () => {
    it('should work by rating desc', () => {
        const component = shallow(
            <Header history={historyMock} location={locationMock} />
        );
        const instance = component.instance();
        instance.props = { sortByRatingDown: false };

        const sortByRatingDownMock = jest.fn();
        instance.props.sortByRatingDown = sortByRatingDownMock;

        jest.spyOn(instance, 'sortByRating');

        component.find('#rating').simulate('click');
        expect(sortByRatingDownMock).toHaveBeenCalled();
    });

    it('should work by rating asc', () => {
        const component = shallow(
            <Header history={historyMock} location={locationMock} />
        );
        const instance = component.instance();
        instance.props = {
            sortByRatingUp: null,
            byRating: true,
        };

        const sortByRatingUpMock = jest.fn();
        instance.props.sortByRatingUp = sortByRatingUpMock;

        jest.spyOn(instance, 'sortByRating');

        component.find('#rating').simulate('click');
        expect(sortByRatingUpMock).toHaveBeenCalled();
    });
});

describe('Sorting by release date buttons', () => {
    it('should work by release date desc', () => {
        const descLocationMock = {
            search: '?searchBy=title&sortBy=data&sortType=desc',
        };
        const component = shallow(
            <Header history={historyMock} location={descLocationMock} />
        );
        const instance = component.instance();
        instance.props = { sortByReleaseDateDown: false };

        const sortByReleaseDateDownMock = jest.fn();
        instance.props.sortByReleaseDateDown = sortByReleaseDateDownMock;

        jest.spyOn(instance, 'sortByDate');

        component.find('#releaseDate').simulate('click');
        expect(sortByReleaseDateDownMock).toHaveBeenCalled();
    });

    it('should work by release date asc', () => {
        const component = shallow(
            <Header history={historyMock} location={locationMock} />
        );
        const instance = component.instance();
        instance.props = {
            sortByReleaseDateUp: null,
            byReleaseDate: true,
        };

        const sortByReleaseDateUpMock = jest.fn();
        instance.props.sortByReleaseDateUp = sortByReleaseDateUpMock;

        jest.spyOn(instance, 'sortByDate');

        component.find('#releaseDate').simulate('click');
        expect(sortByReleaseDateUpMock).toHaveBeenCalled();
    });
});
