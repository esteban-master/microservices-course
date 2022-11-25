import { Router } from "express";
import User from '../models/user';
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../helpers/errors/requestValidationError";
import { BadRequestError } from "../helpers/errors/badRequestError";

const router = Router();

router.route('/api/users/signup')
  .post(...[
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be beetwen 4 and 20 characters')
  ],
  async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array()) 
    }

    const { password, email, name } = req.body;
    const findUser = await User.findOne({ email })
    if(findUser) {
      throw new BadRequestError('Email in use')
    }
    const newUser = new User({
      password,
      email,
      name
    }) 
    await newUser.save()
    res.status(201).json(newUser)
  })

export default router;
