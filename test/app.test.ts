import { describe, expect, it } from '@jest/globals'
import multiplyAmit from '../src/app';

describe('testing of app', () => {
    it('testing of add operation', () => {
        const resp = multiplyAmit(2, 3, 'add');
        expect(resp).toStrictEqual(5);
    });
    it('testing of multiply operation', () => {
        const resp = multiplyAmit(2, 3, 'multiply');
        expect(resp).toStrictEqual(6);
    });

    it('testing of other operation', () => {
        try {
            multiplyAmit(2, 3, 'ytrytryryrghdh654564665464fgbbdcbcbcbvcvb')
        } catch (error) {
            expect(error.name).toEqual('Error');
        }
    })
})