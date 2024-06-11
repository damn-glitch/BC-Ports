// CargoChain/backend/routes/cargoRoutes.js
import express from 'express';
import { createCargo, getCargo, uploadFile } from '../controllers/cargoController.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/create', createCargo);
router.get('/:id', getCargo);
router.post('/upload', upload.single('file'), uploadFile);

export default router;
