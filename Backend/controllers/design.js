const Design = require('../models/Design');

exports.newDesigns = async(req, res) => {
    const newDesign = new Design(req.body)
    try{
        await newDesign.save()
        res.status(200).json({
            status: 'Success',
            data : {
                newDesign
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failure',
            messge:err
        })
    }
}
