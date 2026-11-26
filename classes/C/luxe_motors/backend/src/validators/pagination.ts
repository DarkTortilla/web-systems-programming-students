import { query } from "express-validator";

export const paginationValidator = [
    query('page').optional()
        .isString().withMessage('page must be a single value').bail()
        .isInt({ min: 1, max: Number.MAX_SAFE_INTEGER }).withMessage('page must be a positive integer'),
    query('limit').optional()
        .isString().withMessage('limit must be a single value').bail()
        .isInt({ min: 1, max: Number.MAX_SAFE_INTEGER }).withMessage('limit must be a positive integer'),
];
