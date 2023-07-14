const mongoose = require('mongoose');

const patentSchema = new mongoose.Schema({
    Reference_no : {
        type : String,
        // required : true,
    },

    Patent_family : {
        type : String,
        required : true,
        enum : ["PF01", "PF02", "PF03"]
    },

    Application_no : {
        type : String,
        // required : true,
        unique:true
    },

    Jurisdiction : {
        type : String,
        required : true,
        enum : ["AU", "NZ", "US", "EU", "UK"]
    },

    Invention_title : {
        type : String,
        // required : true
    },

    Patent_Figures : {
        type : Array
    },

    Abstract : {
        type : String,
        // required : true
    },

    Earliest_Priority_Date : {
        type : Date
    },

    Patent_Application_Type : {
        type : String,
        required : true,
        enum : ["Provisional", "PCT", "Standard", "Divisional"]
    },

    Complete_Application_Deadline : {
        type : Number,
        required : true
    },

    International_Filing_Date : {
        type : Date
    },

    PCT_Application_No : {
        type : String
    },

    Priority_Application : {
        type : String
    },

    WIPO_Database : {
        type : String
    },

    National_Phase_Deadline : {
        type : Number
    },

    Convention_Deadline : {
        type : Number
    },

    Status : {
        type : String,
        required : true,
        enum : ["Pending Filing", "Filed", "Granted", "Lapsed"]
    },

    Application_Phase : {
        type : String,
        required : true,
        enum : ["International Phase", "National Phase", "Examined", "XR Issued", "Response Filed", "Accepted", "Opposition", "Granted"]
    },

    Published : {
        type : String,
        required : true,
        enum : ["Yes", "No"]
    },

    Publication_Date : {
        type : Date
    },

    Publication_No : {
        type : Number
    },

    Inventors : {
        type : String,
        // required : true
    },

    Official_Database : {
        type : String
    },

    Applicant : {
        type : String,
        // required : true
    },

    Applicant_address : {
        type : String,
        // required : true
    },

    IP_Firm : {
        type : String,
    },

    IP_Firm_Reference_No : {
        type : String
    },

    Address_for_services : {
        type : String
    },

    Responsible_Attorney: {
        type : String
    },

    Attachments : {
        type : Array
    },

    Patent_Anniversary : {
        type : Date
    },

    Next_Renewal : {
        type : Date
    },

    Deadlines : {
        type : Date,
    },

    Comments : {
        type : String
    },

    Costs : {
        type : Number,
        // required : true
    },

    Invoices : {
        type : String,
        // required : true
    }



});


module.exports = patent = mongoose.model('Patent', patentSchema);
