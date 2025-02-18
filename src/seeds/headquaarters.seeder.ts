// import { DataSource } from 'typeorm';
// import { Headquarters } from '../entitys/headquarters.entity';

// export async function seedHeadquarters(dataSource: DataSource) {
//     const headquartersRepository = dataSource.getRepository(Headquarters);

//     const existingHeadquarters = await headquartersRepository.find();
//     if (existingHeadquarters.length > 0) {
//         console.log('Headquarters já existem no banco de dados. Pulando seed de headquarters.');
//         return;
//     }

//     const headquartersData = [
//         {
//             city: 'New York',
//             phone: '+1-555-1234567',
//             email: 'ny_headquarters@example.com',
//             address: '123 Broadway St, New York, NY, USA',
//         },
//         {
//             city: 'Los Angeles',
//             phone: '+1-555-7654321',
//             email: 'la_headquarters@example.com',
//             address: '456 Sunset Blvd, Los Angeles, CA, USA',
//         },
//         {
//             city: 'Chicago',
//             phone: '+1-555-1112222',
//             email: 'chicago_headquarters@example.com',
//             address: '789 Michigan Ave, Chicago, IL, USA',
//         },
//         {
//             city: 'Miami',
//             phone: '+1-555-3334444',
//             email: 'miami_headquarters@example.com',
//             address: '101 Ocean Drive, Miami, FL, USA',
//         }
//     ];

//     for (const data of headquartersData) {
//         const headquarters = headquartersRepository.create(data);
//         await headquartersRepository.save(headquarters);
//     }

//     console.log('Headquarters seeds inserted!');
// }
