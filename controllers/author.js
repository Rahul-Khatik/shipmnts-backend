const mongoose = require("mongoose");
const Author = require("../models/author");
const responseManager = require("../utilities/responseManager");

exports.addAuthors = async (req, res) => {
    const {
        name,
        email,
        dob,
    } = req.body;

    const obj = {
        name: name ? name : "",
        email: email ? email : "",
        dob: dob ? dob : "",
    };
    const authorData = await Author.create(obj);

    return responseManager.onSuccess("Authoe added", authorData, res);
};

exports.listAuthors = async (req, res) => {

    return Author.find()
        .sort({ _id: -1 })
        .select("-createdAt -updatedAt -__v")
        .lean()
        .then((authorList) => {
            return responseManager.onSuccess(
                "Author list",
                authorList,
                res
            );
        })
        .catch((error) => {
            return responseManager.onError(error, res);
        });
};