import {Router} from 'express'
import { signUp } from '../controllers/auth.controller.js';
import { signIn } from '../controllers/auth.controller.js';


const router = Router();

router.route('/signup').post(signUp);
router.route('/signin').post(signIn);

export default router;