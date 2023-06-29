const Trademark = require('../models/Trademark');

exports.newTrademarks = async(req, res) => {
    const newTrademark = new Trademark(req.body)
    try{
        await newTrademark.save()
        res.status(200).json({
            status: 'Success',
            data : {
                newTrademark
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failure',
            message: err
        })
    }
}
