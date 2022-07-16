const {faker} = require('@faker-js/faker');

const express = require("express");

const app = express();
const port = 8000;

const UserInfo = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    passsword: faker.internet.password(),
});

const CompanyInfo = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country(),
    },
});

app.get("/api/users/new", (req, res) => {
    const newUser = UserInfo();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const company = CompanyInfo();
    res.json(company);
});

app.get("/api/user/company", (req, res) => {
    const newUser = UserInfo();
    const company = CompanyInfo();
    const response = {
    user: newUser,
    company: company,
    };
    res.json(response);
});

app.listen(port, () => console.log(`Server running on port ${port}`));