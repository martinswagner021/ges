import { Router } from "express";

import { ensureAuth } from "./middlewares/ensureAuth.js";

import createUserController from "./controllers/post/createUserController.js";
import authUserController from "./controllers/post/authUserController.js";
import testController from "./controllers/testController.js";
import createAnalistaController from "./controllers/post/createAnalistaController.js";
import listAnalistaController from "./controllers/get/listAnalistaController.js";


const router = Router()

// Utilities
router.post('/login', authUserController) 
router.post('/register', createUserController)

// List
router.get('/test', ensureAuth, testController)
router.get('/relatorio', ensureAuth)
router.get('/analista', ensureAuth, listAnalistaController)

// Create
router.post('/analista', ensureAuth, createAnalistaController)
router.post('/veiculo', ensureAuth)
router.post('/cliente', ensureAuth)

// Make changes
router.put('/analista', ensureAuth)
router.put('/relatorio', ensureAuth)
router.put('/veiculo', ensureAuth)
router.put('/cliente', ensureAuth)

// Delete
router.delete('/analista', ensureAuth)
router.delete('/relatorio', ensureAuth)
router.delete('/veiculo', ensureAuth)
router.delete('/cliente', ensureAuth)

export default router