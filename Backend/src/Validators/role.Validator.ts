import Joi from "joi";

export const roleValidator = Joi.object({
    roleName: Joi.string().required()
})