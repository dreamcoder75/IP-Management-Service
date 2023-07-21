import ImagePreview from "./ImagePreview";
import ImageUploader from './ImageUploader';
import React, {useState} from "react";
import axios from "axios";
import moment from 'moment';
import { ReactNotifications } from 'react-notifications-component';
import CreatableSelect from "react-select/creatable";

// import { base_URL } from "../../constants/config";
// import { Store } from "react-notifications-component";

import 'react-notifications-component/dist/theme.css';

interface Option {
    readonly label: string;
    readonly value: string;
}

const createOption = (label: string) => ({
    label,
    value: label,
});

const defaultJurisdictionOptions = [
    createOption('AU'),
    createOption('US')
]

const defaultTrademarkfamilyOptions = [
    createOption('TMF01'),
    createOption('TMF02')
]

const defaultStatusOptions = [
    createOption('Pending Filing'),
    createOption('Filed'),
    createOption('Published'),
    createOption('Examined'),
    createOption('Acceptance'),
    createOption('Registered')
]

const defaultIPfirmOptions = [
    createOption('IP Australia')
]

const modalView = (props : any) => {
    const [reference_no, setReference_no] = useState('');

    const [trademarkfamilyOptions, setTrademarkfamilyOptions] = useState(defaultTrademarkfamilyOptions);
    const [trademarkfamily, setTrademarkfamily] = useState<Option | null>();
    const [trademarkno, setTrademarkno] = useState('');
    const [priority_date, setPriority_date] = useState('');
    const [filing_date, setFiling_date] = useState('');

    const [jurisdiction, setJurisdiction] = useState<Option | null>();
    const [jurisdictionOptions, setJurisdictionOptions] = useState(defaultJurisdictionOptions);

    const [status, setStatus] = useState<Option | null>();
    const [statusOptions, setStatusOptions] = useState(defaultStatusOptions);

    const [trademarkRepresentation, setTrademarkRepresentation] = useState<FileList | null>(null);
    const [overseas, setOverseas] = useState('');
    const [convention_Deadline, setConvention_Deadline] = useState('');
    const [examinationReport, setExaminationReport] = useState('');
    const [dateofexaminationReport, setDateofexaminationReport] = useState('');
    const [complianceReport, setComplianceReport] = useState('');
    const [dateofcomplianceReport, setDateofcomplianceReport] = useState('');
    const [officeaction, setOfficeaction] = useState('');
    const [dateofofficeaction, setDateofofficeaction] = useState('');
    const [acceptancedeadline, setAcceptancedeadline] = useState('');
    // const [officialdb, setOfficialdb] = useState('');
    const [applicant, setApplicant] = useState('');
    const [applicantaddress, setApplicantaddress] = useState('');

    const [ipfirmOptions, setIpfirmOptions] = useState(defaultIPfirmOptions)
    const [ip_firm, setIp_firm] = useState<Option | null>();

    const [ip_firm_ref_no, setIp_firm_ref_no] = useState('');
    const [address_for_services, setAddress_for_services] = useState('');
    const [responsible_Attorney, setResponsible_Attorney] = useState<readonly Option[]>([]);
    const [comments, setComments] = useState('');
    const [costs, setCosts] = useState('');
    const [trademarkfiles, setTrademarkFiles] = useState('');
    const uploadimages = trademarkRepresentation ? [...trademarkRepresentation] : [];

    const handleReference_noChange = (data : any) =>{
        setReference_no(data);
    }

    const handletrademark_nochange = (data : any) => {
        setTrademarkno(data);
    }

    const handleJurisdictionChange = (data : any) => {
        setJurisdiction(data);
    }

    const handleJurisdictionCreate = (data : any) => {
        setTimeout(() => {
            const newOption = createOption(data);
            setJurisdictionOptions((prev :any) => [...prev, newOption]);
            setJurisdiction(newOption);
          }, 1000);
    }

    const handletrademarkChange = (data : any) => {
        setTrademarkfamily(data);
    }

    const handletrademarkCreate = (data : any) => {
        setTimeout(() => {
            const newOption = createOption(data);
            setTrademarkfamilyOptions((prev :any) => [...prev, newOption]);
            setTrademarkfamily(newOption);
          }, 1000);
    }

    const handlePriority_DateChange = (data : any) => {
        setPriority_date(data);
    }

    const handleFiling_DateChange = (data : any) => {
        setFiling_date(data);
    }

    const handleStatusChange = (data : any) => {
        setStatus(data);
    }

    const handleStatusCreate = (data : any) => {
        setTimeout(() => {
            const newOption = createOption(data);
            setStatusOptions((prev :any) => [...prev, newOption]);
            setStatus(newOption);
          }, 500);
    }

    const handleTrademarkfileSelected = (data : any) => {
        setTrademarkFiles(data);
    }

    const handleTrademarkImageSelected = (data : any) => {
        setTrademarkRepresentation(data);
    }

    const handleoverseasChange = (data : any) => {
        setOverseas(data);
    }

    const handleConvention_deadline = (data : any) => {
        setConvention_Deadline(data);
    }

    const handleExaminationReportChange = (data : any) => {
        setExaminationReport(data);
    }

    const handleDateFirstERChange = (data : any) => {
        setDateofexaminationReport(data);
    }

    const handleComplianceReport = (data : any) => {
        setComplianceReport(data);
    }

    const handleDateFirstComplianceReport = (data : any ) => {
        setDateofcomplianceReport(data);
    }

    const handleOfficeAction = (data : any) => {
        setOfficeaction(data);
    }

    const handleDateofFirstOfficeAction = (data : any) => {
        setDateofofficeaction(data);
    }

    const handleAcceptanceeDeadline = (data : any) => {
        setAcceptancedeadline(data);
    }

    const handleApplicantChange = (data : any) => {
        setApplicant(data);
    }

    const handleApplicantAddressChange = (data : any) => {
        setApplicantaddress(data);
    }

    const handleIP_FirmChange = (data : any) => {
        setIp_firm(data);
    }

    const handleIP_FirmCreate = (data : any) => {
        setTimeout(() => {
            const newOption = createOption(data);
            setIpfirmOptions((prev :any) => [...prev, newOption]);
            setIp_firm(newOption);
          }, 1000);
    }

    const handleIP_Firm_Reference_noChange = (data : any) => {
        setIp_firm_ref_no(data);
    }

    const handleAddressforServices = (data : any) => {
        setAddress_for_services(data);
    }

    const handleResponsible_AttorneyChange = (data: any, actionMeta: any) => {
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

    const handleComments = (data: any) => {
        setComments(data);
    }

    const handleCostsChange = (data: any) => {
        setCosts(data);
    }

    const handleNewTradeMark = async(e: any) => {
        e.preventDefault();

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

                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all xs:w-4/5 mt-4 md:w-[600px] dark:bg-boxdark">
                    <div className="p-6">
                        <div className="text-3xl font-bold text-center">New Trademark</div>

                        <div style={{height: "74vh", overflow: "auto"}} >
                            <div>
                                <label className="text-sm">Reference No</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                    onChange={(e) => {handleReference_noChange(e.target.value)}}/>
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Trade Mark No</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                    onChange={(e) => {handletrademark_nochange(e.target.value)}}>
                                </input>
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Trade Mark Family</label>
                                <CreatableSelect
                                    options={trademarkfamilyOptions}
                                    onChange={handletrademarkChange}
                                    onCreateOption={handletrademarkCreate}
                                    value = {trademarkfamily}
                                    placeholder = "Select or create an Trade Mark Family"
                                />
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
                                <label className="text-sm">Priority Date</label>
                                <input
                                    type="date"
                                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    onChange={(e) => {handlePriority_DateChange(e.target.value)}}
                                />
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Filing Date</label>
                                <input
                                    type="date"
                                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    onChange={(e) => {handleFiling_DateChange(e.target.value)}}    
                                />
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Status</label>
                                <CreatableSelect
                                    options = {statusOptions}
                                    onChange={handleStatusChange}
                                    onCreateOption={handleStatusCreate}
                                    value = {status}
                                    placeholder= "Select or create status"
                                />
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Trade Mark Representation</label>
                                <div></div>
                                <ImageUploader
                                    accept="file/*"
                                    onChange={ (e) => {handleTrademarkImageSelected(e.target.files)}}
                                    multiple
                                />
                                <ImagePreview images={uploadimages} />
                            </div>

                            <div className="py-2">
                                <label className="text-sm">
                                Do you wish to file in overseas countries?
                                </label>
                                <select className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                onChange={(e) => {handleoverseasChange(e.target.value)}}>
                                    <option defaultValue="Y">Yes</option>
                                    <option value="N">No</option>
                                </select>
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Convention Deadline</label>
                                <input
                                    type="date"
                                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    onChange={(e) => {handleConvention_deadline(e.target.value)}}
                                />
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Has the First Examination Report been issued?</label>
                                <select className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                onChange={(e) => {handleExaminationReportChange(e.target.value)}}>
                                    <option defaultValue="Y">Yes</option>
                                    <option value="N">No</option>
                                </select>
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Date of First Examination Report</label>
                                <input 
                                type="date"
                                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                onChange={(e) => {handleDateFirstERChange(e.target.value)}}/>
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Has the First Compliance Report been issued?</label>
                                <select className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                onChange={(e) => {handleComplianceReport(e.target.value)}}>
                                    <option defaultValue="Y">Yes</option>
                                    <option value="N">No</option>
                                </select>
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Date of First Compliance Report</label>
                                <input 
                                type="date"
                                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                onChange={(e) => {handleDateFirstComplianceReport(e.target.value)}}/>
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Has the First Office Action been issued?</label>
                                <select className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                onChange={(e) => {handleOfficeAction(e.target.value)}}>
                                    <option defaultValue="Y">Yes</option>
                                    <option value="N">No</option>
                                </select>
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Date of First Office Action</label>
                                <input 
                                type="date"
                                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                onChange={(e) => {handleDateofFirstOfficeAction(e.target.value)}}/>
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Acceptance Deadline</label>
                                <input 
                                type="date"
                                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                onChange={(e) => {handleAcceptanceeDeadline(e.target.value)}}/>
                            </div>

                            <div className="py-2">
                                <a href="https://search.ipaustralia.gov.au/trademarks/search/view/2287240?q=tritium+holdings+pty+ltd" className="bg-meta-3 text-white px-4 py-2 rounded inline-block hover:bg-blue-800">Offical Database</a>
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
                                    onChange={(e) => {handleApplicantAddressChange(e.target.value)}}
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
                                    onChange={(e) => {handleIP_Firm_Reference_noChange(e.target.value)}}
                                />
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Address for services</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    onChange={(e) => {handleAddressforServices(e.target.value)}}
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
                                <label className="text-sm">Attachments</label>
                                <ImageUploader
                                    accept="file/*"
                                    onChange={ (e) => {handleTrademarkfileSelected(e.target.value)}}
                                    multiple
                                />
                            </div>

                            <div>
                                <label className="text-sm">Comments</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    onChange={(e) => {handleComments(e.target.value)}}
                                />
                            </div>

                            <div>
                                <label className="text-sm">Costs</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary "
                                    onChange={(e) => {handleCostsChange(e.target.value)}}
                                />
                            </div>

                            {/* <div>
                                <label className="text-sm">Invoice</label>
                            </div> */}
                        </div>

                        <div className="text-right">
                            <button
                                onClick={handleNewTradeMark}
                                className="mt-4 bg-red-500 px-4 py-2 rounded border-solid border"
                            >
                                Create Trademark
                            </button>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
        </>
    )
}

export default modalView;