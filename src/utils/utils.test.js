import { formatDate } from './utils';

describe('formatDate()', () => {
    it('Should return correct date', () => {
        expect(formatDate('2020-12-20')).toBe('20.12.2020');
    });

    it('Should return error', () => {
        expect(() => formatDate('2020-20-202')).toThrowError(Error);
    });
});
