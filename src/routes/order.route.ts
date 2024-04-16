import {Router} from 'express';

import {orderController} from '../controllers'

const router = Router();

router.get('/',orderController.getAllTask);

router.post('/',orderController.create);

router.put('/:id',orderController.update);

router.delete('/:id', orderController.delete);

export default router;