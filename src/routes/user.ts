import express from 'express';
import controller from '../controllers/user_controller';

const router = express.Router();

router.get('/employees', controller.getUsers);


export default router;