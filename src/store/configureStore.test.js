import store from './configureStore';

describe('store', () => {
    it('should correctly init store', () => {
        expect(store.getState().app).toBeDefined();
    });
});
