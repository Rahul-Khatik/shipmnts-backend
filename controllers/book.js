const mongoose = require("mongoose");
const responseManager = require("../utilities/responseManager");
const Book = require("../models/book");

exports.addBooks = async (req, res) => {
    const {
        authorid,
        name,
        isbn_code,
    } = req.body;

    const obj = {
        authorid: authorid ? authorid : "",
        name: name ? name : "",
        isbn_code: isbn_code ? isbn_code : "",
    };
    const bookData = await Book.create(obj);

    return responseManager.onSuccess("Book added", bookData, res);
};

exports.listBooks = async (req, res) => {
    return Book.find()
        .sort({ _id: -1 })
        .select("-createdAt -updatedAt -__v")
        .lean()
        .then((bookList) => {
            return responseManager.onSuccess(
                "Book list",
                bookList,
                res
            );
        })
        .catch((error) => {
            return responseManager.onError(error, res);
        });
};