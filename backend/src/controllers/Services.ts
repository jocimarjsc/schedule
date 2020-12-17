import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Services from '../models/Service';

export default {
    async index(request: Request, response: Response) {
        const servicesRepository = getRepository(Services);
        const services = await servicesRepository.find({
            order: {
                id: 'ASC'
            }
        });

        if(services) {
            return response.status(200).json(services);
        }

        return response.status(404).json('Not found')
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const servicesRepository = getRepository(Services);
        const service = await servicesRepository.findOne(id);
         
        if(service) {
            return response.status(200).json(service);
        }

        return response.status(404).json('Not found')

    },

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const {
            create, name, telephone, address, model_checked, status, observations, colors, written_balloon,
            balloon_symbol, amount, day, month, year, delivery_date, delivery_hours, value, entry_value
        } = request.body;

        const data = {
            create, name, telephone, address, model_checked, status, observations, colors, written_balloon,
            balloon_symbol, amount, day, month, year, delivery_date, delivery_hours, value, entry_value
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
            create, name, telephone, address, model_checked, status, observations, colors, written_balloon,
            balloon_symbol, amount, delivery_date, day, month, year, delivery_hours, value, entry_value, lack_value
        } = request.body;

        const data = {
            create, name, telephone, address, model_checked, status, observations, colors, written_balloon,
            balloon_symbol, amount, delivery_date, day, month, year, delivery_hours, value, entry_value, lack_value
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