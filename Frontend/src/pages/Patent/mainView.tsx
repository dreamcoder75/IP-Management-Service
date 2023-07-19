import {useState, useEffect} from "react";
import { Card } from "@material-tailwind/react";
import axios from "axios";

import { base_URL } from "../../constants/config";
import ModalView from "./modalView";

const mainView = () => {
    const [pAllData, setPAllData] = useState([]);
    const [pData, setPData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const tabContent = [
      {
        id: 0,
        title: 'Main Info',
        content: (
          <div>
            <div className="text-md font-bold">Reference_no</div>
            <label className="text-sm mt-2">{  pData && pData['Reference_no'] ? pData['Reference_no'] : '-' }</label>

            <div className="text-md font-bold mt-4">Patent family</div>
            <label className="text-sm mt-2">{ pData && pData['Patent_family'] ? pData['Patent_family'] : '-' }</label>
            
            <div className="text-md font-bold mt-4">Application No</div>
            <label className="text-sm mt-2">{ pData && pData['Application_no'] ? pData['Application_no'] : '-'}</label>

            <div className="text-md font-bold mt-4">Jurisdiction</div> 
            <label className="text-sm mt-2">{ pData && pData['Jurisdiction'] ? pData['Jurisdiction'] : '-'}</label>

            <div className="text-md font-bold mt-4">Invention title</div>
            <label className="text-sm mt-2">{ pData && pData['Invention_title'] ? pData['Invention_title' ] : '-' }</label>

            <div className="text-md font-bold mt-4">Abstract</div>
            <label className="text-sm mt-2">{ pData && pData['Abstract'] ? pData['Abstract'] : '-'}</label>

            <div className="text-md font-bold mt-4">Patent_Application_Type</div>
            <label className="text-sm mt-2">{ pData && pData['Patent_Application_Type'] ? pData['Patent_Application_Type'] : '-'}</label>

            <div className="text-md font-bold mt-4">PCT_Application_No</div>
            <label className="text-sm mt-2">{ pData && pData['PCT_Application_No'] ? pData['PCT_Application_No'] : '-'}</label>

            <div className="text-md font-bold mt-4">Priority_Application</div>
            <label className="text-sm mt-2">{ pData && pData['Priority_Application'] ? pData['Priority_Application'] : '-'}</label>

            <div className="text-md font-bold mt-4">WIPO_Database</div>
            <label className="text-sm mt-2">{ pData && pData['WIPO_Database'] ? pData['WIPO_Database'] : '-'}</label>

            <div className="text-md font-bold mt-4">Status</div>
            <label className={`text-sm mt-2 rounded-lg text-white ${pData && pData['Status'] === 'Pending Filing' ? 'bg-primary' : pData && pData['Status'] === 'granted' ? 'bg-success': pData && pData['Status'] === 'Filed' ? 'bg-danger': 'bg-meta-6'}`}>{ pData && pData['Status'] }</label>

            <div className="text-md font-bold mt-4">Application_Phase</div>
            <label className="text-sm mt-2">{ pData && pData['Application_Phase'] ? pData['Application_Phase'] : '-'}</label>

            <div className="text-md font-bold mt-4">Published</div>
            <label className="text-sm mt-2">{ pData && pData['Published'] ? pData['Published'] : '-'}</label>
          </div>
        ),
      },
      {
        id: 1,
        title: 'Other Info',
        content: (
            <div>
                <div className="text-md font-bold mt-4">Publication_No</div>
                <label className="text-sm mt-2">{ pData && pData['Publication_No'] ? pData['Publication_No'] : '-'}</label>

                <div className="text-md font-bold mt-4">Inventors</div>
                <label className="text-sm mt-2">{ pData && pData['Inventors'] ? pData['Inventors'] : '-'}</label>

                <div className="text-md font-bold mt-4">Official_Database</div>
                <label className="text-sm mt-2">{ pData && pData['Official_Database'] ? pData['Official_Database'] : '-'}</label>

                <div className="text-md font-bold mt-4">Applicant</div>
                <label className="text-sm mt-2">{ pData && pData['Applicant'] ? pData['Applicant'] : '-'}</label>

                <div className="text-md font-bold mt-4">Applicant_address</div>
                <label className="text-sm mt-2">{ pData && pData['Applicant_address'] ? pData['Applicant_address'] : '-'}</label>

                <div className="text-md font-bold mt-4">IP_Firm</div>
                <label className="text-sm mt-2">{ pData && pData['IP_Firm'] ? pData['IP_Firm'] : '-'}</label>

                <div className="text-md font-bold mt-4">IP_Firm_Reference_No</div>
                <label className="text-sm mt-2">{ pData && pData['IP_Firm_Reference_No'] ? pData['IP_Firm_Reference_No'] : '-'}</label>

                <div className="text-md font-bold mt-4">Address_for_services</div>
                <label className="text-sm mt-2">{ pData && pData['Address_for_services'] ? pData['Address_for_services'] : '-'}</label>

                <div className="text-md font-bold mt-4">Responsible_Attorney</div>
                <label className="text-sm mt-2">{ pData && pData['Responsible_Attorney'] ? pData['Responsible_Attorney'] : '-'}</label>

                <div className="text-md font-bold mt-4">Comments</div>
                <label className="text-sm mt-2">{ pData && pData['Comments'] ? pData['Comments'] : '-'}</label>

                <div className="text-md font-bold mt-4">Costs</div>
                <label className="text-sm mt-2">{ pData && pData['Costs'] ? pData['Costs'] : '-'}</label>

                <div className="text-md font-bold mt-4">Files</div>
                <label className="text-sm mt-2">{ pData && pData['Files'] ? pData['Files'] : '-'}</label>
            </div>
        ),
      },
      {
        id: 2,
        title: 'Deadline Info',
        content: (
            <div>
                <div className="text-md font-bold mt-4">Earliest_Priority_Date</div>
                <label className="text-sm mt-2">{ pData && pData['Earliest_Priority_Date'] ? pData['Earliest_Priority_Date'] : '-'}</label>

                <div className="text-md font-bold mt-4">Complete_Application_Deadline</div>
                <label className="text-sm mt-2">{ pData && pData['Complete_Application_Deadline'] ? pData['Complete_Application_Deadline'] : '-'}</label>

                <div className="text-md font-bold mt-4">International_Filing_Date</div>
                <label className="text-sm mt-2">{ pData && pData['International_Filing_Date'] ? pData['International_Filing_Date'] : '-'}</label>

                <div className="text-md font-bold mt-4">National_Phase_Deadline</div>
                <label className="text-sm mt-2">{ pData && pData['National_Phase_Deadline'] ? pData['National_Phase_Deadline'] : '-'}</label>

                <div className="text-md font-bold mt-4">Convention_Deadline</div>
                <label className="text-sm mt-2">{ pData && pData['Convention_Deadline'] ? pData['Convention_Deadline'] : '-'}</label>

                <div className="text-md font-bold mt-4">Publication_Date</div>
                <label className="text-sm mt-2">{ pData && pData['Publication_Date'] ? pData['Publication_Date'] : '-'}</label>

                <div className="text-md font-bold mt-4">Patent_Anniversary</div>
                <label className="text-sm mt-2">{ pData && pData['Patent_Anniversary'] ? pData['Patent_Anniversary'] : '-'}</label>

                <div className="text-md font-bold mt-4">Next_Renewal</div>
                <label className="text-sm mt-2">{ pData && pData['Next_Renewal'] ? pData['Next_Renewal'] : '-'}</label>

                <div className="text-md font-bold mt-4">Deadlines</div>
                <label className="text-sm mt-2">{ pData && pData['Deadlines'] ? pData['Deadlines'] : '-'}</label>
            </div>
        ),
      },
    ];

    const handleTabClick = (id : any) => {
        setActiveTab(id);
      };

    useEffect(() => {
        getPatentAll();
    }, []);

    useEffect(() => {
        if (pAllData.length > 0) {
            handlePatentById(pAllData[0]['_id']);
        }
    }, [pAllData]);

    const getPatentAll = async() => {
        await axios.post(`${base_URL}/patent/getPatentsAll`)
        .then(res => {  
            setPAllData(res.data.data);
            console.log(res.data.data);
        })
        .catch(err => {
            console.log(err)
        });
    }

    const handlePatentById = async(_id :any) => {
        var result = pAllData.filter(obj => {
            return obj['_id'] === _id
        });
        setPData(result[0]);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }


    return(
        <>
            <div className="flex dark:bg-boxdark pt-3 round-xl overflow-y-auto min-h-100" style={{ minHeight: "100vh" }}>
                <Card className="w-70 min-h-100 overflow-y-auto shadow-xl dark:bg-boxdark">
                    <div className="items-center justify-center" style={{ padding: "8px 16px" }}>
                        <button className="flex" onClick={toggleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Insert Record
                        </button>
                        {isModalOpen && (
                            <ModalView 
                            isOpen = {isModalOpen}
                            setToggleModal={toggleModal} />
                        )}
                    </div>

                    <ul className="list-none p-0 space-y-2">
                        {pAllData.map(({ Reference_no, _id }) => (
                            <li key={_id} className="p-2 rounded px-6 py-4" onClick={() => handlePatentById(_id)}>
                                {Reference_no}
                            </li>
                        ))}
                    </ul>
                </Card>
                <div className="w-full bg-white grid grid-cols-2 gap-4 dark:bg-boxdark">
                    <div className="bg-white dark:bg-boxdark">
                        {/* image */}
                    </div>
                    
                    <div className="bg-white dark:bg-boxdark">
                        {/* <div className="text-md font-bold mt-4">Abstract</div>
                        <div className="text-sm mt-2">{ pData && pData['Abstract'] }</div> */}
                            <div className="w-full">
                                <div className="border-b border-gray-200">
                                    <nav className="flex space-x-4 w-full" aria-label="Tabs">
                                    {tabContent.map((tab) => (
                                        <button
                                        key={tab.id}
                                        onClick={() => handleTabClick(tab.id)}
                                        className={`text-gray-700 ${
                                            activeTab === tab.id
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        } py-4 px-1 border-b-2 font-medium text-sm`}
                                        aria-selected={tab.id === activeTab}
                                        >
                                        {tab.title}
                                        </button>
                                    ))}
                                    </nav>
                                </div>
                                <div className="mt-4">{tabContent[activeTab].content}</div>
                            </div>
                    </div>  
                </div>
            </div>
        </>
    );
}

export default mainView
