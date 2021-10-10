'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    await queryInterface.bulkInsert(
      "Products", 
      [
        {
          name: "Colgate Luminous White 125 ml",
          description: "Whitening toothpaste.",
          price: 2,
          stock: 10,
          require_id_to_sell: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vanilla Coca-Cola",
          description: "Vanilla flavored Coca-Cola soda. Limited edition.",
          price: 1.50,
          stock: 30,
          require_id_to_sell: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Oranges",
          description: "Bulk fresh oranges.",
          price_per_kg: 3.98,
          stock: 150,
          require_id_to_sell: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Some prescripted drug",
          description: "Medical prescription and id card required to sell this product.",
          price: 45,
          stock: 5,
          require_id_to_sell: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Froot Loops cereal 410g",
          description: "A colorful cereal.",
          price: 4,
          stock: 30,
          require_id_to_sell: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Products", null, {});
  }
};
