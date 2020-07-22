
const Post = require('../models/postModel');

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const config = require('../config/index') ; 


module.exports.index = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            data: posts
        });
    } catch (err) {
        next(err);
    }

}

module.exports.getPostById = function (req, res, next) {
    const {id} = req.params ; 
    let post = Post.findById(id);
    res.status(200).json(post);
}
 

module.exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;

        const post = await Post.updateOne({ _id : id },
            { title: title }
        );

        // console.log(post);

        if (post.nModified === 0) {
            throw new Error('Cannot update');
        } else {
            res.status(201).json(
                {
                    message: "Update completed",
                    success: true
                });
        }
    } catch (err) {
        res.status(500).json({
            error: [{
                code: 500,
                message: err.message
            }]
        });
    }
}

module.exports.deleteUser = async function (req, res) {
    // const token = req.header("authorization");
    const { id } = req.params;
    // const id =  req.params.id;
    console.log(`Id : ${id}`);
    const user = await findUserById(id);
    if (user) {
        console.log(`User has been delete. id : ${user.id}`);
    } else {
        console.log(`User is not exits.`);
        res.status(404).send({ message: "Not found User with id " + id });
    }
    res.status(200).json({ message: "success" });;
}