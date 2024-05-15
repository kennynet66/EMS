import joi from 'joi';

export const registerSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
})

export const loginSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
})