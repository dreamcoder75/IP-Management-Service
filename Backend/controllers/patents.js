const Patent = require('../models/Patent');
const multer = require('multer');

exports.newPatents = async(req, res) => {
    
    console.log(req.body);
    const newPatent = new Patent(req.body)
    Patent.findOne({Application_no : req.body.Application_no})
    .then(data => {
        if(data){
            return res.status(422).json({ error : "This record is already created!" })
        }
        else {
            newPatent.save().then(data => {
                res.status(200).json({
                    status : "Success",
                    data
                })
            }).catch(err => {
                console.log(err)
                res.status(400).json({
                    status : "Failed",
                    message : err
                })
            })
        }
    }).catch(err => {
        res.status(500).json({
            message : [{ error : 'Something went wrong' }]
        });
    })
}

exports.getPatentsAll = async(req, res, next) => {

    try{
        const count = await Patent.countDocuments();
        // const {page = 1 , limit = 5} = req.query;
        await Patent.find({ ...req.query })
            // .limit(limit * 1)
            // .skip((page - 1) * limit)
            // .sort({ createdAt : -1 })
            .then(data => {
                if(!data.length){
                    res.status(401).json({
                        status : "There is no data"
                    })
                }
                else {
                    res.status(200).json({
                        status : "Success",
                        data,
                        // totalPages : Math.ceil(count / limit),
                        // currentPage : page
                    })
                }
            }).catch(err => res.status(400).json({ error : err}))
    } catch (err){
        next(err);
    }
}

exports.getPatentById = (req, res) => {
    Patent.findById(req.params.id, req.body)
        .then(data => {
            if(!data){
                res.status(400).json({
                    status: "No data"
                })
            }
            else{
                res.status(200).json({
                    status: "Success", 
                    data
                })
            }
        })
}

exports.updatePatents = (req, res) => {
        Patent.findByIdAndUpdate(req.params.id, req.body, {returnDocument : 'after'})
        .then(data => {
            if(!data){
                res.status(400).json({
                    status : "No data"
                })
            }
            else{
                res.status(200).json({
                    status : "Success",
                    data
                })
            }
        }).catch(err => res.status(400).json({ messasge : err }))
}

exports.deletePatents = (req, res) => {
    Patent.findByIdAndRemove(req.params.id, {returnDocument : 'before'})
    .then((data) => {
        if(!data) {
            res.status(400).json({
                status : "No data"
            })
        }
        else {
            res.status(200).json({
                status : "Success deleted",
                data
            })
        }
    }).catch(err => res.status(401).json({ message : err }))
}




