import {useState, useEffect} from "react";
import { Card } from "@material-tailwind/react";
import axios from "axios";

import { base_URL } from "../../constants/config";
import ModalView from "./modalView";

function mainView() {
    const [tradeAllData, setTradeAllData] = useState([]);
    const [tradeData, setTradeData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleTabClick = (id: any) => {
        setActiveTab(id);
    };

    const handleTrademarkById = async (_id: any) => {
        var result = tradeAllData.filter(obj => {
            return obj['_id'] === _id;
        });
        setTradeData(result[0]);
    };

    const tabContent = [
        {
            id: 0,
            title: 'Main Info',
            content: (
                <div>
                    <div className="text-md font-bold mt-4">Reference_no</div>
                    <label className="text-sm mt-2">{tradeData && tradeData['Reference_no'] ? tradeData['Reference_no'] : '-'}</label>

                    <div className="text-md font-bold mt-4">Trade Mark No</div>
                    <label className="text-sm mt-2">{tradeData && tradeData['Trade_mark_no'] ? tradeData['Trade_mark_no'] : '-'}</label>

                    <div className="text-md font-bold mt-4">Jurisdiction</div>
                    <label className="text-sm mt-2">{tradeData && tradeData['Jurisdiction'] ? tradeData['Jurisdiction'] : '-'}</label>

                    <div className="text-md font-bold mt-4">Status</div>
                    <label className="text-sm mt-2">{tradeData && tradeData['Status'] ? tradeData['Status'] : '-'}</label>

                    <div className="text-md font-bold mt-4">Official Database</div>
                    <label className="text-sm mt-2">{tradeData && tradeData['Official_database'] ? tradeData['Official_database'] : '-'}</label>

                    <div className="text-md font-bold mt-4">Applicant</div>
                    <label className="text-sm mt-2">{tradeData && tradeData['Applicant'] ? tradeData['Applicant'] : '-'}</label>

                    <div className="text-md font-bold mt-4">IP Firm</div>
                    <label className="text-sm mt-2">{tradeData && tradeData['IP_Firm'] ? tradeData['IP_Firm'] : '-'}</label>

                    <div className="text-md font-bold mt-4">IP_Firm_Reference_no</div>
                    <label className="text-sm mt-2">{tradeData && tradeData['Status'] ? tradeData['Status'] : '-'}</label>

                </div>
            )
        },
        {
            id: 1,
            title: 'Other Info',
            content: (
                <div>
                    <div className="text-md font-bold mt-4">Do you wish to file in overseas countries?</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Has the First Examination Report?</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Has the First Compliance Report been issued? </div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Has the First Office Action been issued? </div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Applicant Address</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Address for services</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Responsible Attorney</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Files</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Comments</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Costs</div>
                    <label className="text-sm mt-2">{'-'}</label>
                </div>
            )
        },
        {
            id: 2,
            title: 'Deadline Info',
            content: (
                <div>
                    <div className="text-md font-bold mt-4">Priority Date</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Filing Date</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Convention Deadline</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Date of First Examination Report</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Date of First Compliance Report</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Date of First Office Action</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Acceptance Deadline</div>
                    <label className="text-sm mt-2">{'-'}</label>

                    <div className="text-md font-bold mt-4">Renewal Deadline</div>
                    <label className="text-sm mt-2">{'-'}</label>

                </div>
            )
        }
    ];

    useEffect(() => {
        getTrademarksAll();
    });

    useEffect(() => {
        if (tradeAllData.length > 0) {
            handleTrademarkById(tradeAllData[0]['_id']);
        }
    }, [tradeAllData]);

    const getTrademarksAll = async () => {
        await axios.post(`${base_URL}/trademark/getTrademarkAll`)
            .then(res => {
                setTradeAllData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="flex dark:bg-boxdark pt-3 round-xl overflow-y-auto min-h-100" style={{ minHeight: "100vh" }}>
                <Card className="w-70 min-h-100 overflow-y-auto shadow-xl dark:bg-boxdark">
                    <div className="items-center justify-center p-2" >
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
                        {tradeAllData.map(({ Reference_no, _id }) => (
                            <li key={_id} className="p-2 rounded px-6 py-4" onClick={() => handleTrademarkById(_id)}>
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
                                            className={`hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-2 font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 active ${activeTab === tab.id
                                                    ? 'border-indigo-500 text-indigo-600 text-lg text-primary'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} py-4 px-1 border-b-2 font-medium text-base`}
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

export default mainView;