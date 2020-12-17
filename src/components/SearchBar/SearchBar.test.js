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
    let component;
    beforeEach(() => {
        component = shallow(
            <SearchBar
                history={historyMock}
                loadDataByTitle={storeModule.loadDataByTitle}
                loadDataByGenre={storeModule.loadDataByGenre}
                loadDataByGenreOrTitle={storeModule.loadDataByGenreOrTitle}
                location={{ search: 'some' }}
            />
        );
    });

    it('should renders', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render button', () => {
        expect(component.find('#title')).toMatchSnapshot();
    });

    it('should render input', () => {
        expect(component.find('#searchInput')).toMatchSnapshot();
    });

    describe('searchByTitle', () => {
        it('should be called after click', () => {
            const instance = component.instance();
            jest.spyOn(instance, 'pushGetParameters');
            component.find('#title').simulate('click');
            expect(instance.pushGetParameters).toHaveBeenCalled();
        });
    });

    describe('searchByGenre', () => {
        it('should be called after click', () => {
            const instance = component.instance();
            jest.spyOn(instance, 'pushGetParameters');
            component.find('#genre').simulate('click');
            expect(instance.pushGetParameters).toHaveBeenCalled();
        });
    });

    describe('searchByGenreOrTitle', () => {
        it('should be called after click', () => {
            const instance = component.instance();
            jest.spyOn(instance, 'pushGetParameters');
            component.find('#search').simulate('click');
            expect(instance.pushGetParameters).toHaveBeenCalled();
        });
    });
});
