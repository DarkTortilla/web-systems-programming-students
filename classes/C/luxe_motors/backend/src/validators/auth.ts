import { body } from "express-validator";

export const registerValidator = [
    body('name')
        .isString().withMessage('user name must be a string').bail()
        .trim().notEmpty().withMessage('user name is required'),
    body('lastName')
        .isString().withMessage('user last name must be a string').bail()
        .trim().notEmpty().withMessage('user last name is required'),
    body('email')
        .isString().withMessage('email must be a string').bail()
        .isEmail().withMessage('invalid email'),
    body('age')
        .isInt({ min: 0, max: 100 }).withMessage('user age must be an integer between 0 and 100'),
    body('password')
        .isString().withMessage('password must be a string').bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/).withMessage('invalid password format'),
    body('repeatPassword')
        .isString().withMessage('repeat password must be a string').bail()
        .notEmpty().withMessage('repeat password is required').bail()
        .custom((value, { req }) => value === req.body.password).withMessage('passwords do not match'),
];

export const loginValidator = [
    body('email')
        .isString().withMessage('email must be a string').bail()
        .isEmail().withMessage('invalid email'),
    body('password')
        .isString().withMessage('password must be a string').bail()
        .notEmpty().withMessage('password is required'),
];
