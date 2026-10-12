import {body} from 'express-validator';


export const createUserValidator = [
    body('name').notEmpty().withMessage('user name is required'),
    body('lastName').notEmpty().withMessage('user last name is required'),
    body('age').notEmpty().withMessage('user age name is required').isInt({min: 0, max:100}),
    body('email').isEmail().withMessage('invalid email'),
    body('password').matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm).withMessage('invalid password format')
]