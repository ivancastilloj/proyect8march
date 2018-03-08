var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contacto = require('../models/Contacto.js');

/* GET ALL Contactos */
router.get('/', function(req, res, next) {
    Contacto.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Contacto BY ID */
router.get('/', function(req, res, next) {
    Contacto.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Contacto */
router.post('/', function(req, res, next) {
    Contacto.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;