import Joi from "joi";

export const employeeSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    salary: Joi.number().required(),
    profilePic: Joi.string().required(),
    role: Joi.string().required(),
    email: Joi.string().required()
})