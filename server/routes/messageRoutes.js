import express from 'express';
import { submitMessage } from '../controllers/messageController.js';

const router = express.Router();

router.route('/').post(submitMessage);

export default router;
