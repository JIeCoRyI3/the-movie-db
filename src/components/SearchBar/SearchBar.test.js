import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from './SearchBar';
import * as storeModule from './connect-store';

const historyMock = {
    push() {
        return 1;
    },
};

describe('<SearchBar/>', () => {
    it('should renders', () => {
        const component = shallow(<SearchBar />);
        expect(component).toMatchSnapshot();
    });

    it('should render button', () => {
        const component = shallow(<SearchBar />);
        expect(component.find('#title')).toMatchSnapshot();
    });

    it('should render input', () => {
        const component = shallow(<SearchBar />);
        expect(component.find('#searchInput')).toMatchSnapshot();
    });

    describe('searchByTitle', () => {
        it('should be called after click', () => {
            const component = shallow(
                <SearchBar
                    history={historyMock}
                    loadDataByTitle={storeModule.loadDataByTitle}
                />
            );
            const instance = component.instance();
            jest.spyOn(instance, 'pushGetParameters');
            component.find('#title').simulate('click');
            expect(instance.pushGetParameters).toHaveBeenCalled();
        });
    });

    describe('searchByGenre', () => {
        it('should be called after click', () => {
            const component = shallow(
                <SearchBar
                    history={historyMock}
                    loadDataByGenre={storeModule.loadDataByGenre}
                />
            );
            const instance = component.instance();
            jest.spyOn(instance, 'pushGetParameters');
            component.find('#genre').simulate('click');
            expect(instance.pushGetParameters).toHaveBeenCalled();
        });
    });

    describe('searchByGenreOrTitle', () => {
        it('should be called after click', () => {
            const component = shallow(
                <SearchBar
                    history={historyMock}
                    loadDataByGenreOrTitle={storeModule.loadDataByGenreOrTitle}
                />
            );
            const instance = component.instance();
            jest.spyOn(instance, 'pushGetParameters');
            component.find('#search').simulate('click');
            expect(instance.pushGetParameters).toHaveBeenCalled();
        });
    });
});
