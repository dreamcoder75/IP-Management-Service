const mongoose = require("mongoose");

const patentSchema = new mongoose.Schema({
  Reference_no: {
    type: String,
    required: true,
  },

  Patent_family: {
    type: String,
    // required : true,
  },

  Application_no: {
    type: String,
    required: true,
    unique: true,
  },

  Jurisdiction: {
    type: String,
    // required : true,
  },

  Invention_title: {
    type: String,
    // required : true
  },

  Patent_Figures: {
    type: Array,
  },

  Abstract: {
    type: String,
    // required : true
  },

  Earliest_Priority_Date: {
    type: Date,
  },

  Patent_Application_Type: {
    type: String,
    // required : true,
  },

  Complete_Application_Deadline: {
    type: Date,
    // required : true
  },

  International_Filing_Date: {
    type: Date,
  },

  PCT_Application_No: {
    type: String,
  },

  Priority_Application: {
    type: String,
  },

  WIPO_Database: {
    type: String,
  },

  National_Phase_Deadline: {
    type: String,
  },

  Convention_Deadline: {
    type: Date,
  },

  Status: {
    type: String,
    // required : true,
  },

  Application_Phase: {
    type: String,
    // required : true,
  },

  Published: {
    type: String,
    // required : true,
  },

  Publication_Date: {
    type: Date,
  },

  Publication_No: {
    type: Number,
  },

  Inventors: {
    type: Array,
    // required : true
  },

  Official_Database: {
    type: String,
  },

  Applicant: {
    type: String,
    // required : true
  },

  Applicant_address: {
    type: String,
    // required : true
  },

  IP_Firm: {
    type: String,
  },

  IP_Firm_Reference_No: {
    type: String,
  },

  Address_for_services: {
    type: String,
  },

  Responsible_Attorney: {
    type: Array,
  },

  Attachments: {
    type: Array,
  },

  Patent_Anniversary: {
    type: Date,
  },

  Next_Renewal: {
    type: Date,
  },

  Deadlines: {
    type: Date,
  },

  Comments: {
    type: String,
  },

  Costs: {
    type: Number,
    // required : true
  },

  Invoices: {
    type: Array,
    // required : true
  },
});

module.exports = patent = mongoose.model("Patent", patentSchema);
