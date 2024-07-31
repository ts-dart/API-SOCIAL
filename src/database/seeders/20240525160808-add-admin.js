'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
        userName: '@admin',
        firstName: 'admin',
        lastName: 'admin',
        email: 'admin@admin.com',
        password: 'admin',
        phoneNumber: '(00) 00000-0000',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
