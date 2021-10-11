//Create new Mock Customer with POST
export async function createNewCustomer(req, res) {
    const newCustomer = {
      id: 1,
      fullName: "Moisés Vinajera",
      numberPhone: "9996541237",
      email: "moi@hotmail.com",
      job: "Java Developer",
      state: "Yucatán",
      city: "Mérida",
    };
    return res.status(201).json({ data: newCustomer });
  }
  
  //Get all the Mock customers in the Customer table with GET
  export async function getAllCustomers(req, res) {
    const allCustomers = [
      {
        id: 1,
        fullName: "Jhonatan Serrano",
        numberPhone: "9995748888",
        email: "jhonatan@hotmail.com",
        job: "Enólogo",
        state: "Cancún",
        city: "Quintana Roo",
      },
      {
        id: 2,
        fullName: "Juan Carlos Pérez",
        numberPhone: "9283547894",
        email: "juanca@hotmail.com",
        job: "Chef",
        state: "Tulum",
        city: "Quintana Roo",
      },
    ];
    return res.status(200).json({
      data: allCustomers,
    });
  }
  
  //Get an Mock Customer by id with GET
  export async function getCustomerById(req, res) {
    const id = req.params.id;
    const customerById = {
        id: id,
        fullName: "Jhonatan Serrano",
        numberPhone: "9995748888",
        email: "jhonatan@hotmail.com",
        job: "Enólogo",
        state: "Cancún",
        city: "Quintana Roo",
    };
    return res.status(200).json({ data: customerById });
  }
  
  //Delete an Mock Customer by id with DELETE
  export async function deleteCustomerById(req, res) {
    const id = req.params.id;
    return res.status(200).json({ data: id });
  }
  
  //Update an Customer by id with PUT
  export async function updateACustomer(req, res) {
    const updateCustomer = {
      id: 3,
      fullName: "Naila Rubí",
      numberPhone: "1234567890",
      email: "naila@hotmail.com",
      job: "Actuaria",
      state: "Chemax",
      city: "Yucatán",
    };
    return res.status(201).json({ data: updateCustomer });
  }
