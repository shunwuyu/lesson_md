import express from 'express';
import Cites from '../controller/v1/cites';
const router = express.Router();

router.get('/suggestion', Cites.suggestion); 
router.get('/location', Cites.location); 

export default router;