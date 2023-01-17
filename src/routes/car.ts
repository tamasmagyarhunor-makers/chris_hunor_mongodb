import { Router } from 'express';
import {
  createCar,
  getCars,
  getCar,
  updateCar,
  deleteCar
} from '../controllers/car';

const router = Router();

router.post('/', createCar);
router.get('/', getCars);
router.get('/:id', getCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router;
