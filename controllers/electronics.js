/*****************************************  
 Functions to create, get, update, and delete
 records to and from the electronics section
 ******************************************/

const mongodb = require('../data/db');
const ObjectId = require('mongodb').ObjectId;

// GET ONE ITEM IN THE ELECTRONICS INVENTORY
const getOneInventItem = async (req, res) => {
    const result = await mongodb.getDb().db().collection('electronics').find()
    result.toArray().then((electronics) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(electronics);
    })
};

// GET MULTIPLE ITEMS IN THE ELECTRONICS INVENTORY
const getMultiInventItems = async (req, res) => {
    const electId = new ObjectId(req.params.id)
    const result = await mongodb.getDb().db().collection('electronics').find()
    result.toArray().then((electronics) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(electronics);
    })
};

// GET ELECTRONICS INVENTORY ITEM BY CATEGORY
const getInventByCat = async (req, res) => {
    const inventCat = new ObjectId(req.params.category)
    const result = await mongodb.getDb().db().collection('electronics').find({category: inventCat});
    result.toArray.then((electronics) => {
        res.SetHeader('Content-Type', 'application/json')
        res.status(200).json(electronics);
    })
}