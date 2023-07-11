import ImagePreview from "./ImagePreview";
import ImageUploader from './ImageUploader';
import React, {useState} from "react";

const modalView = (props : any) => {
    const [reference_no, setReference_no] = useState('');
    const [patent_family, setPatent_family] = useState('');
    const [application_no, setApplication_no] = useState('');
    const [jurisdiction, setJurisdiction] = useState('');
    const [invention_title, setInvention_title] = useState('');
    const [abstract, setAbstract] = useState('');
    const [earliest_Priority_Date, setEarliest_Priority_Date] = useState('');
    const [patent_Application_Type, setPatent_Application_Type] = useState('');
    const [complete_Application_Deadline, setComplete_Application_Deadline] = useState('');
    const [international_Filing_Date, setInternational_Filing_Date] = useState('');
    const [pct_Application_No, setPCT_Application_No] = useState('');
    const [priority_Application, setPriority_Application] = useState('');
    const [wipo_Database, setWIPO_Database] = useState('');
    const [national_Phase_Deadline, setNational_Phase_Deadline] = useState('');
    const [convention_Deadline, setConvention_Deadline] = useState('');
    const [status, setStatus] = useState('');
    const [application_Phase, setApplication_Phase] = useState('');
    const [published, setPublished] = useState('');
    const [publication_Date, setPublication_Date] =useState('');
    const [publication_No, setPublication_No] = useState('');
    const [inventors, setInventors] = useState('');
    const [official_Database, setOfficial_Database] = useState('');
    const [applicant, setApplicant] = useState('');
    const [applicant_address, setApplicant_address] = useState('');
    const [ip_firm, setIp_firm] = useState('');
    const [ip_firm_ref_no, setIp_firm_ref_no] = useState('');
    const [address_for_services, setAddress_for_services] = useState('');
    const [responsible_Attorney, setResponsible_Attorney] = useState('');
    const [patent_Anniversary, setPatent_Anniversary] = useState('');
    const [next_Renewal, setNext_Renewal] = useState('');
    const [deadlines, setDeadlines] = useState('');
    const [comments, setComments] = useState('');
    const [costs, setCosts] = useState('');
    const [invoices, setInvoices] = useState('');

    const handleReference_noChange = (data: any) => {
        setReference_no(data);
    }

    const handlePatent_familyChange = (data: any) => {
        setPatent_family(data);
    }

    const handleApplication_noChange = (data: any) => {
        setApplication_no(data);
    }

    const handleJurisdictionChange = (data: any) => {
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
    }

    const handlePatent_Application_TypeChange = (data: any) => {
        setPatent_Application_Type(data);
    }

    const handleComplete_Application_DeadlineChange = (data: any) => {
        setComplete_Application_Deadline(data);
    }

    const handleInternational_Filing_DateChange = (data: any) => {
        setInternational_Filing_Date(data);
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

    const handleNational_Phase_DeadlineChange = (data: any) => {
        setNational_Phase_Deadline(data);
    }

    const handleConvention_DeadlineChange = (data: any) => {
        setConvention_Deadline(data);
    }

    const handleStatus = (data: any) => {
        setStatus(data);
    }

    const handleApplication_PhaseChange = (data: any) => {
        setApplication_Phase(data);
    }

    const handlePublishedChange = (data: any) => {
        setPublished(data);
    }

    const handlePublication_DateChange = (data: any) => {
        setPublication_Date(data);
    }

    const handlePublication_NoChange = (data: any) => {
        setPublication_No(data);
    }

    const handleInventorsChange = (data: any) => {
        setInventors(data);
    }

    const handleOfficial_DatabaseChange = (data: any) => {
        setOfficial_Database(data);
    }

    const handleApplicantChange = (data: any) => {
        setApplicant(data);
    }

    const handleApplicant_addressChange = (data: any) => {
        setApplicant_address(data);
    }

    const handleIP_FirmChange = (data: any) => {
        setIp_firm(data);
    }

    const handleIP_Firm_Reference_NoChange = (data: any) => {
        setIp_firm_ref_no(data);
    }

    const handleAddress_for_servicesChange = (data: any) => {
        setAddress_for_services(data);
    }

    const handleResponsible_AttorneyChange = (data: any) => {
        setResponsible_Attorney(data);
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

    const handleInvoicesChange = (data: any) => {
        setInvoices(data);
    }

    const [images, setImages] = useState<File[]>([]);
    const [files, setFiles] = useState<File[]>([]);

    const handlefileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            //convert `FileList` to `File[]`
            const _files = Array.from(e.target.files);
            console.log(_files);
            setFiles(_files);
        }
    };  

    const handleimageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            //convert `FileList` to `File[]`
            const _files = Array.from(e.target.files);
            setImages(_files);
        }
    };

    // const handleNewPatent = (e: any) => {
    //     e.preventDefault();
    //     const data = {
            
    //     }
    // }

    return(
        <>
        <div className="fixed z-10 inset-0 overflow-y-auto bg-black/90">
                                <div className="flex items-baseline pt-20 pb-12 justify-center min-h-screen">
                                    <div
                                        className="fixed inset-0 bg-gray-500 bg-opacity-75"
                                        onClick={props.setToggleModal}
                                    ></div>

                                    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-1/2 dark:bg-boxdark">
                                        <div className="p-6">
                                            <div className="text-3xl font-bold text-center">New Patent</div>
                                                <div>
                                                    <label className="text-sm">Reference No</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange= {(e) => {handleReference_noChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Patent Family</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handlePatent_familyChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Application No</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleApplication_noChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Jurisdiction</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleJurisdictionChange(e.target.value)}}
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
                                                        onChange={handleimageSelected}/>
                                                    <ImagePreview images={images} />

                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Abstract</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleAbstractChange(e.target.value)}}
                                                        />
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
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handlePatent_Application_TypeChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Complete Application Deadline</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleComplete_Application_DeadlineChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">International Filing Date</label>
                                                    <input
                                                        type="date"
                                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleInternational_Filing_DateChange(e.target.value)}}
                                                    />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">PCT Application No</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handlePCT_Application_NoChange(e.target.value)}}
                                                        />
                                                </div>


                                                <div className="py-2">
                                                    <label className="text-sm">Priority Application</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handlePriority_ApplicationChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">WIPO Database</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleWIPO_DatabaseChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">National Phase Deadline</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleNational_Phase_DeadlineChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Convention Deadline</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleConvention_DeadlineChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Status </label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleStatus(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Application Phase</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleApplication_PhaseChange(e.target.value)}}
                                                        />
                                                </div>

                                                
                                                <div className="py-2">
                                                    <label className="text-sm">Published</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handlePublishedChange(e.target.value)}}
                                                        />
                                                </div>

                                                
                                                <div className="py-2">
                                                    <label className="text-sm">Publication Date </label>
                                                    <input
                                                        type="date"
                                                        className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handlePublication_DateChange(e.target.value)}}
                                                    />
                                                </div>

                                                
                                                <div className="py-2">
                                                    <label className="text-sm">Publication No</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handlePublication_NoChange(e.target.value)}}
                                                        />
                                                </div>

                                                
                                                <div className="py-2">
                                                    <label className="text-sm">Inventors</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleInventorsChange(e.target.value)}}
                                                        />
                                                        
                                                </div>

                                                
                                                <div className="py-2">
                                                    <label className="text-sm">Official Database</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleOfficial_DatabaseChange(e.target.value)}}
                                                        />
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
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleIP_FirmChange(e.target.value)}}
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
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleResponsible_AttorneyChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Attachments</label>
                                                    <ImageUploader 
                                                        accept="file/*"
                                                        onChange={handlefileSelected}/>
                                                </div>
                                                <div className="py-2">
                                                    <label className="text-sm">Patent Anniversary</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handlePatent_AnniversaryChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Next Renewal</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleNext_RenewalChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Deadlines</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleDeadlinesChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Comments</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleCommentsChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Costs</label>
                                                    <input
                                                        type="text"
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleCostsChange(e.target.value)}}
                                                        />
                                                </div>

                                                <div className="py-2">
                                                    <label className="text-sm">Invoices</label>
                                                    <input
                                                        type="text"                                                        
                                                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                        onChange={(e) => {handleInvoicesChange(e.target.value)}}
                                                        />
                                                </div>

                                                <button
                                                    // onClick={handleNewPatent}
                                                    className="mt-4 bg-red-500 px-4 py-2 rounded border-solid border"
                                                >
                                                    Create Patent
                                                </button>
                                            

                                            {/* <button className="">
                                                Create Patent
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
        </>
    );
}

export default modalView;