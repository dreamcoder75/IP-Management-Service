const Patent = require('../models/Patent');

exports.newPatents = async(req, res) => {
    const imagesfilename = [];
    const attachmentsfilename = [];
    const invoicesfilename = [];
    
    if(req.files.images.length > 0){
        for(let i=0; i<req.files.images.length;i++){
            imagesfilename.push(req.files.images[i].filename);
        } 
    }else{
        imagesfilename = [];
    }

    if(req.files.attachments.length > 0){
        for(let i=0; i<req.files.attachments.length; i++){
            attachmentsfilename.push(req.files.attachments[i].filename);
        }
    }else{
        attachmentsfilename = [];
    }

    if(req.files.invoices.length > 0){
        for(let i=0; i<req.files.invoices.length; i++){
            invoicesfilename.push(req.files.invoices[i].filename);
        }
    }else{
        invoicesfilename = [];
    }

    const newPatent = new Patent({
        Reference_no : req.body.Reference_no,
        Patent_family : JSON.parse(req.body.Patent_family === 'undefined' ? '{}': req.body.Patent_family),
        Application_no : req.body.Application_no,
        Jurisdiction : JSON.parse(req.body.Jurisdiction === 'undefined' ? '{}': req.body.Jurisdiction),
        Invention_title : req.body.Invention_title,
        Patent_Figures : imagesfilename,
        Abstract : req.body.Abstract,
        Earliest_Priority_Date : req.body.Earliest_Priority_Date,
        Patent_Application_Type : JSON.parse(req.body.Patent_Application_Type === 'undefined' ? '{}': req.body.Patent_Application_Type),
        Complete_Application_Deadline : req.body.Complete_Application_Deadline,
        International_Filing_Date : req.body.International_Filing_Date,
        PCT_Application_No : req.body.PCT_Application_No,
        Priority_Application : req.body.PCT_Application_No,
        WIPO_Database : req.body.WIPO_Database,
        National_Phase_Deadline : req.body.National_Phase_Deadline,
        Convention_Deadline : req.body.Convention_Deadline,
        Status : req.body.Status,
        Application_Phase : req.body.Application_Phase,
        Published : req.body.Published,
        Publication_Date : req.body.Publication_Date,
        Publication_No : req.body.Publication_No,
        Inventors : JSON.parse(req.body.Inventors),
        Official_Database : req.body.Official_Database,
        Applicant : req.body.Applicant,
        Applicant_address : req.body.Applicant_address,
        IP_Firm : JSON.parse(req.body.IP_Firm === 'undefined' ? '{}': req.body.IP_Firm),
        IP_Firm_Reference_No : req.body.IP_Firm_Reference_No,
        Address_for_services : req.body.Address_for_services,
        Responsible_Attorney : JSON.parse(req.body.Responsible_Attorney),
        Attachments : attachmentsfilename,
        Patent_Anniversary : req.body.Patent_Anniversary,
        Next_Renewal : req.body.Next_Renewal,
        Deadlines : req.body.Deadlines,
        Comments : req.body.Comments,
        Costs : req.body.Costs,
        Invoices : invoicesfilename
    });
    
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




