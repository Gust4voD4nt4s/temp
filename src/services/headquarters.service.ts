import { Repository } from "typeorm";
import { Headquarters } from "../entitys/headquarters.entity";
import postgresDataSource from "../utils/data-source";
import { CreateHeadquartersInput } from "../schemas/headquarters.schema";

const headquartersRepository: Repository<Headquarters> = postgresDataSource.getRepository(Headquarters);

export const createHeadquarters = async (headquarters: CreateHeadquartersInput): Promise<Headquarters> => {
    const newHeadquarters = headquartersRepository.create(headquarters)
    return await headquartersRepository.save(newHeadquarters)
}

export const findHeadquarters = async () => {
    const headquarters = await headquartersRepository.find({
        relations: {
            images: true
        }
    })
    return headquarters
}