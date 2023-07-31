import { Router } from "express";
import { ensureAuth } from "./middlewares/ensureAuth.js";

const router = Router()

// Utilities
router.post('/login') // autenticar

// Create
router.post('/relatorio', ensureAuth) // criar relatorio
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