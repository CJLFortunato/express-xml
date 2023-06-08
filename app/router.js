import express from 'express';

import {
    recherchePointsRelais
} from './controller.js';
import {
    validatePayload
} from '../utils/validatePayload.js';

export const router = express.Router();
router.route('/').post(validatePayload, recherchePointsRelais);