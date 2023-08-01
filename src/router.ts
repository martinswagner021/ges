import { Request, Response, NextFunction, Router } from "express";

import { ensureAuth } from "./middlewares/ensureAuth.js";

import createUserController from "./controllers/createUserController.js";
import authUserController from "./controllers/authUserController.js";

const router = Router()

// Utilities
router.post('/login', authUserController) // autenticar
router.post('/register', createUserController) // criar usuario

// List
router.get('/relatorio', ensureAuth, (req, res) => res.send("Ok")) // criar relatorio

// Create
router.post('/veiculo', ensureAuth) // criar veiculo
router.post('/cliente', ensureAuth) // criar cliente

// Make changes
router.put('/relatorio', ensureAuth) // modificar relatorio
router.put('/veiculo', ensureAuth) // modificar veiculo
router.put('/cliente', ensureAuth) // modificar cliente

// Delete
router.delete('/relatorio', ensureAuth) // remover relatorio
router.delete('/veiculo', ensureAuth) // remover veiculo
router.delete('/cliente', ensureAuth) // remover cliente

export {router}