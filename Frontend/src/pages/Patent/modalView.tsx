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
// import { ValueContainer } from "react-select/animated";
// import 'animate.css';

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
  const [patentValue, setPatentValue] = useState<any>();
  const [patentfamilyOptions, setPatentfamilyOptions] = useState(
    defaultPatentfamilyOptions
  );
  const [jurisdictionOptions, setJurisdictionOptions] = useState(
    defaultJurisdictionOptions
  );
  const [patentApptypeOptions, setPatentApptypeOptions] = useState(
    defaultPatentApptypeOptions
  );
  const [ipfirmOptions, setIpfirmsOptions] = useState(defaultIPfirmOptions);
  const optionValues = Array.from({ length: 20 }, (_, index) => index + 1);

  const [inputANdisabled, setInputANdisabled] = useState(false);
  const [inputPCTANdisabled, setInputPCTANdisabled] = useState(true);
  const [inputPAdisabled, setInputPAdisabled] = useState(true);
  const [inputIFDdisabled, setInputIFDdisabled] = useState(true);
  const [inputNPDdisabled, setInputNPDdisabled] = useState(true);
  const [inputNRdisabled, setInputNRdisabled] = useState(false);
  // const [inputPDdisable, setInputPDdisable] = useState(true);
  // const [inputPNdisable, setInputPNdisable] = useState(true);
  const [inputWIPOdisabled, setInputWIPOdisabled] = useState(true);
  const [inputSNPDdisabled, setInputSNPDdisabled] = useState(true);

  const [images, setImages] = useState<FileList | null>(null);
  const [attachments, setAttachments] = useState<FileList | null>(null);
  const [invoices, setInvoices] = useState<FileList | null>(null);

  const uploadimages = images ? [...images] : [];
  const uploadattachments = attachments ? [...attachments] : [];
  const uploadinvoices = invoices ? [...invoices] : [];

  const handlePatent_familyCreate = (data: any) => {
    setTimeout(() => {
      const newOption = createOption(data);
      setPatentfamilyOptions((prev: any) => [...prev, newOption]);
      setPatentValue({ ...patentValue, Patent_family: newOption.value });
    }, 1000);

    console.log("*********", patentValue);
  };

  const handleJurisdictionCreate = (data: any) => {
    setTimeout(() => {
      const newOption = createOption(data);
      setJurisdictionOptions((prev: any) => [...prev, newOption]);
      setPatentValue({ ...patentValue, Jurisdiction: newOption.value });
    }, 1000);
  };

  const handlePatent_Application_TypeCreate = (data: any) => {
    setTimeout(() => {
      const newOption = createOption(data);
      setPatentApptypeOptions((prev: any) => [...prev, newOption]);
      setPatentValue({
        ...patentValue,
        Patent_Application_Type: newOption.value,
      });
    }, 500);
  };

  const handleIP_FirmCreate = (data: any) => {
    setTimeout(() => {
      const newOption = createOption(data);
      setIpfirmsOptions((prev: any) => [...prev, newOption]);
      setPatentValue({ ...patentValue, IP_Firm: newOption.value });
    }, 1000);
  };

  const handleNewPatent = async (e: any) => {
    e.preventDefault();
    console.log("$$$$$$$$$$$$$$$$$", patentValue);
    const patentData = new FormData();
    uploadattachments.forEach((attachments) => {
      patentData.append(`attachments`, attachments, attachments.name);
    });

    uploadimages.forEach((image) => {
      patentData.append(`images`, image, image.name);
    });

    uploadinvoices.forEach((invoices) => {
      patentData.append(`invoices`, invoices, invoices.name);
    });

    Object.entries(patentValue).forEach((item: any) => {
      console.log(item);

      if (typeof item === "object") {
        if (item[0] === "Inventors") {
          const convertInventorsString = item[1]
            .map((value: any) => JSON.stringify(value))
            .join("/*/");
          console.log(convertInventorsString);
          patentData.append(item[0], convertInventorsString);
        } else if (item[0] === "Responsible_Attorney") {
          const convertRAString = item[1]
            .map((value: any) => JSON.stringify(value))
            .join("/*/");
          console.log("@@@@@@@@@@@@@@@@", convertRAString);
          patentData.append(item[0], convertRAString);
        } else patentData.append(item[0], item[1]);
      } else {
        patentData.append(item[0], item[1]);
      }
    });

    console.log("++++++++++++++++++", patentData);
    axios
      .post(`${base_URL}/patent/newPatents`, patentData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.status);
        if (res.status == 200) {
          props.getPatentAll();
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
                      setPatentValue({
                        ...patentValue,
                        Reference_no: e.target.value,
                      });
                    }}
                    value={patentValue?.Reference_no || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Application No</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    // disabled
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Application_no: e.target.value,
                      });
                    }}
                    value={patentValue?.Application_no || ""}
                    disabled={inputANdisabled}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Patent Family</label>
                  <CreatableSelect
                    options={patentfamilyOptions}
                    isClearable
                    onChange={(newValue: any) => {
                      setPatentValue({
                        ...patentValue,
                        Patent_family: newValue?.value,
                      });
                    }}
                    onCreateOption={handlePatent_familyCreate}
                    value={
                      patentValue?.Patent_family
                        ? {
                            label: patentValue.Patent_family,
                            value: patentValue.Patent_family,
                          }
                        : ""
                    }
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Jurisdiction</label>
                  <CreatableSelect
                    options={jurisdictionOptions}
                    onChange={
                      // handleJurisdictionChange
                      (newValue: any) =>
                        setPatentValue({
                          ...patentValue,
                          Jurisdiction: newValue?.value,
                        })
                    }
                    onCreateOption={handleJurisdictionCreate}
                    value={
                      patentValue?.Jurisdiction
                        ? {
                            label: patentValue.Jurisdiction,
                            value: patentValue.Jurisdiction,
                          }
                        : ""
                    }
                    placeholder="Select or create an Jurisdiction..."
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Invention Title</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition  focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Invention_title: e.target.value,
                      });
                    }}
                    value={patentValue?.Invention_title || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Patent Figures</label>
                  <ImageUploader
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      setImages(e.target.files);
                    }}
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
                      setPatentValue({
                        ...patentValue,
                        Abstract: e.target.value,
                      });
                    }}
                    value={patentValue?.Abstract || ""}
                  ></textarea>
                </div>

                <div className="py-2">
                  <label className="text-sm">Earliest Priority Date</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      var newDate = new Date(e.target.value);
                      newDate.setMonth(newDate.getMonth() + 12);
                      setPatentValue({
                        ...patentValue,
                        Earliest_Priority_Date: e.target.value,
                        Complete_Application_Deadline:
                          moment(newDate).format("YYYY-MM-DD"),
                        Convention_Deadline:
                          moment(newDate).format("YYYY-MM-DD"),
                      });
                    }}
                    value={patentValue?.Earliest_Priority_Date || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Patent Application Type </label>
                  <CreatableSelect
                    options={patentApptypeOptions}
                    onChange={(newValue: any) => {
                      setPatentValue({
                        ...patentValue,
                        Patent_Application_Type: newValue.value,
                      });
                      if (newValue.value === "PCT") {
                        setInputANdisabled(true);
                        setInputIFDdisabled(false);
                        setInputPCTANdisabled(false);
                        setInputWIPOdisabled(false);
                        setInputSNPDdisabled(false);
                        setInputNPDdisabled(false);
                      } else {
                        setInputANdisabled(false);
                        setInputIFDdisabled(true);
                        setInputPCTANdisabled(true);
                        setInputWIPOdisabled(true);
                        setInputSNPDdisabled(true);
                        setInputNPDdisabled(true);
                      }

                      if (newValue.value === "Provisional") {
                        setInputPAdisabled(true);
                        setInputNRdisabled(true);
                      } else {
                        setInputPAdisabled(false);
                        setInputNRdisabled(false);
                      }
                    }}
                    onCreateOption={handlePatent_Application_TypeCreate}
                    value={
                      patentValue?.Patent_Application_Type
                        ? {
                            label: patentValue.Patent_Application_Type,
                            value: patentValue.Patent_Application_Type,
                          }
                        : ""
                    }
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
                    // onChange={(e) => {
                    //   setPatentValue({
                    //     ...patentValue,
                    //     Complete_Application_Deadline: e.target.value,
                    //   });
                    // }}
                    readOnly
                    value={patentValue?.Complete_Application_Deadline || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">International Filing Date</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputIFDdisabled}
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        International_Filing_Date: e.target.value,
                      });
                    }}
                    value={patentValue?.International_Filing_Date || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">PCT Application No</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputPCTANdisabled}
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        PCT_Application_No: e.target.value,
                      });
                    }}
                    value={patentValue?.PCT_Application_No || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Priority Application</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputPAdisabled}
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Priority_Application: e.target.value,
                      });
                    }}
                    value={patentValue?.Priority_Application || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">WIPO Database</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputWIPOdisabled}
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        WIPO_Database: e.target.value,
                      });
                    }}
                    value={patentValue?.WIPO_Database || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">National Phase Deadline</label>
                  <div className="flex">
                    <input
                      type="date"
                      className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      disabled={inputNPDdisabled}
                      readOnly
                      // onChange={(e) => {
                      //   setPatentValue({
                      //     ...patentValue,
                      //     National_Phase_Deadline: e.target.value,
                      //   });
                      // }}
                      value={patentValue?.National_Phase_Deadline || ""}
                    />

                    <select
                      id="period"
                      className=" w-20 rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      defaultValue={"30"}
                      disabled={inputSNPDdisabled}
                      onChange={(e) => {
                        var NPD = new Date(patentValue?.Earliest_Priority_Date);
                        if (e.target.value === "30") {
                          NPD.setMonth(NPD.getMonth() + 30);
                          setPatentValue({
                            ...patentValue,
                            National_Phase_Deadline:
                              moment(NPD).format("YYYY-MM-DD"),
                          });
                        } else {
                          NPD.setMonth(NPD.getMonth() + 31);
                          setPatentValue({
                            ...patentValue,
                            National_Phase_Deadline:
                              moment(NPD).format("YYYY-MM-DD"),
                          });
                        }
                      }}
                    >
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </div>
                </div>

                <div className="py-2">
                  <label className="text-sm">Convention Deadline</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    readOnly
                    // onChange={(e) => {
                    //   setPatentValue({
                    //     ...patentValue,
                    //     Convention_Deadline: e.target.value,
                    //   });
                    // }}
                    value={patentValue?.Convention_Deadline || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Status </label>
                  <select
                    id="Status"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Status: e.target.value,
                      });
                    }}
                    value={patentValue?.Status || ""}
                  >
                    <option value="Pending Filing">Pending Filing</option>
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
                      setPatentValue({
                        ...patentValue,
                        Application_Phase: e.target.value,
                      });
                    }}
                    value={patentValue?.Application_Phase || ""}
                  >
                    <option value="International Phase">
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
                      setPatentValue({
                        ...patentValue,
                        Published: e.target.value,
                      });
                    }}
                    value={patentValue?.Published || ""}
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
                      setPatentValue({
                        ...patentValue,
                        Publication_Date: e.target.value,
                      });
                    }}
                    value={patentValue?.Publication_Date || ""}
                    disabled={patentValue?.Published === "No"}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Publication No</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Publication_No: e.target.value,
                      });
                    }}
                    value={patentValue?.Publication_No || ""}
                    disabled={patentValue?.Published === "No"}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Inventors</label>
                  <CreatableSelect
                    isMulti
                    onChange={(newValue: any) => {
                      console.log(newValue);
                      setPatentValue({
                        ...patentValue,
                        Inventors: newValue,
                      });
                    }}
                    value={patentValue?.Inventors || ""}
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
                      setPatentValue({
                        ...patentValue,
                        Official_Database: e.target.value,
                      });
                    }}
                    value={patentValue?.Official_Database || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Applicant</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Applicant: e.target.value,
                      });
                    }}
                    value={patentValue?.Applicant || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Applicant Address</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Applicant_address: e.target.value,
                      });
                    }}
                    value={patentValue?.Applicant_address || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">IP Firm</label>
                  <CreatableSelect
                    options={ipfirmOptions}
                    onChange={(newValue: any) => {
                      setPatentValue({
                        ...patentValue,
                        IP_Firm: newValue.value,
                      });
                    }}
                    onCreateOption={handleIP_FirmCreate}
                    value={
                      patentValue?.IP_Firm
                        ? {
                            label: patentValue.IP_Firm,
                            value: patentValue.IP_Firm,
                          }
                        : ""
                    }
                    placeholder="Select or create an IP Firm..."
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">IP Firm Reference No</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        IP_Firm_Reference_No: e.target.value,
                      });
                    }}
                    value={patentValue?.IP_Firm_Reference_No || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Address for services</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Address_for_services: e.target.value,
                      });
                    }}
                    value={patentValue?.Address_for_services || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Responsible Attorney</label>
                  <CreatableSelect
                    isMulti
                    onChange={(newValue) => {
                      setPatentValue({
                        ...patentValue,
                        Responsible_Attorney: newValue,
                      });
                    }}
                    isClearable
                    value={patentValue?.Responsible_Attorney || ""}
                    placeholder="Select Responsible Attorney..."
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Patent Anniversary</label>
                  <div className="flex">
                    <input
                      type="date"
                      className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px]   border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      // onChange={(e) => {
                      //   setPatentValue({
                      //     ...patentValue,

                      //   });
                      // }}
                      readOnly
                      value={patentValue?.Patent_Anniversary || ""}
                    />

                    <select
                      id="Patent_Anniversary"
                      className="w-20 rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      onChange={(e) => {
                        var PA = new Date(
                          patentValue?.International_Filing_Date
                        );
                        const selectedValue = parseInt(e.target.value, 10);
                        const monthsToAdd = selectedValue * 12;
                        PA.setMonth(PA.getMonth() + monthsToAdd);
                        console.log("#$^$%0", PA);
                        setPatentValue({
                          ...patentValue,
                          Patent_Anniversary_Period: e.target.value,
                          Patent_Anniversary: moment(PA).format("YYYY-MM-DD"),
                        });
                      }}
                      value={patentValue?.Patent_Anniversary_Period}
                    >
                      {optionValues.map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="py-2">
                  <label className="text-sm">Next Renewal</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    disabled={inputNRdisabled}
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Next_Renewal: e.target.value,
                      });
                    }}
                    value={patentValue?.Next_Renewal || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Deadlines</label>
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Deadlines: e.target.value,
                      });
                    }}
                    value={patentValue?.Deadlines || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Comments</label>
                  <textarea
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    placeholder="Your message... "
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Comments: e.target.value,
                      });
                    }}
                    value={patentValue?.Comments || ""}
                  ></textarea>
                </div>

                <div className="py-2">
                  <label className="text-sm">Costs</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary "
                    onChange={(e) => {
                      setPatentValue({
                        ...patentValue,
                        Costs: e.target.value,
                      });
                    }}
                    value={patentValue?.Costs || ""}
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Attachments</label>
                  <ImageUploader
                    accept="file/*"
                    onChange={(e) => {
                      setAttachments(e.target.files);
                    }}
                    multiple
                  />
                </div>

                <div className="py-2">
                  <label className="text-sm">Invoices</label>
                  <ImageUploader
                    accept="file/*"
                    onChange={(e) => {
                      setInvoices(e.target.files);
                    }}
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
