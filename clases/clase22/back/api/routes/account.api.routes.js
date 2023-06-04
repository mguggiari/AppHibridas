import { Router } from 'express'
import * as controllers from '../controllers/account.controllers.js'
import { validateAccount } from '../../middlewares/account.validate.middleware.js'

const router = Router()

// /register
router.post('/account', [validateAccount], controllers.createAccount)

/// /session 
/// /auth
/// 
router.post('/account/login', [validateAccount], controllers.login)


export default router