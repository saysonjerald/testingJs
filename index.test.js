import {it, expect, describe} from 'vitest';
import {add} from './add';


//#region  describe(), it(), expect(), tobe..();
describe("Addition testing", () => {

    it("should summarize number values of an array", () => {
        const result = add([1,2,3]);
    
        expect(result).toBe(6);
    });
    
    
    it("should throw error if there is an error", () => {
        
        //Arrange
            const input = "This is a string";
        
        //Act
            const result = add(input);
    
        //Assert
        expect(result).not.toBeNaN();
    })

});

it("Checking if it is a number", () => {
    const input = 123;

    expect(input).toBeTypeOf('number');
})
//#endregion

describe('Reference and Premitive values', () => {
    it('Testing a reference value', () => {
        //reference: Arrays, Object & Function
        const value = [1, 2, 3, 99];

        //When comparing, it pointes to the pointer location rather the value
        console.log(value === [1, 2, 3, 99]); // <== false, even though the same value
        
        //👉 Code: expect(value).toBe([1, 2, 3, 99]);
        //👉 Result: AssertionError: expected [ 1, 2, 3, 99 ] to be [ 1, 2, 3, 99 ] // Object.is equality 

        //Instead of using to .toBe(), We're going to use .toEqual() for reference values;
        expect(value).toEqual([1, 2, 3, 99]);
    });
})
