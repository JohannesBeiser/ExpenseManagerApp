const express = require('express');
const router = express.Router();
const config = require('../config/database');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


//Register
router.post('/register', function (req, res, next) {
    const newUser = new User({
        nextExpenseDataId: req.body.nextExpenseDataId,
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    User.addUser(newUser, function (err, user) {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        }else{
            res.json({success: true, msg: 'User registered'});
        }
    });

});


router.post('/addExpense', function (req, res, next) { // username weglassen und nur new expense schicken geht
    var username = req.body.usr;
    const newExpense = {
        expenseId: req.body.ex.expenseId,
        value : req.body.ex.value,
        category : req.body.ex.category,
        date : req.body.ex.date,
        description : req.body.ex.description
    };
    User.addExpenseToUser(newExpense,username, function (err, user) {
        if(err){
            res.json({success: false, msg: 'Failed to add Expense'});
        }else{
            res.json({success: true, msg: 'Expense added'});
        }
    });
});


router.post('/editExpense', function (req, res, next) { // username weglassen und nur new expense schicken geht
    var username = req.body.usr;
    var expenseId = req.body.exId;
    const newExpense = {
        expenseId: req.body.ex.expenseId,
        value : req.body.ex.value,
        category : req.body.ex.category,
        date : req.body.ex.date,
        description : req.body.ex.description
    };
    User.editExpense(newExpense,expenseId,username, function (err, user) {
        if(err){
            res.json({success: false, msg: 'Failed to edit Expense'});
        }else{
            res.json({success: true, msg: 'Expense edited'});
        }
    });
});




router.post('/deleteExpense', function (req, res, next) {
    var username = req.body.username;
    var index = req.body.index

    User.deleteExpense(index,username, function (err, user) {
        if(err){
            res.json({success: false, msg: 'Failed to reset Database'});
        }else{
            res.json({success: true, msg: 'Database cleared'});
        }
    })
});




router.post('/resetDatabase', function (req, res, next) {
    var username = req.body.username;
    User.resetDatabase(username, function (err, user) {
        if(err){
            res.json({success: false, msg: 'Failed to reset Database'});
        }else{
            res.json({success: true, msg: 'Database cleared'});
        }
    })
});


router.post('/initDatabase', function (req, res, next) {
    var username = req.body.username;
    User.initDatabase(username, function (err, user) {
        if(err){
            res.json({success: false, msg: 'Failed to init Database'});
        }else{
            res.json({success: true, msg: 'Database initiated'});
        }
    })
});




//Authenticate
router.post('/authenticate', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, function (err, user) {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password, function (err, isMatch) {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user, config.secret,{
                    expiresIn: 604800 // 1 Week
                });
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else{
                return res.json({success: false, msg: 'Wrong Password '});
            }
        })
    })
});

//Profile
router.get('/profile',passport.authenticate('jwt', {session: false}), function (req, res, next) {
    res.json({user: req.user});
});




module.exports =router;
