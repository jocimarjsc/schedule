import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Services from '../models/Service';

export default {
    async index(request: Request, response: Response) {
        const servicesRepository = getRepository(Services);
        const services = await servicesRepository.find({
            order: {
                id: 'DESC'
            }
        });

        return response.status(200).json(services)
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const servicesRepository = getRepository(Services);
        const service = await servicesRepository.findOneOrFail(id);

        return response.status(200).json(service);

    },

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const {
            name, telephone, address, observations, colors, written_balloon,
            balloon_symbol, amount, delivery_date, delivery_hours, value, entry_value, lack_value
        } = request.body;

        const data = {
            name, telephone, address, observations, colors, written_balloon,
            balloon_symbol, amount, delivery_date, delivery_hours, value, entry_value, lack_value
        };

        const servicesRepository = getRepository(Services);
        const service = await servicesRepository.findOne(id);

        const newService = servicesRepository.merge(service as any, data)
        
        await servicesRepository.save(newService);

        return response.status(200).json(newService);

    },

    async create(request: Request, response: Response) {
        const servicesRepository = getRepository(Services);
        const {
            name, telephone, address, model_checked, observations, colors, written_balloon,
            balloon_symbol, amount, delivery_date, delivery_hours, value, entry_value, lack_value
        } = request.body;

        const data = {
            name, telephone, address, model_checked, observations, colors, written_balloon,
            balloon_symbol, amount, delivery_date, delivery_hours, value, entry_value, lack_value
        };

        const service = servicesRepository.create(data);

        await servicesRepository.save(service);

        return response.status(201).json(service);
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const servicesRepository = getRepository(Services);

        const service = await servicesRepository.findOne(id);
        if(!service){
            return response.status(404).json({ msg: 'Service not found!'});
        }

        await servicesRepository.remove(service);

        return response.status(200).json({ msg: 'Has been removed', service});

    },
}