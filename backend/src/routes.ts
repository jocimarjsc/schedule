import { Router } from 'express';

import ServicesController from './controllers/Services';

const routes = Router();

//routes services
routes.get('/services', ServicesController.index);
routes.get('/services/:id', ServicesController.show);
routes.post('/services', ServicesController.create);
routes.put('/services/:id', ServicesController.update);
routes.delete('/services/:id', ServicesController.delete);

export default routes;