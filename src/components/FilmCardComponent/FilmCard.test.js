import React from 'react';
import FilmCard from './index';
import { shallow } from 'enzyme';

describe('<FilmCard>', () => {
    let wrapper;
    let instance;

    const props = {
        poster_path: 'poster',
        title: 'title text',
        release_date: 'date',
        genres: ['genres', 'genres', 'genres'],
        genres_id: [1, 2, 3, 4],
        handleRoute: jest.fn(),
    };

    beforeEach(() => {
        wrapper = shallow(<FilmCard {...props} />);
        instance = wrapper.instance();
    });

    it('should render <<FilmCard/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('test poster', () => {
        let component;

        beforeEach(() => {
            component = wrapper.find('.filmCardImg');
        });

        it('should render img', () => {
            expect(component).toHaveLength(1);
        });


    })

    describe('test title', () => {
        let component;

        beforeEach(() => {
            component = wrapper.find('.filmCardTitle');
        });

        it('should render h5', () => {
            expect(component).toHaveLength(1);
        });

    })

    describe('test year', () => {
        let component;

        beforeEach(() => {
            component = wrapper.find('.filmCardYear');
        });

        it('should render p (date)', () => {
            expect(component).toHaveLength(1);
        });
    })

    describe('test genres', () => {
        let component;

        beforeEach(() => {
            component = wrapper.find('.filmCardGenresList');
        });

        it('should render p (genres)', () => {
            expect(component).toHaveLength(1);
        })
    })

    describe('test onClick', () => {

        it('should handle click', ()=>{
            // jest.spyOn(instance,'handleRoute');
            const card = wrapper.find('.filmCard');
            card.simulate('click');
            expect(props.handleRoute).toBeCalled();
        })

    })



});
