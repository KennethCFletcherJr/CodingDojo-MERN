const express = require("express");
const app = express();
const port = 8000;

//req is shorthand for request
//res is shorthand for response
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });

//Create 2 functions: createUser, createCompany that return an object with the properties listed above

const { faker } = require('@faker-js/faker');
const createUser = () => {
    const newUser = {
        password: faker.internet.password(), // '89G1wJuBLbGziIs'
        email: faker.internet.email(), // 'Kassandra4@hotmail.com'
        phoneNumber: faker.phone.number(), // '961-770-7727'
        lastName: faker.name.lastName(), // 'Hauck'
        firstName: faker.name.firstName(), // 'Antwan'
        _id: faker.database.mongodbObjectId() // 'e175cac316a79afdd0ad3afb'
    };

    return newUser;

};

const newFakeUser = createUser();
console.log(newFakeUser);

// const { faker } = require('@faker-js/faker');
const createCompany = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(), // 'e175cac316a79afdd0ad3afb'
        name: faker.company.companyName(), // 'Zieme, Hauck and McClure'
        address:
            [
                // {street: faker.address.street()}, // 'Schroeder Isle'
                // {city: faker.address.city()}, // 'East Jarretmouth'
                // {state: faker.address.state()}, // 'Georgia'
                // {zipCode: faker.address.zipCode()}, // '17839'
                // {country: faker.address.country()} // 'Greece'

                {
                    street: faker.address.street(), // 'Schroeder Isle'
                    city: faker.address.city(), // 'East Jarretmouth'
                    state: faker.address.state(), // 'Georgia'
                    zipCode: faker.address.zipCode(), // '17839'
                    country: faker.address.country()// 'Greece'
                }]

    };

    return newCompany;

}

const newFakeCompany = createCompany();
console.log(newFakeCompany);

/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */


// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/new", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.users.new);
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.users.new]);
});

app.get("/api/companies/new", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.companies.new);
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.companies.new]);
});

app.get("/api/user/company", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.user.company);
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.user.company]);
});

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
