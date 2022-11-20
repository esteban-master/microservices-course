import { Router } from "express";

const router = Router();

router.route('/api/users/currentuser').get((req, res) => {
  res.json([
    { ok: true }
  ])
})

export default router;
