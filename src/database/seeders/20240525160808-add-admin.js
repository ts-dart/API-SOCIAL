'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
        userName: 'admin',
        fullName: 'admin',
        email: 'admin@admin.com',
        password: '$2b$10$UV/MeyhKNF93rBtGeuYFs.bC1ktMGM1mqGp6Rtp8XqhhTpm3xp/Dy',
        phoneNumber: '00000000000',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
      userName: 'teste',
      fullName: 'teste',
      email: 'teste@teste.com',
      password: '$2b$10$XcB8Hq/y74tVUSQBdcB.0.su4KTjz.MnwQ1q1Xr8l9UQLcoWDHGGq',
      phoneNumber: '00000000000',
      createdAt: new Date(),
      updatedAt: new Date()
  }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
