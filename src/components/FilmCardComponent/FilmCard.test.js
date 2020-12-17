import React from 'react';
import { FilmCard } from "./FilmCard";
import { shallow } from 'enzyme';

describe('<FilmCard>', () => {
    let wrapper;
    let instance;

    const props = {
        poster_path: 'poster',
        title: 'title text',
        release_date: '2323-20-20',
        genres: ['genres', 'genres', 'genres'],
        genre_ids: [1, 2, 3, 4],
        handleRoute: jest.fn(),
    };

    beforeEach(() => {
        wrapper = shallow(<FilmCard {...props} />);
        wrapper.componentDidMount = jest.fn(() => {});
        wrapper.componentDidUpdate = jest.fn(() => {});
        instance = wrapper.instance();
    });

    it('should render <FilmCard/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render img', () => {
        expect(wrapper.find('#filmCardImg').exists()).toBeTruthy();
    });


    describe('test poster', () => {
        // let component;

        // beforeEach(() => {
        //     component = wrapper.find('.filmCardImg');
        // });
        // wrapper = shallow(<FilmCard {...props} />)
        // it('should render img', () => {
        //     expect(wrapper.find('#filmCardImg').exists()).toBeTruthy();
        // });


    })

    describe('test title', () => {
        // let component;
        //
        // beforeEach(() => {
        //     component = wrapper.find('.filmCardTitle');
        // });
        //
        // it('should render h5', () => {
        //     expect(component).toHaveLength(1);
        // });

    })

    describe('test year', () => {
        // let component;
        //
        // beforeEach(() => {
        //     component = wrapper.find('.filmCardYear');
        // });
        //
        // it('should render p (date)', () => {
        //     expect(component).toHaveLength(1);
        // });
    })

    describe('test genres', () => {
        // let component;
        //
        // beforeEach(() => {
        //     component = wrapper.find('.filmCardGenresList');
        // });
        //
        // it('should render p (genres)', () => {
        //     expect(component).toHaveLength(1);
        // })
    })

    describe('test onClick', () => {

        // it('should handle click', ()=>{
        //     // jest.spyOn(instance,'handleRoute');
        //     const card = wrapper.find('.filmCard');
        //     card.simulate('click');
        //     expect(props.handleRoute).toBeCalled();
        // })
        //
        // it('should handle click', ()=>{
        //     // jest.spyOn(instance,'handleRoute');
        //     const card = wrapper.find('.filmCard');
        //     card.simulate('click');
        //     expect(props.handleRoute).toBeCalledTimes(1);
        // })

    })



});
