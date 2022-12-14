import { Router } from "express";
import User from '../models/user';
import { body } from "express-validator";
import { BadRequestError } from "../helpers/errors/badRequestError";
import jwt from 'jsonwebtoken';
import { validateRequest } from "../middlewares/validateRequest";

const router = Router();

router.route('/api/users/signup')
  .post(...[
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be beetwen 4 and 20 characters')
  ],
  validateRequest,
  async(req, res) => {
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

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email
      },
      process.env.JWT_KEY!
    );
    // Store it on session object
    req.session = {
      jwt: userJwt
    };
    
    res.status(201).json(newUser)
  })

export default router;
