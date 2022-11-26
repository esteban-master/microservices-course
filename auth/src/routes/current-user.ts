import { Router } from "express";
import { currentuser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

router.route('/api/users/currentuser')
  .get(
    currentuser,
    requireAuth,
    (req, res) => {
    res.json({ user: req.user || null })
  })

export default router;
