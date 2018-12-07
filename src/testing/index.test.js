import {testFn} from './index';

describe('Demo function', () => {
	it('Should return 1', () => {
		expect(testFn()).toBe(1);
	})
});