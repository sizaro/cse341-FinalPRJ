/* **********************************************
 * Functions to create, get, update, and delete
 * records to and from the groceries collection
 * *********************************************/
const mongodb = require('../data/db');
const ObjectId = require('mongodb').ObjectId;

// GET ALL RECORDS IN GROCERIES COLLECTION
const getAllItems = async (req, res) => {
    //#swagger.tags=['Groceries']
    const result = await mongodb.getDb().db().collection('groceries').find();
    result.toArray().then((items) => {
        res.setHeader('Contents-Type', 'application/json');
        res.status(200).json(items);
    });
}

// GET ALL RECORDS IN A GIVEN CATEGORY
const getItemsByCat = async (req, res) => {
    //#swagger.tags=['Groceries']
    const grocCat = new ObjectId(req.params.category);
    const result = await mongodb.getDb().db().collection('groceries').find({category: grocCat});
    result.toArray().then((items) => {
        res.setHeader('Contents-Type', 'application/json');
        res.send(200).json(items);
    });
}

// POST NEW RECORD
const addItem = async (req, res) => {
    //#swagger.tags['Groceries']
    
}