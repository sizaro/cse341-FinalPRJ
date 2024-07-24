/*****************************************  
 Functions to create, get, update, and delete
 records to and from the electronics section
 ******************************************/

const mongodb = require('../data/db');
const ObjectId = require('mongodb').ObjectId;

// GET ONE ITEM IN THE ELECTRONICS INVENTORY
const getOneInventItem = async (req, res) => {
    //#swagger.tags=['Electronics']
    const electId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('electronics').find({_id: electId});
    result.toArray().then((electronics) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(electronics);
    })
};

// GET MULTIPLE ITEMS IN THE ELECTRONICS INVENTORY
const getMultiInventItems = async (req, res) => {
    //#swagger.tags=['Electronics']
    const result = await mongodb.getDb().db().collection('electronics').find();
    result.toArray().then((electronics) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(electronics);
    })
};

const addInvent = async (req, res) => {
    //#swagger.tags=['Electronics']
    const invent = {
        item: req.body.item,
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        color: req.body.color,
        price: req.body.price,
        modelNum: req.body.modelNum,
        serialNum: req.body.serialNum,
        description: req.body.description,
    };
    const response = await mongodb.getDb().db().collection('electronics').insertOne({invent});
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `An error occured while creating the inventory.`);
    }
};

const updateInvent = async (req, res) => {
    //#swagger.tags=['Electronics']
    const inventId = new ObjectId(req.params.id);
    const invent = {
        item: req.body.item,
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        color: req.body.color,
        price: req.body.price,
        modelNum: req.body.modelNum,
        serialNum: req.body.serialNum,
        description: req.body.description,
    };
    const response = await mongodb.getDb().db().collection('electronics').replaceOne({_id: inventId}, invent);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `An error occured while updating the inventory.`);
    }
};

const deleteInvent = async (req, res) => {
    //#swagger.tags=['Electronics']
    const inventId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('electronics').deleteOne({_id: inventId});
    if (response.deletedCount > 0) {
        res.status(204).send(); 
    } else {
        res.status(500).json(response.error || 'Some error occured while deleting inventory');
    }
};

module.exports = {
    getOneInventItem,
    getMultiInventItems,
    addInvent,
    updateInvent,
    deleteInvent
}