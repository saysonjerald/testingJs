import jwt from 'jsonwebtoken';

export function add(numbers){
    let sum = 0;
    
    for(const number of numbers){
        sum +=number;
    }

    return sum;
} 

export function generateToken(email, doneFn) {
    jwt.sign({email}, 'secret123', doneFn);
}