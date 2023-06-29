const Patent = require('../models/Patent');

exports.newPatents = (req, res) => {
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

exports.getPatentsAll = (req, res) => {
    Patent.find()
        .then(data => {
            if(!data.length){
                res.status(401).json({
                    status : "There is no data"
                })
            }
            else {
                res.status(200).json({
                    status : "Success",
                    data
                })
            }
        }).catch(err => res.status(400).json({ error : err}))
}

exports.updatePatents = (req, res) => {
    Patent.findByIdAndUpdate(req.params.id, req.body)
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
        })
}

exports.deletePatents = (req, res) => {

}


