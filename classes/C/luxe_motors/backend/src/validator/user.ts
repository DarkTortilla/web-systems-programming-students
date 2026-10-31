import { body } from "express-validator";

export const createUserValidator = [
    body('name').notEmpty().withMessage('name is required'),
    body('lastName').notEmpty().withMessage('last name is required'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email'),
    body('age').notEmpty().withMessage('age is required').isInt({min:0, max:100}).withMessage('invalid age'),
    body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm).withMessage('invalid password')
];