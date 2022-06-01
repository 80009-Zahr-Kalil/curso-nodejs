const users = require("../db/users.json");

const getAll = (params) => {
    let result = users;

    if (params.gender) {
        result = result.filter(user =>
            user.gender == params.gender
        );
    }

    if (params.country) {
        result = result.filter(user =>
            user.country == params.country
        );
    }

    if (params.maxAge) {
        result = result.filter(user =>
            user.age <= params.maxAge
        );
    }

    return result;
}

const getById = (id) => {
    const user = users.find(user => 
        user.id == id
    );

    return user;
}

const getByMaxAge = (maxAge) => {
    const usersFound = users.filter(user => 
        user.age <= maxAge
    );

    return usersFound;
}

module.exports = {
    getAll,
    getById,
    getByMaxAge,
}