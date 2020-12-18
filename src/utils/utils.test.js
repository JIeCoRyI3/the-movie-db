import { formatDate, getSearchParams } from './utils';

describe('formatDate()', () => {
    it('Should return correct date', () => {
        expect(formatDate('2020-12-20')).toBe('20.12.2020');
    });

    it('Should return correct date', () => {
        expect(formatDate('2001/07/27')).toBe('27.07.2001');
    });

    it('Should return empty string', () => {
        expect(formatDate('2001|07|27')).toBe('');
    });

    it('Should return empty string', () => {
        expect(formatDate('2020-20-202')).toBe('');
    });

    it('Should return empty string', () => {
        expect(formatDate('')).toBe('');
    });
});

describe('getSearchParams()', () => {
    it('Should return correct params', () => {
        const searchMock = '?search=some&hit=test';
        expect(getSearchParams(searchMock)).toEqual({
            search: 'some',
            hit: 'test',
        });
    });
});
