//Commerce
import { Router } from 'express';
import * as prodServController from '../controllers/prodserv.controller';
const router = Router();

router.get('/', prodServController.getProdServList);
router.get('/:id', prodServController.getProdServItem);
router.post('/', prodServController.postProdServItem);
router.put('/:id', prodServController.putProdServItem); 
router.delete('/:id', prodServController.deleteProdServItem);

export default router;
