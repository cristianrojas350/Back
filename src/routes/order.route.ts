import {Router} from 'express';

import {orderController} from '../controllers'

const router = Router();

router.get('/',orderController.getAllTask);

router.post('/',orderController.create);

router.patch('/:id',orderController.update);

router.delete('/:id', orderController.delete);

export default router;