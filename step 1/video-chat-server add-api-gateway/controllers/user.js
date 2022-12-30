const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const { v4: uuid } = require('uuid');
const {jwt} = require("../config/keys");
const errorHandler = require("../utils/errorHandler");
const Notes = require("../models/Notes");



module.exports.create = async function (req, res) {
    // email(unique or error)
    // password
    // if(!req.body.email || !req.body.password) return res.status(404).json({
    //     message: 'Bad data'
    // })
    const candidate = await User.findOneAndUpdate({email: req.body.email});
    if(candidate){
        res.status(409).json({ message: 'This email already exists' });
    }else{
        const salt = bcrypt.genSaltSync(9);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
            nickname: req.body.email,
            roles: req.body?.roles || ['user']
        });
        try{
            await user.save()
            res.status(201).json({
                message: 'User created'
            })
        }catch (e) {
            errorHandler(res, e)
        }
    }
}




module.exports.updateInfo = async function (req, res) {

    const candidate = await User.findOneAndUpdate({email: req.body.email}, { $pull: req.body.updateObj })
    if(candidate){
        res.status(200).json({
            message: 'Updated'
        })
    }
    else{
        res.status(403).json({
            message: 'Updating error'
        })
    }
}



module.exports.createNote = async function (req, res) {

    const note = new Notes({
        id: uuid(),
        title: req.body.title,
        content: req.body.content,
        date: Date.now(),
    });

    const candidate = await User.findOneAndUpdate({email: req.body.email}, { $push: { notes: note } })
    if(candidate){
        res.status(200).json({
            message: 'Note Created'
        })
    }
    else{
        res.status(403).json({
            message: 'Note Creating error'
        })
    }
}
