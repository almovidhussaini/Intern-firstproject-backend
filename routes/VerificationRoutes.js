import express from 'express'
import {nodemailerNotification,verifiyUser } from '../utils.js';

const router = express.Router();

router.post('/verification/:email',nodemailerNotification)
router.post('/verify',verifiyUser)

export default router