const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
    Reference_no : {
        type : String,
        required : true
    },

    Design_Family : {
        type : String,
        required : true
    },

    Design_Application_No : {
        type : String,
        required : true
    },

    Priority_Date : {
        type : Date,
    },

    Filing_Date : {
        type : Date,
    },

    Representations : {
        type : String
    },

    SoND : {
        type : String
    },

    Jurisdiction : {
        type : String,
        required : true,
        enum : ["AU", "NZ", "EU", "US", "UK"]
    },

    Status : {
        type : String,
        required : true,
        enum : ["Pending Filling", "Filed", "Published", "Examined", "Registered", "Certified"]
    },

    Designers : {
        type : String,
        required : true
    },

    Official_Database : {
        type : String
    },

    Applicant : {
        type : String,
        required : true
    },

    Applicant_Address : {
        type : String,
        required : true
    },

    IP_Firm : {
        type : String
    },

    IP_Firm_Reference_No : {
        No : {
            type: Number,
            required : true
        },
        URL : {
            type : String,
            required : true
        }
    },

    Address_for_services : {
        type : String
    },

    Responsible_Attorney : {
        type : String,
        required : true
    },

    Attachments : {
        type : String
    },

    Max_registration_period_ends : {
        type : Number,
        enum : [10]
    },

    Currently_registered_until : {
        type : Number,
    },

    Registration_Date : {
        type : Date
    },

    Costs : {
        type : Number,
        required : true
    },

    Invoices : {
        type : String,
    },

    Comments : {
        type : String
    }
});

module.exports = design = mongoose.model('Design', designSchema);
