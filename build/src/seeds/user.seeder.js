"use strict";
// import { DataSource } from 'typeorm';
// import { User, RoleEnumTypeUser } from '../entitys/user.entity';
// export async function seedUsers(dataSource: DataSource) {
//     const userRepository = dataSource.getRepository(User);
//     const existingUser = await userRepository.find();
//     if (existingUser.length > 0) {
//         console.log('User já existem no banco de dados. Pulando seed de user.');
//         return;
//     }
//     const usersData = [
//         {
//             email: 'admin_user@example.com',
//             password: 'hashed_admin_password', // Lembre-se de hashear a senha na aplicação real
//             role: RoleEnumTypeUser.ADMIN,
//             phone: '987-654-3210',
//         }
//     ];
//     for (const data of usersData) {
//         const user = userRepository.create(data);
//         await userRepository.save(user);
//     }
//     console.log('User seeds inserted!');
// }
//# sourceMappingURL=user.seeder.js.map