// import { DataSource } from 'typeorm';
// import { seedProperties } from '../seeds/property.seeder';
// import { seedHeadquarters } from '../seeds/headquaarters.seeder';
// // import { seedUsers } from '../seeds/user.seeder';


// export const runSeeds = async (AppDataSource: DataSource) => {
//     try {
//         console.log('Seeding properties...');
//         await seedProperties(AppDataSource);

//         console.log('Seeding headquarters...');
//         await seedHeadquarters(AppDataSource);

//         // console.log('Seeding users...');
//         // await seedUsers(AppDataSource);

//         console.log('All seeds completed!');
//     } catch (error: any) {
//         console.error('Error executing seeds:', error);
//     } 
// }