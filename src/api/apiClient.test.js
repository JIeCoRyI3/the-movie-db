import ApiClient from './apiClient';

describe('ApiClient', () => {
    let api;

    beforeEach(() => {
        api = new ApiClient();

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
    });

    afterEach(() => {
        delete window.fetch;
        api = null;
    });

    it('filterBy should get data by filter', () => {
        return api.filterBy({ query: 'Title' }).then((res) => {
            expect(res.results).toBeDefined();
        });
    });

    it('getAllGenres should get genres', () => {
        return api.getAllGenres().then((res) => {
            expect(res.genres).toBeDefined();
        });
    });

    it('filterWithGenres should get data by filter', () => {
        return api.filterWithGenres({ genres: [1] }).then((res) => {
            expect(res.results).toBeDefined();
        });
    });

    it('detailsFromFilm  should get data by filter', () => {
        return api.detailsFromFilm(1).then((res) => {
            expect(res.results).toBeDefined();
        });
    });

    it('should throw error if wrong data', () => {
        window.fetch = () => {
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    resolve({
                        ok: false,
                        error: 'Server fail',
                        status: 404,
                    });
                }, 0);
            });
        };

        return api.detailsFromFilm(1).catch((res) => {
            expect(res.ok).not.toBeTruthy();
        });
    });

    it('should not return json() if jsonNeed false', () => {
        window.fetch = () => {
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({
                        ok: true,
                    });
                }, 0);
            });
        };

        api.mockGetFunction = async () => {
            await api.postGlobalResource('/test/', null, null, 'GET', false);
        };

        return api.mockGetFunction().then((res) => {
            expect(res).not.toBeTruthy();
        });
    });
});
