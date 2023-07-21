import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import React, {useState} from "react";
import CreatableSelect from "react-select/creatable";
import ImageUploader from './ImageUploader';
import ImagePreview from './ImagePreview';

interface Option {
    readonly label: string;
    readonly value: string;
}

const createOption = (label: string) => ({
    label,
    value: label,
});

const defaultDesignfamilyOptions = [
    createOption('DF01')
]

const defaultJurisdictionOptions = [
    createOption('AU'),
    createOption('US'),
    createOption('UK'),
    createOption('EU'),
    createOption('NZ')
]

const modalView = (props: any) => {
    const [reference_no, setReference_no] = useState('');

    const [designfamilyOptions, setDesignfamilyOptions] = useState(defaultDesignfamilyOptions);
    const [designfamily, setDesignfamily] = useState<Option | null>();

    const [designappno, setDesignappno] = useState('');
    const [priority_date, setPriority_date] = useState('');
    const [filing_date, setFiling_date] = useState('');
    const [designImages, setDesignImages] = useState<FileList | null>(null);
    const uploadImages = designImages ? [...designImages] : [];

    const [SoND, SetSoNd] = useState('');
    const [jurisdiction, setJurisdiction] = useState<Option | null>();
    const [jurisdictionOptions, setJurisdictionOptions] = useState(defaultJurisdictionOptions);
    const [designer, setDesigner] = useState<readonly Option[]>([]);
    const [official_Database, setOfficial_Database] = useState('');
    const [applicant, setApplicant] = useState('');
    const [applicantAddress, setApplicantAddress] = useState('');
    const [responsible_Attorney, setResponsible_Attorney] = useState<readonly Option[]>([]);
    const [attachments, setAttachments] = useState('');
    const [registration_period, setRegistration_period] = useState('');
    const [registered_until, setRegistered_until] = useState('');
    const [registration_Date, setRegistration_Date] = useState('');
    const [costs, setCosts] = useState('');
    const [invoices, setInvoices] = useState('');
    const [comments, setComments] = useState('');

    const handleReference_noChange = (data : any) => {
        setReference_no(data);
    }

    const handleDesignFamilyChange = (data : any) => {
        setDesignfamily(data);
    }

    const handleDesignFamilyCreate = (data : any) => {
        setTimeout(() => {
            const newOption = createOption(data);
            setDesignfamilyOptions((prev :any) => [...prev, newOption]);
            setDesignfamily(newOption);
          }, 1000);
    }

    const handleDesignAppNo = (data: any) => {
        setDesignappno(data);
    }

    const handlePriority_DateChange = (data: any) => {
        setPriority_date(data);
    }

    const handleFiling_DateChange = (data: any) => {
        setFiling_date(data);
    }

    const handleDesignImages = (data: any) => {
        setDesignImages(data);
    }

    const handleSoNDChange = (data: any) => {
        SetSoNd(data);
    }

    const handleJurisdictionChange = (data: any) => {
        setJurisdiction(data);
    }

    const handleJurisdictionCreate = (data: any) => {
        setTimeout(() => {
            const newOption = createOption(data);
            setJurisdictionOptions((prev :any) => [...prev, newOption]);
            setJurisdiction(newOption);
          }, 1000);
    }

    const handledesignersChange = (data: any, actionMeta : any) => {
        if (actionMeta.action === 'create-option') {
            const newOption = {
              value: actionMeta.option.label,
              label: actionMeta.option.label,
            };
            setDesigner((prevSelectedOptions) => [
              ...prevSelectedOptions,
              newOption,
            ]);
          } else {
            setDesigner(data);
          }
    }

    const handleApplicantChange = (data: any) => {
        setApplicant(data);
    }

    const handleApplicantAddressChange = (data: any) => {
        setApplicantAddress(data);
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

    const handleAttachmentSelected = (data: any) => {
        setAttachments(data);
    }

    const handleRegistrationPeriod = (data: any) => {
        setRegistration_period(data);
    }

    const handleRegisteredUntil = (data: any) => {
        setRegistered_until(data);
    }

    const handleRegisteredDate = (data: any) => {
        setRegistration_Date(data);
    }

    const handleCostsChange = (data: any) => {
        setCosts(data);
    }

    const handleInvoicesChange = (data: any) => {
        setInvoices(data);
    }

    const handleCommentsChange = (data: any) => {
        setComments(data);
    }

    const handleNewDesign = async(e: any) => {
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
                        <div className="text-3xl font-bold text-center">New Design</div>

                        <div style={{height: "74vh", overflow: "auto"}} >
                            <div>
                                <label className="text-sm">Reference No</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                    onChange={(e) => {handleReference_noChange(e.target.value)}}/>
                            </div>

                            <div className="py-2">
                                <label className='text-sm'>Design Family</label>
                                <CreatableSelect
                                    options={designfamilyOptions}
                                    onChange={handleDesignFamilyChange}
                                    onCreateOption={handleDesignFamilyCreate}
                                    value = {designfamily}
                                    placeholder = "Select or create an Design Family"
                                />
                            </div>

                            <div className="py-2">
                                <label className='text-sm'>Design Application No</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" 
                                    onChange={(e) => {handleDesignAppNo(e.target.value)}}/>
                            </div>

                            <div className="py-2">
                                <label className='text-sm'>Priority Date</label>
                                <input 
                                    type='date'
                                    className='custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    onChange={(e) => {handlePriority_DateChange(e.target.value)}}   
                                />
                            </div>

                            <div className="py-2">
                                <label className='text-sm'>Filing Date</label>
                                <input 
                                    type='date'
                                    className='custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    onChange={(e) => {handleFiling_DateChange(e.target.value)}}   
                                />
                            </div>

                            <div className="py-2">
                                <label className="text-sm">Trade Mark Representation</label>
                                <div></div>
                                <ImageUploader
                                    accept="file/*"
                                    onChange={ (e) => {handleDesignImages(e.target.files)}}
                                    multiple
                                />
                                <ImagePreview images={uploadImages}/>
                            </div>

                            <div className='py-2'>
                                <label className='text-sm'>SoND</label>
                                <input 
                                    type = "text"
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    onChange={(e) => {handleSoNDChange(e.target.value)}}
                                />
                            </div>

                            <div className='py-2'>
                                <label className='text-sm'>Jurisdiction</label>
                                <CreatableSelect
                                    options={jurisdictionOptions}
                                    isClearable
                                    onChange={handleJurisdictionChange}
                                    onCreateOption={handleJurisdictionCreate}
                                    value={jurisdiction}
                                />
                            </div>

                            <div className='py-2'>
                                <label className='text-sm'>Designers</label>
                                <CreatableSelect 
                                    isMulti
                                    value = {designer}
                                    onChange={handledesignersChange}
                                    isClearable
                                    placeholder = "Select and Create Designes..."
                                />
                            </div>

                            <div className='py-2'>
                                <a href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2023901260" className="bg-meta-3 text-white px-4 py-2 rounded inline-block hover:bg-blue-800">Offical Database</a>
                            </div>

                            <div className='py-2'>
                                <label className='text-sm'>Applicant</label>
                                <input
                                    type = "text"
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    onChange={(e) =>{handleApplicantChange(e.target.value)}}
                                />
                            </div>

                            <div className='py-2'>
                                <label className='text-sm'>Applicant Address</label>
                                <input
                                    type = "text"
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    onChange={(e) =>{handleApplicantAddressChange(e.target.value)}}
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

                            <div className='py-2'>
                                <label className='text-sm'>Attachments</label>
                                <div>
                                <ImageUploader 
                                    accept="file/*"
                                    onChange={(e) => {handleAttachmentSelected(e.target.files)}}
                                    multiple/>
                                </div>
                            </div>

                            <div className='py-2'>
                                <label className='text-sm'>Max registration period ends</label>
                                <input
                                    type="date"
                                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    onChange={(e) => {handleRegistrationPeriod(e.target.value)}}
                                />
                            </div>

                            <div className='py-2'>
                                <label className='text-sm'>Currently registered until</label>
                                <input
                                    type="date"
                                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    onChange={(e) => {handleRegisteredUntil(e.target.value)}}
                                />
                            </div>

                            <div className='py-2'>
                                <label className='text-sm'>Registration Date</label>
                                <input
                                    type="date"
                                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    onChange={(e) => {handleRegisteredDate(e.target.value)}}
                                />
                            </div>

                            <div className='py-2'>
                                 <label className='text-sm'>Costs</label>
                                 <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    onChange={(e) => {handleCostsChange(e.target.value)}}
                                />
                            </div>

                            <div className='py-2'>
                                <label className='text-sm'>Invoices</label>
                                <input
                                    type='text'
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    onChange={(e) => {handleInvoicesChange(e.target.value)}}
                                />
                            </div>

                            <div className='py-2'>
                                <label className='text-sm'>Comments</label>
                                <input
                                    type='text'
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    onChange={(e) => {handleCommentsChange(e.target.value)}}
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <button
                                onClick={handleNewDesign}
                                className="mt-4 bg-red-500 px-4 py-2 rounded border-solid border"
                            >
                                Create Design
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