const mongoose = require('mongoose');

const trademarkSchema = new mongoose.Schema({
    Reference_no : {
        type : String,
        required : true
    },

    Trade_Mark_Family: {
        type : String,
        required : true
    },

    Trade_Mark_No : {
        type : String,
        required : true
    },

    Priority_Date : {
        type : Date,
        required : true
    },

    Filing_Date : {
        type : Date
    },

    Jurisdiction : {
        type : String,
        required : true,
        enum : ["AU", "NZ", "EU", "US", "UK"]
    },

    Status : {
        type : String,
        required : true,
        enum : ["Pending Filling", "Filled", "Published", "Examined", "Acceptance", "Opposition", "Registered"]
    },

    Trade_Mark_Representation : {
        type : String,
        required : true
    },

    Overseas : {
        type : Number,
        enum : [1, 0]
    },

    Convention_Deadline : {
        type : Number
    },

    First_Examination_Report : {
        type : Number,
        enum : [1, 0]
    },

    Date_of_First_Examiniation_Report : {
        type : Date,
    },

    First_Compliance_Report : {
        type : Number,
        enum : [1, 0]
    },

    Date_of_First_Compliance_Report : {
        type : Date
    },

    First_Office_Action : {
        type : Number,
        enum : [1, 0]
    },

    Date_of_First_Office_Action : {
        type : Date
    },

    Acceptance_Deadline : {
        Deadline : {
            type : Date
        },
        Jurisdiction : {
            type : String,
            enum : ["AU", "NZ", "US", "EU", "UK"]
        }
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

    Renewal_Deadline : {
        Deadline : {
            type : Date
        },

        Jurisdictions : {
            type : String,
            enum : ["AU", "NZ", "US", "EU", "UK"]
        }
    },

    Comments : {
        type : String,
        required : true
    },

    Costs : {
        type : Number,
        required : true
    },

    Invoices : {
        type : String,
    }
});

module.exports = trademark = mongoose.model('Trademark', trademarkSchema);
