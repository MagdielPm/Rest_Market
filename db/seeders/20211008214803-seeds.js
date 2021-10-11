"use strict";

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
      "Employees",
      [
        {
          id: 1,
          fullName: "Walter White",
          numberPhone: "9894609034",
          email: "heisenberg@hotmail.com",
          job: "Chief Lead",
          state: "New Mexico",
          city: "Albuquerque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          fullName: "Mike ehrmantraut",
          numberPhone: "3412659845",
          email: "mike@hotmail.com",
          job: "Bodyguard",
          state: "New Mexico",
          city: "Albuquerque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          fullName: "Jesse Pinkman",
          numberPhone: "9984732619",
          email: "jesse@hotmail.com",
          job: "Mid Chef",
          state: "New Mexico",
          city: "Albuquerque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          fullName: "Gustavo Fring",
          numberPhone: "8874633409",
          email: "gus@hotmail.com",
          job: "Lead Pollos Hermanos",
          state: "New Mexico",
          city: "Albuquerque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          fullName: "Saul Goodman",
          numberPhone: "4356129133",
          email: "saul@hotmail.com",
          job: "Lawyer",
          state: "New Mexico",
          city: "Albuquerque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          id: 1,
          fullName: "Skinny Pete",
          numberPhone: "9873849011",
          email: "skinny@hotmail.com",
          state: "New Mexico",
          city: "Albuquerque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          fullName: "Combo Ortega",
          numberPhone: "9921748032",
          email: "combo@hotmail.com",
          state: "New Mexico",
          city: "Albuquerque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          fullName: "Jane Margolis",
          numberPhone: "8873639033",
          email: "jane@hotmail.com",
          state: "New Mexico",
          city: "Albuquerque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          fullName: "Andrea Cantillo",
          numberPhone: "8878967845",
          email: "andy@hotmail.com",
          state: "New Mexico",
          city: "Albuquerque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          fullName: "Tortuga",
          numberPhone: "8873456421",
          email: "tortuga@hotmail.com",
          state: "New Mexico",
          city: "Albuquerque",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Foods",
      [
        {
          id: 1,
          foodName: "Salbutes",
          foodDescription: "Salbutes yucatecos, un antojito regional",
          ingredients:
            "Tortilla, carne, lechuga, aguacate, tomate, cebolla y salsas",
          foodPrice: "$25",
          foodExpiration: "11/10/2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          foodName: "Panuchos",
          foodDescription: "Panuchos yucatecos, un antojito regional",
          ingredients:
            "Tortilla, carne, lechuga, aguacate, tomate, cebolla y salsas",
          foodPrice: "$25",
          foodExpiration: "11/10/2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          foodName: "Pib",
          foodDescription: "Pibs yucatecos, un antojito regional",
          ingredients: "Masa, carne, chile, tomate y salsas",
          foodPrice: "$555",
          foodExpiration: "21/10/2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          foodName: "Caldo de lima",
          foodDescription: "Caldo de lima yucateco, un antojito regional",
          ingredients: "Pavo, lima, cebolla y limon",
          foodPrice: "$70",
          foodExpiration: "12/10/2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          foodName: "Tacos de cochinita",
          foodDescription: "Tacos de cochinita yucatecos, un antojito regional",
          ingredients:
            "Tortilla, carne, cebolla morada, chile habanero, limon y salsas",
          foodPrice: "$40",
          foodExpiration: "16/10/2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Employees", null, {});
    await queryInterface.bulkDelete("Customers", null, {});
    await queryInterface.bulkDelete("Foods", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
