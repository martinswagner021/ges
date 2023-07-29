import { Router } from "express";
import { ensureAuth } from "./middlewares/ensureAuth.js";

const router = Router()

router.get('/', ensureAuth, (req, res) => res.send("Hello"))

export {router}