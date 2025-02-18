import { Repository } from "typeorm";
import { Property } from "../entitys/property.entity";
import { CreatePropertyInput } from "../schemas/property.schema";
import postgresDataSource from '../utils/data-source'
import { Between, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

const propertyRepository: Repository<Property> = postgresDataSource.getRepository(Property);

export const createProperty = async (property: CreatePropertyInput): Promise<Property> => {
    const newProperty = propertyRepository.create(property)
    return await propertyRepository.save(newProperty)
};

export const findPropertysWithFilter = async (filters: any, page: number, limit: number) => {

    for (const value in filters) {
        if (filters[value].includes('+')) {
            filters[value] = MoreThanOrEqual(filters[value].split('+').join(''))
        }

        if (filters[value] === '') {
            delete filters[value]
        }

        if (value === 'min_value' || value === 'max_value') {
            const minValue = filters.min_value;
            const maxValue = filters.max_value;

            if (minValue && maxValue) {
                filters['value'] = Between(minValue, maxValue);
            } else if (minValue && !maxValue) {
                filters['value'] = MoreThanOrEqual(minValue);
            } else if (maxValue && !minValue) {
                filters['value'] = LessThanOrEqual(maxValue);
            }

            delete filters.min_value;
            delete filters.max_value;
        }
    }

    const [propertys, total] = await propertyRepository.findAndCount({
        relations: {
            images: true
        },
        where: {
            ...filters
        },
        order: {
            created_at: "ASC"
        },
        take: limit,
        skip: (page - 1) * 10
    })

    return { propertys, total }
}

export const findPropertyById = async (userId: number) => {
    return await propertyRepository.findOneBy({ id: userId });
};
