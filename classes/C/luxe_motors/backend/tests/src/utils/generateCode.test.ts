import {it, describe, expect} from 'vitest';
import {generateSixDigitCode} from '../../../src/utils/generateCode.util.ts';
describe('generate six codes test', ()=>{
    it('should generate a numeric code with 6 digits', ()=>{
        const code = generateSixDigitCode();
        expect(code).matches(/\d{6}/);
    });
    it('should generate not null code', ()=>{
        const code = generateSixDigitCode();
        expect(code).toBeTruthy();
    });
    it('should generate an unique code',()=>{
        const code = generateSixDigitCode();
        const code_ = generateSixDigitCode();
        expect(code === code_).toBe(false);
    } )
    it('should generate codes between 100000 and 999999', ()=>{
        const code = Number(generateSixDigitCode());
        expect(code).toBeGreaterThanOrEqual(100000);
        expect(code).toBeLessThanOrEqual(999999);
    })
})

