import { Repository } from "typeorm";
import Images from "../entitys/images.entity";
import { Property } from "../entitys/property.entity";
import postgresDataSource from '../utils/data-source'

export interface IImages {
    filename: string;
    originalname: string;
    property_id: number;
}

const imagesRepository: Repository<Images> = postgresDataSource.getRepository(Images);
const propertyRepository: Repository<Property> = postgresDataSource.getRepository(Property);

export const createImages = async (images: IImages[]) => {
    const newImages = [];
    for (const imageData of images) {
        const property = await propertyRepository.findOne({ where: { id: imageData.property_id } });
        if (!property) {
            throw new Error(`property with id ${imageData.property_id} not found`);
        }

        const newImage = imagesRepository.create({
            ...imageData,
            property: property
        });
        newImages.push(newImage);
    }

    return await imagesRepository.save(newImages);
};