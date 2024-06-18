import { Request, Response, Router } from 'express';
import DrugsRepository from '../repositories/drugs.repository';

const router = Router();

router.get('/drugs', async (req: Request, res: Response) => {
  const result = await DrugsRepository.findAll();

  return res.status(200).json(result);
});

export { router };