import {it, expect, describe} from 'vitest';
import {add} from './add';


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