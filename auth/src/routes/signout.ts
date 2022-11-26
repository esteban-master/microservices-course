import { Router } from "express";

const router = Router();

router.route('/api/users/signout')
  .post((req, res) => {
    req.session = null;

    return res.json({})
  })

export default router;
