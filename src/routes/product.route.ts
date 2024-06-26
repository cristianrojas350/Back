import {Router} from 'express';

import {productController} from '../controllers'

const router = Router();

router.get('/',productController.getAllTask);

router.post('/',productController.create);

router.put('/:id',productController.update);

router.delete('/:id', productController.delete);

export default router;