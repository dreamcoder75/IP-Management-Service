import {useState, useEffect} from "react";
import { Card } from "@material-tailwind/react";
import axios from "axios";

import { base_URL } from "../../constants/config";
// import ModalView from "./modalView";

const mainView = () => {
    const [tradeAllData, setTradeAllData] = useState([]);
    const [tradeData, setTradeData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedPatentId, setSelectedPatentId] = useState('');

    useEffect(() => {
        getPatentAll();
    }, []);

    useEffect(() => {
        if (tradeAllData.length > 0) {
            handlePatentById(tradeAllData[0]['_id']);
        }
    }, [tradeAllData]);

    const getPatentAll = async() => {
        await axios.post(`${base_URL}/trademark/getTrademarksAll`)
        .then(res => {  
            setTradeAllData(res.data.data);
            console.log(res.data.data);
        })
        .catch(err => {
            console.log(err)
        });
    }

    const handlePatentById = async(_id :any) => {
        var result = tradeAllData.filter(obj => {
            return obj['_id'] === _id
        });
        setTradeData(result[0]);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return(
        <>
            <div className="flex dark:bg-boxdark">
                <Card className="w-70 min-h-100 overflow-y-auto shadow-xl dark:bg-boxdark">
                    <div className="items-center justify-center">
                        <button className="flex" onClick={toggleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Insert Record
                        </button>
                        {/* {isModalOpen && (
                            <ModalView 
                            isOpen = {isModalOpen}
                            setToggleModal={toggleModal} />
                        )} */}
                    </div>

                    <ul className="list-none p-0 space-y-2">
                        {tradeAllData.map(({ Reference_no, _id }) => (
                            <li key={_id} className="p-2 rounded px-6 py-4" onClick={() => handlePatentById(_id)}>
                                {Reference_no}
                            </li>
                        ))}
                    </ul>
                </Card>
                <div className="w-full h-full bg-white grid grid-cols-2 gap-4 dark:bg-boxdark">
                    <div className="bg-white dark:bg-boxdark">
                        {/* image */}
                    </div>

                    <div className="bg-white dark:bg-boxdark">

                        <div className="text-md font-bold">Reference_no</div>
                        <label className="text-sm mt-2">{  tradeData && tradeData['Reference_no'] ? tradeData['Reference_no'] : '-' }</label>

                        <div className="text-md font-bold mt-4">Patent family</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Trade_Mark_family'] ? tradeData['Trade_Mark_family'] : '-' }</label>
                        
                        <div className="text-md font-bold mt-4">Application No</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Trade_Mark_no'] ? tradeData['Trade_Mark_no'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Jurisdiction</div> 
                        <label className="text-sm mt-2">{ tradeData && tradeData['Jurisdiction'] ? tradeData['Jurisdiction'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Invention title</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Invention_title'] ? tradeData['Invention_title' ] : '-' }</label>

                        <div className="text-md font-bold mt-4">Abstract</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Abstract'] ? tradeData['Abstract'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Earliest_Priority_Date</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Earliest_Priority_Date'] ? tradeData['Earliest_Priority_Date'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Patent_Application_Type</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Patent_Application_Type'] ? tradeData['Patent_Application_Type'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Complete_Application_Deadline</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Complete_Application_Deadline'] ? tradeData['Complete_Application_Deadline'] : '-'}</label>

                        <div className="text-md font-bold mt-4">International_Filing_Date</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['International_Filing_Date'] ? tradeData['International_Filing_Date'] : '-'}</label>

                        <div className="text-md font-bold mt-4">PCT_Application_No</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['PCT_Application_No'] ? tradeData['PCT_Application_No'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Priority_Application</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Priority_Application'] ? tradeData['Priority_Application'] : '-'}</label>

                        <div className="text-md font-bold mt-4">WIPO_Database</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['WIPO_Database'] ? tradeData['WIPO_Database'] : '-'}</label>

                        <div className="text-md font-bold mt-4">National_Phase_Deadline</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['National_Phase_Deadline'] ? tradeData['National_Phase_Deadline'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Convention_Deadline</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Convention_Deadline'] ? tradeData['Convention_Deadline'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Status</div>
                        <label className={`text-sm mt-2 rounded-lg text-white ${tradeData && tradeData['Status'] === 'Pending Filing' ? 'bg-primary' : tradeData && tradeData['Status'] === 'granted' ? 'bg-success': tradeData && tradeData['Status'] === 'Filed' ? 'bg-danger': 'bg-meta-6'}`}>{ tradeData && tradeData['Status'] }</label>

                        <div className="text-md font-bold mt-4">Application_Phase</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Application_Phase'] ? tradeData['Application_Phase'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Published</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Published'] ? tradeData['Published'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Publication_Date</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Publication_Date'] ? tradeData['Publication_Date'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Publication_No</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Publication_No'] ? tradeData['Publication_No'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Inventors</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Inventors'] ? tradeData['Inventors'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Official_Database</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Official_Database'] ? tradeData['Official_Database'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Applicant</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Applicant'] ? tradeData['Applicant'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Applicant_address</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Applicant_address'] ? tradeData['Applicant_address'] : '-'}</label>

                        <div className="text-md font-bold mt-4">IP_Firm</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['IP_Firm'] ? tradeData['IP_Firm'] : '-'}</label>

                        <div className="text-md font-bold mt-4">IP_Firm_Reference_No</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['IP_Firm_Reference_No'] ? tradeData['IP_Firm_Reference_No'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Address_for_services</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Address_for_services'] ? tradeData['Address_for_services'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Responsible_Attorney</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Responsible_Attorney'] ? tradeData['Responsible_Attorney'] : '-'}</label>

                        {/* <div className="text-md font-bold mt-4">Attachments</div>
                        <div className="text-sm mt-2"></div> */}

                        <div className="text-md font-bold mt-4">Patent_Anniversary</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Patent_Anniversary'] ? tradeData['Patent_Anniversary'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Next_Renewal</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Next_Renewal'] ? tradeData['Next_Renewal'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Deadlines</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Deadlines'] ? tradeData['Deadlines'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Comments</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Comments'] ? tradeData['Comments'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Costs</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Costs'] ? tradeData['Costs'] : '-'}</label>

                        <div className="text-md font-bold mt-4">Invoices</div>
                        <label className="text-sm mt-2">{ tradeData && tradeData['Invoices'] ? tradeData['Invoices'] : '-'}</label>
                    </div>  
                </div>
            </div>
        </>
    );
}

export default mainView
