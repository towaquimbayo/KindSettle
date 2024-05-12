import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import User from "../models/User";
import { messages } from "../messages/lang/en/user";

// zod Validations
const registerSchema = z.object({
    name: z.string().min(3),
    email: z.string().min(6).email(),
    password: z.string().min(3),
    dob: z.date().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    monthlyIncome: z.number().optional(),
    spouse: z.string().optional(),
}).strict();

type RequestBody = {
    email: string;
}
export const registerValidation = async (req: Request, res: Response, next: NextFunction) => {
    // validating using zod
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).send(parsed.error)
        return;
    }

    const { email: emailFromBody }: RequestBody = req.body;
    try {
        // checking to see if the user is already registered
        const emailExist = await User.findOne({ email: emailFromBody });
        if (emailExist) {
            res.status(400).send({ message: messages.emailExistsError });
            return;
        }
        next();
    } catch (err) {
        console.error('Error occurred while validating registration: ', err);
        res.status(500).send({ message: messages.serverError });
    }
}
