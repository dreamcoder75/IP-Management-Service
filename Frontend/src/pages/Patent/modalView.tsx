import ImagePreview from "./ImagePreview";
import ImageUploader from './ImageUploader';
import React, {useState} from "react";
import axios from "axios";
import moment from 'moment';
import { ReactNotifications } from 'react-notifications-component';
import CreatableSelect from "react-select/creatable";

import { base_URL } from "../../constants/config";
import { Store } from "react-notifications-component";

import 'react-notifications-component/dist/theme.css';
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
    createOption('PF01'),
    createOption('PF02'),
    createOption('PF03')
  ]

  const defaultJurisdictionOptions = [
    createOption('AU'),
    createOption('US')
  ]

  const defaultPatentApptypeOptions = [
    createOption('Provisional'),
    createOption('PCT'),
    createOption('Standard'),
    createOption('Divisional')
  ]

  const defaultIPfirmOptions = [
    createOption('IP Australia')
  ]

const modalView = (props : any) => {
    const [reference_no, setReference_no] = useState('');

    const [patent_family, setPatent_family] = useState<Option | null>();
    const [patentfamilyOptions, setPatentfamilyOptions] = useState(defaultPatentfamilyOptions);
    
    const [application_no, setApplication_no] = useState('');
    const [jurisdiction, setJurisdiction] = useState<Option | null>();
    const [jurisdictionOptions, setJurisdictionOptions] = useState(defaultJurisdictionOptions);

    const [invention_title, setInvention_title] = useState('');
    const [abstract, setAbstract] = useState('');
    const [earliest_Priority_Date, setEarliest_Priority_Date] = useState('');

    const [patent_Application_Type, setPatent_Application_Type] = useState<Option | null>();
    const [patentApptypeOptions, setPatentApptypeOptions] = useState(defaultPatentApptypeOptions);

    const [complete_Application_Deadline, setComplete_Application_Deadline] = useState('1');
    const [international_Filing_Date, setInternational_Filing_Date] = useState('');
    const [pct_Application_No, setPCT_Application_No] = useState('');
    const [priority_Application, setPriority_Application] = useState('');
    const [wipo_Database, setWIPO_Database] = useState('');
    const [national_Phase_Deadline, setNational_Phase_Deadline] = useState('30');
    const [convention_Deadline, setConvention_Deadline] = useState('');
    const [status, setStatus] = useState('Pending Filing');
    const [application_Phase, setApplication_Phase] = useState('International Phase');
    const [published, setPublished] = useState('Yes');
    const [publication_Date, setPublication_Date] =useState('');
    const [publication_No, setPublication_No] = useState('');
    const [inventors, setInventors] = useState<readonly Option[]>([]);

    const [official_Database, setOfficial_Database] = useState('');
    const [applicant, setApplicant] = useState('');
    const [applicant_address, setApplicant_address] = useState('');

    const [ipfirmOptions, setIpfirmsOptions] = useState(defaultIPfirmOptions);
    const [ip_firm, setIp_firm] = useState<Option | null>();
    const [ip_firm_ref_no, setIp_firm_ref_no] = useState('');
    const [address_for_services, setAddress_for_services] = useState('');
    const [responsible_Attorney, setResponsible_Attorney] = useState<readonly Option[]>([]);
    const [patent_Anniversary, setPatent_Anniversary] = useState('');
    const [next_Renewal, setNext_Renewal] = useState('');
    const [deadlines, setDeadlines] = useState('');
    const [comments, setComments] = useState('');
    const [costs, setCosts] = useState('');

    const [inputPCTANdisabled, setInputPCTANdisabled] = useState(true);
    const [inputPAdisabled, setInputPAdisabled] = useState(true);
    const [inputWIPOdisabled, setInputWIPOdisabled] = useState(true);
    const [inputIFDdisabled, setInputIFDdisabled] = useState(true);
    const [inputNPDdisabled, setInputNPDdisabled] = useState(true);
    const [inputNRdisabled, setInputNRdisabled] = useState(false);

    const [inputPDdisable, setInputPDdisable] = useState(true);
    const [inputPNdisable, setInputPNdisable] = useState(true);
    

    const handleReference_noChange = (data: any) => {
        setReference_no(data);
    }

    const handlePatent_familyChange = (data: any) => {
        setPatent_family(data);
    }

    const handlePatent_familyCreate = (data : any) => {
        setTimeout(() => {
            const newOption = createOption(data);
            setPatentfamilyOptions((prev :any) => [...prev, newOption]);
            setPatent_family(newOption);
          }, 1000);
    }

    const handleApplication_noChange = (data: any) => {
        setApplication_no(data);
    }

    const handleJurisdictionCreate = (data: any) => {
        setTimeout(() => {
            const newOption = createOption(data);
            setJurisdictionOptions((prev :any) => [...prev, newOption]);
            setJurisdiction(newOption);
          }, 1000);
    }

    const handleJurisdictionChange = (data : any) => {
        setJurisdiction(data);
    }

    const handleInvention_title = (data: any) => {
        setInvention_title(data);
    }

    const handleAbstractChange = (data: any) => {
        setAbstract(data);
    }

    const handleEarliest_Priority_DateChange = (data: any) => {
        setEarliest_Priority_Date(data);
        var Complete_Application_Deadline = new Date(data);
        // originDate.setMonth(originDate.getMonth() + 30);
        Complete_Application_Deadline.setFullYear(Complete_Application_Deadline.getFullYear() + 1);
        setComplete_Application_Deadline(moment(Complete_Application_Deadline).format('YYYY-MM-DD'));

        var Convention_Deadline = new Date(data);
        Convention_Deadline.setFullYear(Convention_Deadline.getFullYear() + 1);
        setConvention_Deadline(moment(Convention_Deadline).format('YYYY-MM-DD'));

        if(jurisdiction?.value === "AU"){
           var National_Phase_Deadline = new Date(data);
           National_Phase_Deadline.setMonth(National_Phase_Deadline.getMonth() + 30);
           setNational_Phase_Deadline(moment(National_Phase_Deadline).format('YYYY-MM-DD'));
        }

        else if (jurisdiction?.value === "US"){
            var National_Phase_Deadline = new Date(data);
            National_Phase_Deadline.setMonth(National_Phase_Deadline.getMonth() + 31);
            setNational_Phase_Deadline(moment(National_Phase_Deadline).format('YYYY-MM-DD'));
        }
    }

    const handlePatent_Application_TypeCreate = (data: any) => {
        setTimeout(() => {
            const newOption = createOption(data);
            setPatentApptypeOptions((prev :any) => [...prev, newOption]);
            setPatent_Application_Type(newOption);
          }, 500);
    }

    const handlePatent_Application_TypeChange = (data: any) => {
        setPatent_Application_Type(data);
        setInputPCTANdisabled(data.value !== "PCT");
        setInputPAdisabled(data.value !== "PCT");
        setInputWIPOdisabled(data.value !== "PCT");
        setInputIFDdisabled(data.value !== "PCT");
        setInputNPDdisabled(data.value !== "PCT");
        setInputNRdisabled(data.value === "Provisional");
    }

    const handleInternational_Filing_DateChange = (data: any) => {
        setInternational_Filing_Date(data);
        var next_Renewal = new Date(data);
        next_Renewal.setFullYear(next_Renewal.getFullYear() + 4);
        setNext_Renewal(moment(next_Renewal).format('YYYY-MM-DD'));
    }

    const handlePCT_Application_NoChange = (data: any) => {
        setPCT_Application_No(data);
    }

    const handlePriority_ApplicationChange = (data: any) => {
        setPriority_Application(data);
        
    }

    const handleWIPO_DatabaseChange = (data: any) => {
        setWIPO_Database(data);
    }

    // const handleNational_Phase_DeadlineChange = (data: any) => {
    //     setNational_Phase_Deadline(data);
    // }

    // const handleConvention_DeadlineChange = (data: any) => {
    //     setConvention_Deadline(data);
    // }

    const handleStatusChange = (data: any) => {
        setStatus(data);
    }

    const handleApplication_PhaseChange = (data: any) => {
        setApplication_Phase(data);
    }

    const handlePublishedChange = (data: any) => {
        setPublished(data);
        setInputPDdisable(data === "Yes");
        setInputPNdisable(data === "Yes");
    }

    const handlePublication_DateChange = (data: any) => {
        setPublication_Date(data);
    }

    const handlePublication_NoChange = (data: any) => {
        setPublication_No(data);
    }

    // const createOption = (label: string) => ({
    //     label,
    //     value: label.toLowerCase().replace(/\W/g, ''),
    // });

    const handleInventorsChange = (newValue : any, actionMeta : any) => {
        if (actionMeta.action === 'create-option') {
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
    }   

    // const handleOfficial_DatabaseChange = (data: any) => {
    //     setOfficial_Database(data);
    // }

    const handleApplicantChange = (data: any) => {
        setApplicant(data);
    }

    const handleApplicant_addressChange = (data: any) => {
        setApplicant_address(data);
    }

    const handleIP_FirmChange = (data: any) => {
        setIp_firm(data);
    }

    const handleIP_FirmCreate = (data : any) => {
        setTimeout(() => {
            const newOption = createOption(data);
            setIpfirmsOptions((prev :any) => [...prev, newOption]);
            setIp_firm(newOption);
          }, 1000);
    }

    const handleIP_Firm_Reference_NoChange = (data: any) => {
        setIp_firm_ref_no(data);
    }

    const handleAddress_for_servicesChange = (data: any) => {
        setAddress_for_services(data);
    }

    const handleResponsible_AttorneyChange = (data: any, actionMeta: any) => {
        // setResponsible_Attorney(data);

        if (actionMeta.action === 'create-option') {
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
    }

    const handlePatent_AnniversaryChange = (data: any) => {
        setPatent_Anniversary(data);
    }

    const handleNext_RenewalChange = (data: any) => {
        setNext_Renewal(data);
    }

    const handleDeadlinesChange = (data: any) => {
        setDeadlines(data);
    }

    const handleCommentsChange = (data: any) => {
        setComments(data);
    }

    const handleCostsChange = (data: any) => {
        setCosts(data);
    }

    const [images, setImages] = useState<FileList | null>(null);
    const [files, setFiles] = useState<FileList | null>(null);
    const uploadfiledata = new FormData();
    const uploadImagedata = new FormData();
    const uploadfiles = files ? [...files] : [];
    const uploadimages = images ? [...images] : [];

    const handlefileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(e.target.files);
    };  

    const handleimageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImages(e.target.files);
    };

    const handleNewPatent = async(e: any) => {
        e.preventDefault();
        uploadfiles.forEach(file => {
            uploadfiledata.append(`files`, file, file.name);
        });

        uploadimages.forEach(image => {
            uploadImagedata.append(`images`, image, image.name);
        });

        uploadfiledata.append('filenumber', uploadfiles.length.toString());
        uploadImagedata.append('imagenumber', uploadimages.length.toString());

        // let filePathRes = await axios.post(`${base_URL}/fileupload/upload/files`, uploadfiledata);
        
        // let imagePathRes = await axios.post(`${base_URL}/fileupload/upload/images`, uploadImagedata);

        const data = {
            Reference_no: reference_no,
            Patent_family: patent_family,
            Application_no: application_no,
            Jurisdiction: jurisdiction,
            Invention_title: invention_title,
            Patent_Figures: uploadfiledata,
            Abstract: abstract,
            Earliest_Priority_Date: earliest_Priority_Date,
            Patent_Application_Type: patent_Application_Type,
            Complete_Application_Deadline: complete_Application_Deadline,
            International_Filing_Date: international_Filing_Date,
            PCT_Application_No: pct_Application_No,
            Priority_Application: priority_Application,
            WIPO_Database: wipo_Database,
            National_Phase_Deadline: national_Phase_Deadline,
            Convention_Deadline: convention_Deadline,
            Status: status,
            Application_Phase: application_Phase,
            Published: published,
            Publication_Date: publication_Date,
            Publication_No: publication_No,
            Inventors: inventors,
            Official_Database: official_Database,
            Applicant: applicant,
            Applicant_address: applicant_address,
            IP_Firm: ip_firm,
            IP_Firm_Reference_No: ip_firm_ref_no,
            Address_for_services: address_for_services,
            Responsible_Attorney: responsible_Attorney,
            Attachments: uploadImagedata,
            Patent_Anniversary: patent_Anniversary,
            Next_Renewal: next_Renewal,
            Deadlines: deadlines,
            Comments: comments,
            Costs: costs,
        }

        console.log(data);

        axios.post(`${base_URL}/patent/newPatents`, data)
            .then(res =>{
                console.log(res.status)
                if(res.status == 200){
                    
                    Store.addNotification({
                        title: 'Success',
                        message: 'New Patent was Created Successfully',
                        type: "success",
                        insert: "top",
                        container: "top-center",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        width: 300,
                        dismiss: {
                          duration: 1000,
                          onScreen: true
                        }
                      });
                }

            })
            .catch(err => {
                console.log(err.response.status)
                if(err.response.status == 422) {
                    Store.addNotification({
                        title: 'Warning',
                        message: 'This Patent is already created!',
                        type: "warning",
                        insert: "top",
                        container: "top-center",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        width: 300,
                        dismiss: {
                          duration: 1000,
                          onScreen: true
                        }
                      });
                }
            })

    }

    return(
        <>
        <div className="fixed z-10 inset-0 bg-black/90 app-container">
            <div className="flex items-baseline pt-20 pb-12 justify-center min-h-screen">
                <ReactNotifications/>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75"
                    onClick={props.setToggleModal}
                >
                </div>

                <div className="bg-white rounded-lg oevrflow-hidden shadow-xl transform transition-all xs:w-4/5 mt-4 md:w-[600px] dark:bg-boxdark">
                    <div className="pl-8 pr-2 py-6">
                        <div className="text-3xl font-bold text-center">New Patent</div>
                            <div style={{height: "74vh", overflow: "auto"}} >
                                <div>
                                    <label className="text-sm">Reference No</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange= {(e) => {handleReference_noChange(e.target.value)}}
                                        />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Application No</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        // disabled
                                        onChange={(e) => {handleApplication_noChange(e.target.value)}}
                                        />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Patent Family</label>
                                    <CreatableSelect 
                                        options = {patentfamilyOptions} 
                                        isClearable
                                        onChange = {handlePatent_familyCreate}
                                        onCreateOption={handlePatent_familyChange}
                                        value={patent_family}/>
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Jurisdiction</label>
                                    <CreatableSelect
                                        options={jurisdictionOptions}
                                        onChange={handleJurisdictionChange}
                                        onCreateOption={handleJurisdictionCreate}
                                        value = {jurisdiction}
                                        placeholder="Select or create an Jurisdiction..."
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Invention Title</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition  focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handleInvention_title(e.target.value)}}
                                        />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Patent Figures</label>
                                    <ImageUploader 
                                        accept="image/png, image/jpeg"
                                        onChange={handleimageSelected}
                                        multiple/>
                                    <ImagePreview images={uploadimages} />

                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Abstract</label>
                                    <textarea className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" placeholder="Your message... " onChange={(e) => {handleAbstractChange(e.target.value)}}></textarea>
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Earliest Priority Date</label>
                                    <input
                                        type="date"
                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handleEarliest_Priority_DateChange(e.target.value)}}
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Patent Application Type </label>
                                    <CreatableSelect
                                        options={patentApptypeOptions}
                                        onChange={handlePatent_Application_TypeChange}
                                        onCreateOption={handlePatent_Application_TypeCreate}
                                        value = {patent_Application_Type}
                                        placeholder="Select or create an Patent Application Type..."
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Complete Application Deadline</label>
                                    <input
                                        type="date"
                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        // onChange={(e) => {handleComplete_Application_DeadlineChange(e.target.value)}}
                                        value={complete_Application_Deadline}
                                        readOnly
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">International Filing Date</label>
                                    <input
                                        type="date"
                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        disabled = {inputIFDdisabled}
                                        onChange={(e) => {handleInternational_Filing_DateChange(e.target.value)}}
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">PCT Application No</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        disabled = {inputPCTANdisabled}
                                        onChange={(e) => {handlePCT_Application_NoChange(e.target.value)}}
                                        />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Priority Application</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        disabled = {inputPAdisabled}
                                        onChange={(e) => {handlePriority_ApplicationChange(e.target.value)}}
                                        />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">WIPO Database</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        disabled = {inputWIPOdisabled}
                                        onChange={(e) => {handleWIPO_DatabaseChange(e.target.value)}}
                                        />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">National Phase Deadline</label>
                                    <input
                                        type="date"
                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        disabled = {inputNPDdisabled}
                                        value={national_Phase_Deadline}
                                        readOnly
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Convention Deadline</label>
                                    <input
                                        type="date"
                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        value={convention_Deadline}
                                        readOnly
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Status </label>
                                    <select id="Status" className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" onChange={(e) => {handleStatusChange(e.target.value)}}>
                                        <option defaultValue="Pending Filing">Pending Filing</option>
                                        <option value="Filed">Filed</option>
                                        <option value="Granted">Granted</option>
                                        <option value="Lapsed">Lapsed</option>
                                    </select>
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Application Phase</label>
                                    <select id="Application Phase" className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" onChange={(e) => {handleApplication_PhaseChange(e.target.value)}}>
                                        <option defaultValue="International Phase">International Phase</option>
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
                                    <select id="Published" className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" onChange={(e) => {handlePublishedChange(e.target.value)}}>
                                        <option defaultValue="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            
                                <div className="py-2">
                                    <label className="text-sm">Publication Date </label>
                                    <input
                                        type="date"
                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handlePublication_DateChange(e.target.value)}}
                                        disabled = {inputPDdisable}
                                    />
                                </div>
                            
                                <div className="py-2">
                                    <label className="text-sm">Publication No</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handlePublication_NoChange(e.target.value)}}
                                        disabled = {inputPNdisable}
                                        />
                                </div>
                        
                                <div className="py-2">
                                    <label className="text-sm">Inventors</label>
                                    <CreatableSelect 
                                        isMulti
                                        value = {inventors}
                                        onChange={handleInventorsChange}
                                        isClearable
                                        placeholder = "Select inventors..."
                                    />
                                </div>
                            
                                <div className="py-2">
                                    {/* <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handleOfficial_DatabaseChange(e.target.value)}}
                                        /> */}
                                        <a href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2023901260" className="bg-meta-3 text-white px-4 py-2 rounded inline-block hover:bg-blue-800">Offical Database</a>
                                </div>
                                
                                <div className="py-2">
                                    <label className="text-sm">Applicant</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handleApplicantChange(e.target.value)}}
                                        />
                                </div>
                            
                                <div className="py-2">
                                    <label className="text-sm">Applicant Address</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handleApplicant_addressChange(e.target.value)}}
                                        />
                                </div>
                            
                                <div className="py-2">
                                    <label className="text-sm">IP Firm</label>
                                    <CreatableSelect
                                        options={ipfirmOptions}
                                        onChange={handleIP_FirmChange}
                                        onCreateOption={handleIP_FirmCreate}
                                        value = {ip_firm}
                                        placeholder="Select or create an IP Firm..."
                                    />
                                </div>
                                
                                <div className="py-2">
                                    <label className="text-sm">IP Firm Reference No</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handleIP_Firm_Reference_NoChange(e.target.value)}}
                                        />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Address for services</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handleAddress_for_servicesChange(e.target.value)}}
                                        />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Responsible Attorney</label>
                                    <CreatableSelect 
                                        isMulti
                                        value = {responsible_Attorney}
                                        onChange={handleResponsible_AttorneyChange}
                                        isClearable
                                        placeholder = "Select Responsible Attorney..."
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Patent Anniversary</label>
                                    <input
                                        type="date"
                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px]   border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handlePatent_AnniversaryChange(e.target.value)}}
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Next Renewal</label>
                                    <input
                                        type="date"
                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        disabled = {inputNRdisabled}
                                        value={next_Renewal}
                                        onChange={(e) => {handleNext_RenewalChange(e.target.value)}}
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Deadlines</label>
                                    <input
                                        type="date"
                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        onChange={(e) => {handleDeadlinesChange(e.target.value)}}
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Comments</label>
                                    <textarea className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" placeholder="Your message... " onChange={(e) => {handleCommentsChange(e.target.value)}}></textarea>
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Costs</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary "
                                        onChange={(e) => {handleCostsChange(e.target.value)}}
                                    />
                                </div>

                                <div className="py-2">
                                    <label className="text-sm">Files(Attachments and Invoices)</label>
                                    <ImageUploader 
                                        accept="file/*"
                                        onChange={handlefileSelected}
                                        multiple/>
                                </div>
                            </div>
                            <div className="text-right">
                                <button
                                    onClick={handleNewPatent}
                                    className="mt-4 bg-red-500 px-4 py-2 rounded border-solid border"
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
}

export default modalView;