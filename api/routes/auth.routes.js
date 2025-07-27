import {Router} from 'express'
import { google, signUp } from '../controllers/auth.controller.js';
import { signIn } from '../controllers/auth.controller.js';


const router = Router();

router.route('/signup').post(signUp);
router.route('/signin').post(signIn);
router.route('/google').post(google)

export default router;