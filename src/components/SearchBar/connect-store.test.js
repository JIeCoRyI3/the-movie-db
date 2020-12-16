import * as storeModule from './connect-store';

describe('loadDataByTitle', () => {
    it('should return function', () => {
        const result = storeModule.loadDataByTitle();
        expect(typeof result).toEqual('function');
    });
});

describe('async requests', () => {
    let create, thunk, store;

    beforeEach(() => {
        window.dispatch = () => {
            return 1;
        };

        window.fetch = () => {
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({
                        ok: true,
                        json() {
                            return {
                                results: [123, 123, 123],
                                genres: [
                                    {
                                        id: 1,
                                        name: 'Adventure',
                                    },
                                    {
                                        id: 2,
                                        name: 'Horror',
                                    },
                                ],
                            };
                        },
                    });
                }, 0);
            });
        };

        thunk = ({ dispatch, getState }) => (next) => (action) => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }

            return next(action);
        };

        create = () => {
            const store = {
                getState: jest.fn(() => ({})),
                dispatch: window.dispatch,
            };
            const next = jest.fn();

            const invoke = (action) => thunk(store)(next)(action);

            return { store, next, invoke };
        };

        const createObject = create();
        store = createObject.store;
        jest.spyOn(store, 'dispatch');
        createObject.invoke((dispatch) => {
            dispatch({ type: 'TEST' });
        });

        return create;
    });

    afterEach(() => {
        delete window.fetch;
        delete window.dispatch;
    });

    it('check loadDataByTitle get data from api', () => {
        const result = storeModule.loadDataByTitle({ query: 'test' });
        return result(window.dispatch).then((res) => {
            expect(store.dispatch).toHaveBeenCalled();
        });
    });

    it('check loadDataByTitle get all films from api if query empty', () => {
        const result = storeModule.loadDataByTitle({});
        return result(window.dispatch).then((res) => {
            expect(store.dispatch).toHaveBeenCalled();
        });
    });

    it('check loadDataByGenre get data from api', () => {
        const result = storeModule.loadDataByGenre({ with_genres: 'Adv' });
        return result(window.dispatch).then((res) => {
            expect(store.dispatch).toHaveBeenCalled();
        });
    });

    it('check loadDataByGenre get all films from api if query empty', () => {
        const result = storeModule.loadDataByGenre({});
        return result(window.dispatch).then((res) => {
            expect(store.dispatch).toHaveBeenCalled();
        });
    });

    it('check loadDataByGenreOrTitle get data from api', () => {
        const result = storeModule.loadDataByGenreOrTitle({
            title_and_genres: 'Adv',
        });
        return result(window.dispatch).then((res) => {
            expect(store.dispatch).toHaveBeenCalled();
        });
    });

    it('check loadDataByGenreOrTitle get all films from api if query empty', () => {
        const result = storeModule.loadDataByGenreOrTitle({});
        return result(window.dispatch).then((res) => {
            expect(store.dispatch).toHaveBeenCalled();
        });
    });

    it('createUniqueListFromTwoLists should return correct values', () => {
        const array1 = [
            {
                id: 123,
                name: 'Test1',
            },
            {
                id: 233,
                name: 'Test2',
            },
        ];

        const array2 = [
            {
                id: 123,
                name: 'Test1',
            },
            {
                id: 145,
                name: 'Test3',
            },
        ];

        const result = storeModule.createUniqueListFromTwoLists(array1, array2);
        expect(result).toEqual([
            {
                id: 123,
                name: 'Test1',
            },
            {
                id: 233,
                name: 'Test2',
            },
            {
                id: 145,
                name: 'Test3',
            },
        ]);
    });
});
