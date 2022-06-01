const usersRepository = require("../repositories/users");

const getAll = (req, res) => {
    const params = {
        gender: req.query.gender,
        country: req.query.country,
        maxAge: req.query.maxAge,
    }
    try {
        const users = usersRepository.getAll(params);
        
        return res.status(200).json(users);
    }
    catch(err) {
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}

const getById = (req, res) => {
    try {
        const id = req.params.id;
        const user = usersRepository.getById(id);

        if(user === undefined) {
            return res.status(404).json({
                msg: "User Not Found"
            })
        }

        return res.status(200).json(user);
    }
    catch(err) {
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}

module.exports = {
    getAll,
    getById,
}
