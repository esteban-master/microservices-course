import { Router } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConnectionError } from "../../helpers/errors/databaseConnectionError";
import { RequestValidationError } from "../../helpers/errors/requestValidationError";

const router = Router();

router.route('/api/users/signup')
  .post(...[
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be beetwen 4 and 20 characters')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array()) 
    }

    throw new DatabaseConnectionError()
    const { password, email } = req.body;
    res.json({ password, email })
  })

export default router;
