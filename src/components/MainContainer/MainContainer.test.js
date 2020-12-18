import React from 'react';
import { shallow, mount } from 'enzyme';
import { MainContainer } from './MainContainer';
import { findByTestId } from '@testing-library/react';

const historyMock = {
    push() {
        return 1;
    },
};
const locationMock = {
    search: '?searchBy=genreOrTitle&input=adv&sortBy=rating&sortType=asc',
};
let loadDataByGenreOrTitleMock;

beforeEach(() => {
    loadDataByGenreOrTitleMock = jest.fn();
});

describe('<MainContainer />', () => {
    it('should renders', () => {
        const component = shallow(
            <MainContainer
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={locationMock}
            />
        );
        expect(component).toMatchSnapshot();
    });

    xit('shoud componentDidUpdate', () => {
        const loadDataByGenreOrTitleMock = jest.fn();
        const component = mount(
            <MainContainer
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={locationMock}
            />
        );
        const spy = jest.spyOn(component, 'componentDidUpdate');
        component.componentDidMount();

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});

xdescribe('componentDidUpdate', () => {
    it('shoud enter inside', () => {
        const component = mount(
            <MainContainer
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={locationMock}
            />
        );

        const instance = component.instance();
        instance.props = {
            sortByRatingUp: jest.fn(),
            films: [{ 1: 'asd' }],
            byRating: true,
        };
        console.log(instance.props.sortByRatingUp);
        const spy = jest.spyOn(instance, 'sortByRating');
        instance.componentDidUpdate();

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});

describe('componentDidMount', () => {
    it('shoud enter inside title', () => {
        const currentLocationMock = {
            search: '?searchBy=title&input=adv&sortBy=rating&sortType=asc',
        };
        const component = shallow(
            <MainContainer
                loadDataByTitle={jest.fn()}
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={currentLocationMock}
            />
        );

        const instance = component.instance();
        instance.props = {
            films: [{ 1: 'asd' }],
            byRating: true,
            location: {
                search: '?searchBy=title&input=adv&sortBy=rating&sortType=asc',
            },
            loadDataByTitle: jest.fn(),
        };
        instance.componentDidMount();

        expect(instance.props.loadDataByTitle).toHaveBeenCalled();
    });

    it('shoud enter inside genre', () => {
        const currentLocationMock = {
            search: '?searchBy=genre&input=adv&sortBy=rating&sortType=asc',
        };
        const component = shallow(
            <MainContainer
                loadDataByGenre={jest.fn()}
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={currentLocationMock}
            />
        );

        const instance = component.instance();
        instance.props = {
            films: [{ 1: 'asd' }],
            byRating: true,
            location: {
                search: '?searchBy=genre&input=adv&sortBy=rating&sortType=asc',
            },
            loadDataByGenre: jest.fn(),
        };
        instance.componentDidMount();

        expect(instance.props.loadDataByGenre).toHaveBeenCalled();
    });

    it('shoud enter inside GenreOrTitle', () => {
        const currentLocationMock = {
            search:
                '?searchBy=genreOrTitle&input=adv&sortBy=rating&sortType=asc',
        };
        const component = shallow(
            <MainContainer
                loadDataByGenre={jest.fn()}
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={currentLocationMock}
            />
        );

        const instance = component.instance();
        instance.props = {
            films: [{ 1: 'asd' }],
            byRating: true,
            location: {
                search:
                    '?searchBy=genreOrTitle&input=adv&sortBy=rating&sortType=asc',
            },
            loadDataByGenreOrTitle: jest.fn(),
        };
        instance.componentDidMount();

        expect(instance.props.loadDataByGenreOrTitle).toHaveBeenCalled();
    });

    it('shoud enter inside another branch', () => {
        const currentLocationMock = {
            search: '',
        };
        const component = shallow(
            <MainContainer
                loadDataByGenre={jest.fn()}
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={currentLocationMock}
            />
        );

        const instance = component.instance();
        instance.props = {
            films: [{ 1: 'asd' }],
            byRating: true,
            location: {
                search: '',
            },
            loadDataByGenreOrTitle: jest.fn(),
        };
        instance.componentDidMount();

        expect(instance.props.loadDataByGenreOrTitle).not.toHaveBeenCalled();
    });
});

describe('sortBy', () => {
    it('shoud call sortByRating asc', () => {
        const currentLocationMock = {
            search:
                '?searchBy=genreOrTitle&input=adv&sortBy=rating&sortType=asc',
        };
        const component = shallow(
            <MainContainer
                sortByRatingUp={jest.fn}
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={currentLocationMock}
            />
        );

        const instance = component.instance();
        instance.props = {
            films: [{ 1: 'asd' }],
            byRating: true,
            sortByRatingUp: jest.fn(),
            sortByReleaseDateUp: jest.fn(),
        };
        const spy = jest.spyOn(instance, 'sortByRating');
        instance.componentDidUpdate();

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('shoud call sortByRating desc', () => {
        const currentLocationMock = {
            search:
                '?searchBy=genreOrTitle&input=adv&sortBy=rating&sortType=desc',
        };
        const component = shallow(
            <MainContainer
                sortByRatingDown={jest.fn}
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={currentLocationMock}
            />
        );

        const instance = component.instance();
        instance.props = {
            films: [{ 1: 'asd' }],
            byRating: true,
            sortByRatingDown: jest.fn(),
        };
        const spy = jest.spyOn(instance, 'sortByRating');
        instance.componentDidUpdate();

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('shoud call sortByDate asc', () => {
        const currentLocationMock = {
            search: '?searchBy=genreOrTitle&input=adv&sortBy=date&sortType=asc',
        };
        const component = shallow(
            <MainContainer
                sortByReleaseDateUp={jest.fn()}
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={currentLocationMock}
            />
        );

        const instance = component.instance();
        instance.props = {
            films: [{ 1: 'asd' }],
            byRating: true,
            sortByReleaseDateUp: jest.fn(),
        };
        const spy = jest.spyOn(instance, 'sortByDate');
        instance.componentDidUpdate();

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('shoud call sortByDate desc', () => {
        const currentLocationMock = {
            search:
                '?searchBy=genreOrTitle&input=adv&sortBy=date&sortType=desc',
        };
        const component = shallow(
            <MainContainer
                sortByReleaseDateDown={jest.fn}
                loadDataByGenreOrTitle={loadDataByGenreOrTitleMock}
                history={historyMock}
                location={currentLocationMock}
            />
        );

        const instance = component.instance();
        instance.props = {
            films: [{ 1: 'asd' }],
            byRating: true,
            sortByReleaseDateDown: jest.fn(),
        };
        const spy = jest.spyOn(instance, 'sortByDate');
        instance.componentDidUpdate();

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});
