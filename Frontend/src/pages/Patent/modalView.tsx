import ImagePreview from "./ImagePreview";
import ImageUploader from "./ImageUploader";
import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { ReactNotifications } from "react-notifications-component";
import CreatableSelect from "react-select/creatable";

import { base_URL } from "../../constants/config";
import { Store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";
// import 'animate.css';

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

const defaultPatentfamilyOptions = [
  createOption("PF01"),
  createOption("PF02"),
  createOption("PF03"),
];

const defaultJurisdictionOptions = [createOption("AU"), createOption("US")];

const defaultPatentApptypeOptions = [
  createOption("Provisional"),
  createOption("PCT"),
  createOption("Standard"),
  createOption("Divisional"),
];

const defaultIPfirmOptions = [createOption("IP Australia")];

const modalView = (props: any) => {
  const [reference_no, setReference_no] = useState("");

  const [patent_family, setPatent_family] = useState<Option | null>();
  const [patentfamilyOptions, setPatentfamilyOptions] = useState(
    defaultPatentfamilyOptions
  );

  const [application_no, setApplication_no] = useState("");
  const [jurisdiction, setJurisdiction] = useState<Option | null>();
  const [jurisdictionOptions, setJurisdictionOptions] = useState(
    defaultJurisdictionOptions
  );

  const [invention_title, setInvention_title] = useState("");
  const [abstract, setAbstract] = useState("");
  const [earliest_Priority_Date, setEarliest_Priority_Date] = useState("");

  const [patent_Application_Type, setPatent_Application_Type] =
    useState<Option | null>();
  const [patentApptypeOptions, setPatentApptypeOptions] = useState(
    defaultPatentApptypeOptions
  );

  const [complete_Application_Deadline, setComplete_Application_Deadline] =
    useState("");
  const [international_Filing_Date, setInternational_Filing_Date] =
    useState("");
  const [pct_Application_No, setPCT_Application_No] = useState("");
  const [priority_Application, setPriority_Application] = useState("");
  const [wipo_Database, setWIPO_Database] = useState("");
  const [national_Phase_Deadline, setNational_Phase_Deadline] = useState("");
  const [convention_Deadline, setConvention_Deadline] = useState("");
  const [status, setStatus] = useState("Pending Filing");
  const [application_Phase, setApplication_Phase] = useState(
    "International Phase"
  );
  const [published, setPublished] = useState("Yes");
  const [publication_Date, setPublication_Date] = useState("");
  const [publication_No, setPublication_No] = useState("");
  const [inventors, setInventors] = useState<readonly Option[]>([]);

  const [official_Database, setOfficial_Database] = useState("");
  const [applicant, setApplicant] = useState("");
  const [applicant_address, setApplicant_address] = useState("");

  const [ipfirmOptions, setIpfirmsOptions] = useState(defaultIPfirmOptions);
  const [ip_firm, setIp_firm] = useState<Option | null>();
  const [ip_firm_ref_no, setIp_firm_ref_no] = useState("");
  const [address_for_services, setAddress_for_services] = useState("");
  const [responsible_Attorney, setResponsible_Attorney] = useState<
    readonly Option[]
  >([]);
  const [patent_Anniversary, setPatent_Anniversary] = useState("");
  const [next_Renewal, setNext_Renewal] = useState("");
  const [deadlines, setDeadlines] = useState("");
  const [comments, setComments] = useState("");
  const [costs, setCosts] = useState("");

  const [inputPCTANdisabled, setInputPCTANdisabled] = useState(true);
  const [inputPAdisabled, setInputPAdisabled] = useState(true);
  const [inputWIPOdisabled, setInputWIPOdisabled] = useState(true);
  const [inputIFDdisabled, setInputIFDdisabled] = useState(true);
  const [inputNPDdisabled, setInputNPDdisabled] = useState(true);
  const [inputNRdisabled, setInputNRdisabled] = useState(false);

  const [inputPDdisable, setInputPDdisable] = useState(true);
  const [inputPNdisable, setInputPNdisable] = useState(true);

  const [errorMessage, setErrorMessage] = useState({
    reference_no: "",
    Application_no: "",
  });

  const validateInput = (type: any, value: any) => {
    if (type === "reference_no" && value.length < 1)
      setErrorMessage({
        ...errorMessage,
        reference_no: "Input must be at least 1 characters long.",
      });
    if (type === "Application_no" && value.length < 1)
      setErrorMessage({
        ...errorMessage,
        Application_no: "Input must be at least 1 characters long.",
      });
  };

  const handleReference_noChange = (data: any) => {
    setReference_no(data);
    validateInput("reference_no", data);
  };

  const handlePatent_familyChange = (data: any) => {
    setPatent_family(data);
  };

  const handlePatent_familyCreate = (data: any) => {
    setTimeout(() => {
      const newOption = createOption(data);
      setPatentfamilyOptions((prev: any) => [...prev, newOption]);
      setPatent_family(newOption);
    }, 1000);
  };

  const handleApplication_noChange = (data: any) => {
    setApplication_no(data);
    validateInput("Application_no", data);
  };

  const handleJurisdictionCreate = (data: any) => {
    setTimeout(() => {
      const newOption = createOption(data);
      setJurisdictionOptions((prev: any) => [...prev, newOption]);
      setJurisdiction(newOption);
    }, 1000);
  };

  const handleJurisdictionChange = (data: any) => {
    setJurisdiction(data);
  };

  const handleInvention_title = (data: any) => {
    setInvention_title(data);
  };

  const handleAbstractChange = (data: any) => {
    setAbstract(data);
  };

  const handleEarliest_Priority_DateChange = (data: any) => {
    setEarliest_Priority_Date(data);
    var Complete_Application_Deadline = new Date(data);
    // originDate.setMonth(originDate.getMonth() + 30);
    Complete_Application_Deadline.setFullYear(
      Complete_Application_Deadline.getFullYear() + 1
    );
    setComplete_Application_Deadline(
      moment(Complete_Application_Deadline).format("YYYY-MM-DD")
    );

    var Convention_Deadline = new Date(data);
    Convention_Deadline.setFullYear(Convention_Deadline.getFullYear() + 1);
    setConvention_Deadline(moment(Convention_Deadline).format("YYYY-MM-DD"));

    if (jurisdiction?.value === "AU") {
      var National_Phase_Deadline = new Date(data);
      National_Phase_Deadline.setMonth(National_Phase_Deadline.getMonth() + 30);
      setNational_Phase_Deadline(
        moment(National_Phase_Deadline).format("YYYY-MM-DD")
      );
    } else if (jurisdiction?.value === "US") {
      var National_Phase_Deadline = new Date(data);
      National_Phase_Deadline.setMonth(National_Phase_Deadline.getMonth() + 31);
      setNational_Phase_Deadline(
        moment(National_Phase_Deadline).format("YYYY-MM-DD")
      );
    }
  };

  const handlePatent_Application_TypeCreate = (data: any) => {
    setTimeout(() => {
      const newOption = createOption(data);
      setPatentApptypeOptions((prev: any) => [...prev, newOption]);
      setPatent_Application_Type(newOption);
    }, 500);
  };

  const handlePatent_Application_TypeChange = (data: any) => {
    setPatent_Application_Type(data);
    setInputPCTANdisabled(data.value !== "PCT");
    setInputPAdisabled(data.value === "Provisional");
    setInputWIPOdisabled(data.value !== "PCT");
    setInputIFDdisabled(data.value !== "PCT");
    setInputNPDdisabled(data.value !== "PCT");
    setInputNRdisabled(data.value === "Provisional");
  };

  const handleInternational_Filing_DateChange = (data: any) => {
    setInternational_Filing_Date(data);
    var next_Renewal = new Date(data);
    next_Renewal.setFullYear(next_Renewal.getFullYear() + 4);
    setNext_Renewal(moment(next_Renewal).format("YYYY-MM-DD"));
  };

  const handlePCT_Application_NoChange = (data: any) => {
    setPCT_Application_No(data);
  };

  const handlePriority_ApplicationChange = (data: any) => {
    setPriority_Application(data);
  };

  const handleWIPO_DatabaseChange = (data: any) => {
    setWIPO_Database(data);
  };

  const handleStatusChange = (data: any) => {
    setStatus(data);
  };

  const handleApplication_PhaseChange = (data: any) => {
    setApplication_Phase(data);
  };

  const handlePublishedChange = (data: any) => {
    setPublished(data);
    setInputPDdisable(data !== "Yes");
    setInputPNdisable(data !== "Yes");
  };

  const handlePublication_DateChange = (data: any) => {
    setPublication_Date(data);
  };

  const handlePublication_NoChange = (data: any) => {
    setPublication_No(data);
  };

  const handleInventorsChange = (newValue: any, actionMeta: any) => {
    if (actionMeta.action === "create-option") {
      const newOption = {
        value: actionMeta.option.label,
        label: actionMeta.option.label,
      };
      setInventors((prevSelectedOptions) => [
        ...prevSelectedOptions,
        newOption,
      ]);
    } else {
      setInventors(newValue);
    }
  };

  const handleOfficial_DatabaseChange = (data: any) => {
    setOfficial_Database(data);
  };

  const handleApplicantChange = (data: any) => {
    setApplicant(data);
  };

  const handleApplicant_addressChange = (data: any) => {
    setApplicant_address(data);
  };

  const handleIP_FirmChange = (data: any) => {
    setIp_firm(data);
  };

  const handleIP_FirmCreate = (data: any) => {
    setTimeout(() => {
      const newOption = createOption(data);
      setIpfirmsOptions((prev: any) => [...prev, newOption]);
      setIp_firm(newOption);
    }, 1000);
  };

  const handleIP_Firm_Reference_NoChange = (data: any) => {
    setIp_firm_ref_no(data);
  };

  const handleAddress_for_servicesChange = (data: any) => {
    setAddress_for_services(data);
  };

  const handleResponsible_AttorneyChange = (data: any, actionMeta: any) => {
    // setResponsible_Attorney(data);

    if (actionMeta.action === "create-option") {
      const newOption = {
        value: actionMeta.option.label,
        label: actionMeta.option.label,
      };
      setResponsible_Attorney((prevSelectedOptions) => [
        ...prevSelectedOptions,
        newOption,
      ]);
    } else {
      setResponsible_Attorney(data);
    }
  };

  const handlePatent_AnniversaryChange = (data: any) => {
    setPatent_Anniversary(data);
  };

  const handleNext_RenewalChange = (data: any) => {
    setNext_Renewal(data);
  };

  const handleDeadlinesChange = (data: any) => {
    setDeadlines(data);
  };

  const handleCommentsChange = (data: any) => {
    setComments(data);
  };

  const handleCostsChange = (data: any) => {
    setCosts(data);
  };

  const [images, setImages] = useState<FileList | null>(null);
  const [attachments, setAttachments] = useState<FileList | null>(null);
  const [invoices, setInvoices] = useState<FileList | null>(null);
  const uploadimages = images ? [...images] : [];
  const uploadattachments = attachments ? [...attachments] : [];
  const uploadinvoices = invoices ? [...invoices] : [];

  const handleAttachmentsSelected = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAttachments(e.target.files);
  };

  const handleInvoicesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoices(e.target.files);
  };

  const handleimageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files);
  };

  const handleNewPatent = async (e: any) => {
    e.preventDefault();
    validateInput("reference_no", reference_no);

    console.log("+++++++++++++", complete_Application_Deadline);
    if (reference_no.length > 0 && application_no.length > 0) {
      const formData = new FormData();
      uploadattachments.forEach((attachments) => {
        formData.append(`attachments`, attachments, attachments.name);
      });

      uploadimages.forEach((image) => {
        formData.append(`images`, image, image.name);
      });

      uploadinvoices.forEach((invoices) => {
        formData.append(`invoices`, invoices, invoices.name);
      });

      formData.append("attachmentnumber", uploadattachments.length.toString());
      formData.append("imagenumber", uploadimages.length.toString());
      formData.append("invoicenumber", uploadinvoices.length.toString());
      formData.append("Reference_no", reference_no);
      formData.append("Patent_family", JSON.stringify(patent_family));
      formData.append("Application_no", application_no);
      formData.append("Jurisdiction", JSON.stringify(jurisdiction));
      formData.append("Invention_title", invention_title);
      formData.append("Abstract", abstract);
      formData.append("Earliest_Priority_Date", earliest_Priority_Date);
      formData.append(
        "Patent_Application_Type",
        JSON.stringify(patent_Application_Type)
      );
      formData.append(
        "Complete_Application_Deadline",
        complete_Application_Deadline
      );
      formData.append("International_Filing_Date", international_Filing_Date);
      formData.append("PCT_Application_No", pct_Application_No);
      formData.append("Priority_Application", priority_Application);
      formData.append("WIPO_Database", wipo_Database);
      formData.append("National_Phase_Deadline", national_Phase_Deadline);
      formData.append("Convention_Deadline", convention_Deadline);
      formData.append("Status", status);
      formData.append("Application_Phase", application_Phase);
      formData.append("Published", published);
      formData.append("Publication_Date", publication_Date);
      formData.append("Publication_No", publication_No);
      formData.append("Inventors", JSON.stringify(inventors));
      formData.append("Official_Database", official_Database);
      formData.append("Applicant", applicant);
      formData.append("Applicant_address", applicant_address);
      formData.append("IP_Firm", JSON.stringify(ip_firm));
      formData.append("IP_Firm_Reference_No", ip_firm_ref_no);
      formData.append("Address_for_services", address_for_services);
      formData.append(
        "Responsible_Attorney",
        JSON.stringify(responsible_Attorney)
      );
      formData.append("Patent_Anniversary", patent_Anniversary);
      formData.append("Next_Renewal", next_Renewal);
      formData.append("Deadlines", deadlines);
      formData.append("Comments", comments);
      formData.append("Costs", costs);

      axios
        .post(`${base_URL}/patent/newPatents`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            Store.addNotification({
              title: "Success",
              message: "New Patent was Created Successfully",
              type: "success",
              insert: "top",
              container: "top-center",
              animationIn: ["animated", "fadeIn"],
              animationOut: ["animated", "fadeOut"],
              width: 300,
              dismiss: {
                duration: 1000,
                onScreen: true,
              },
            });
          }
        })
        .catch((err) => {
          console.log(err.response.status);
          if (err.response.status == 422) {
            Store.addNotification({
              title: "Warning",
              message: "This Patent is already created!",
              type: "warning",
              insert: "top",
              container: "top-center",
              animationIn: ["animated", "fadeIn"],
              animationOut: ["animated", "fadeOut"],
              width: 300,
              dismiss: {
                duration: 1000,
                onScreen: true,
              },
            });
          }
        });
    }
  };

  return (
    <>
      <div className="app-container fixed inset-0 z-10 bg-black/90">
        <div className="flex min-h-screen items-baseline justify-center pb-12 pt-20">
          <ReactNotifications />
          <div
            className="bg-gray-500 fixed inset-0 bg-opacity-75"
            onClick={props.setToggleModal}
          ></div>

          <div className="xs:w-4/5 mt-4 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all dark:bg-boxdark md:w-[600px]">
            <div className="py-6 pl-8 pr-2">
              <div className="text-center text-3xl font-bold">New Patent</div>
              <div style={{ height: "74vh", overflow: "auto" }}>
                <div>
                  <label className="text-sm">Reference No</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleReference_noChange(e.target.value);
                    }}
                  />
                  {errorMessage.reference_no && (
                    <p className=" text-danger">{errorMessage.reference_no}</p>
                  )}
                </div>

                <div className="py-2">
                  <label className="text-sm">Application No</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    // disabled
                    onChange={(e) => {
                      handleApplication_noChange(e.target.value);
                    }}
                  />
                  {errorMessage.Application_no && (
                    <p className=" text-danger">
                      {errorMessage.Application_no}
                    </p>
                  )}
                </div>

                <div className="py-2">
                  <label className="text-sm">Patent Family</label>
                  <CreatableSelect
                    options={patentfamilyOptions}
                    isClearable
                    onChange={handlePatent_familyChange}
                    onCreateOption={handlePatent_familyCreate}
                    value={patent_family}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Jurisdiction</label>
                  <CreatableSelect
                    options={jurisdictionOptions}
                    onChange={handleJurisdictionChange}
                    onCreateOption={handleJurisdictionCreate}
                    value={jurisdiction}
                    placeholder="Select or create an Jurisdiction..."
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Invention Title</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition  focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleInvention_title(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Patent Figures</label>
                  <ImageUploader
                    accept="image/png, image/jpeg"
                    onChange={handleimageSelected}
                    multiple
                  />
                  <ImagePreview images={uploadimages} />
                </div>

                <div className="py-2">
                  <label className="text-sm">Abstract</label>
                  <textarea
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    placeholder="Your message... "
                    onChange={(e) => {
                      handleAbstractChange(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="py-2">
                  <label className="text-sm">Earliest Priority Date</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleEarliest_Priority_DateChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Patent Application Type </label>
                  <CreatableSelect
                    options={patentApptypeOptions}
                    onChange={handlePatent_Application_TypeChange}
                    onCreateOption={handlePatent_Application_TypeCreate}
                    value={patent_Application_Type}
                    placeholder="Select or create an Patent Application Type..."
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">
                    Complete Application Deadline
                  </label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    // onChange={(e) => {handleComplete_Application_DeadlineChange(e.target.value)}}
                    value={complete_Application_Deadline}
                    readOnly
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">International Filing Date</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputIFDdisabled}
                    onChange={(e) => {
                      handleInternational_Filing_DateChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">PCT Application No</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputPCTANdisabled}
                    onChange={(e) => {
                      handlePCT_Application_NoChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Priority Application</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputPAdisabled}
                    onChange={(e) => {
                      handlePriority_ApplicationChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">WIPO Database</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputWIPOdisabled}
                    onChange={(e) => {
                      handleWIPO_DatabaseChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">National Phase Deadline</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputNPDdisabled}
                    value={national_Phase_Deadline}
                    readOnly
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Convention Deadline</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={convention_Deadline}
                    readOnly
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Status </label>
                  <select
                    id="Status"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleStatusChange(e.target.value);
                    }}
                  >
                    <option defaultValue="Pending Filing">
                      Pending Filing
                    </option>
                    <option value="Filed">Filed</option>
                    <option value="Granted">Granted</option>
                    <option value="Lapsed">Lapsed</option>
                  </select>
                </div>

                <div className="py-2">
                  <label className="text-sm">Application Phase</label>
                  <select
                    id="Application Phase"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleApplication_PhaseChange(e.target.value);
                    }}
                  >
                    <option defaultValue="International Phase">
                      International Phase
                    </option>
                    <option value="National Phase">National Phase</option>
                    <option value="Examined">Examined</option>
                    <option value="XR Issued">XR Issued</option>
                    <option value="Response Filed">Response Filed</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Opposition">Opposition</option>
                    <option value="Granted">Granted</option>
                  </select>
                </div>

                <div className="py-2">
                  <label className="text-sm">Published</label>
                  <select
                    id="Published"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handlePublishedChange(e.target.value);
                    }}
                  >
                    <option defaultValue="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="py-2">
                  <label className="text-sm">Publication Date </label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handlePublication_DateChange(e.target.value);
                    }}
                    disabled={inputPDdisable}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Publication No</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handlePublication_NoChange(e.target.value);
                    }}
                    disabled={inputPNdisable}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Inventors</label>
                  <CreatableSelect
                    isMulti
                    value={inventors}
                    onChange={handleInventorsChange}
                    isClearable
                    placeholder="Select inventors..."
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Offical Database</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleOfficial_DatabaseChange(e.target.value);
                    }}
                  />
                  {/* <a href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2023901260" className="bg-meta-3 text-white px-4 py-2 rounded inline-block hover:bg-blue-800">Offical Database</a> */}
                </div>

                <div className="py-2">
                  <label className="text-sm">Applicant</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleApplicantChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Applicant Address</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleApplicant_addressChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">IP Firm</label>
                  <CreatableSelect
                    options={ipfirmOptions}
                    onChange={handleIP_FirmChange}
                    onCreateOption={handleIP_FirmCreate}
                    value={ip_firm}
                    placeholder="Select or create an IP Firm..."
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">IP Firm Reference No</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleIP_Firm_Reference_NoChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Address for services</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleAddress_for_servicesChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Responsible Attorney</label>
                  <CreatableSelect
                    isMulti
                    value={responsible_Attorney}
                    onChange={handleResponsible_AttorneyChange}
                    isClearable
                    placeholder="Select Responsible Attorney..."
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Patent Anniversary</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px]   border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handlePatent_AnniversaryChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Next Renewal</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputNRdisabled}
                    value={next_Renewal}
                    onChange={(e) => {
                      handleNext_RenewalChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Deadlines</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      handleDeadlinesChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Comments</label>
                  <textarea
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    placeholder="Your message... "
                    onChange={(e) => {
                      handleCommentsChange(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="py-2">
                  <label className="text-sm">Costs</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary "
                    onChange={(e) => {
                      handleCostsChange(e.target.value);
                    }}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Attachments</label>
                  <ImageUploader
                    accept="file/*"
                    onChange={handleAttachmentsSelected}
                    multiple
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Invoices</label>
                  <ImageUploader
                    accept="file/*"
                    onChange={handleInvoicesSelected}
                    multiple
                  />
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={handleNewPatent}
                  className="bg-red-500 mt-4 rounded border border-solid px-4 py-2"
                >
                  Create Patent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default modalView;
