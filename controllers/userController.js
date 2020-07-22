


module.exports.index = function (req, res) {
    User.find(function (err, users) {
        if (err) {
            next(err);
        } else {
            res.json(users);
        }
    });
    res.status(200).json(users);
}

// module.exports.getUserById = function (req, res) {

//     let { id } = req.params;
//     // console.log(`ID : ${id}`);
//     res.status(200).send(users.find(item => item.id === id));
// }

// module.exports.createUser = function (req, res) {
//     console.log(req.body);
//     users.push(req.body)
//     // console.log(users)
//     res.status(201).json(req.body);
// }

// module.exports.updateUser = (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     const user = users.find(item => item.id == id);
//     if(user){
//         user.name = name;
//         console.log(`User has been updated. id : ${user.id}`);
//     }else{
//         console.log(`User is not exits.`);
//         res.status(404).send({ message: "Not found User with id " + id });
//     }

//      res.status(201).json(user);
// }



// module.exports.deleteUser =  (req, res) => {
//     const { id } = req.params;
//     const user = users.find(item => item.id == id);

//     if (user){
//         users.splice(users.findIndex(item => item.id == user.id), 1); 
//         console.log(`User has been delete. id : ${user.id}`);
//     }else{
//         console.log(`User is not exits.`);
//         res.status(404).send({ message: "Not found User with id " + id });
//     }


//     res.status(200).json({message:"success"});
// }

//module.exports = index