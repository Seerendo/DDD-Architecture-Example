import { Router } from 'express';
const subRouter = Router();

subRouter.get('/', (req, res) => {
  console.log('Hola Mundo');
});

export { subRouter };
