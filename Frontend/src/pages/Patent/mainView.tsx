import {useState, useEffect} from "react";
import { Card } from "@material-tailwind/react";
import axios from "axios";

import { base_URL } from "../../constants/config";
import ModalView from "./modalView";

const mainView = () => {
    const [pAllData, setPAllData] = useState([]);
    const [pData, setPData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedPatentId, setSelectedPatentId] = useState('');

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
            <div className="flex dark:bg-boxdark">
                <Card className="w-70 min-h-100 overflow-y-auto shadow-xl dark:bg-boxdark">
                    <div className="items-center justify-center">
                        <button className="flex" onClick={toggleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Insert Patent
                        </button>
                        {isModalOpen && (
                            <ModalView 
                            isOpen = {isModalOpen}
                            setToggleModal={toggleModal} />
                        )}
                    </div>

                    <ul className="list-none p-0 space-y-2">
                        {pAllData.map(({ Reference_no, _id }) => (
                            <li key={_id} className="p-2 rounded " onClick={() => handlePatentById(_id)}>
                                {Reference_no}
                            </li>
                        ))}
                    </ul>
                </Card>
                <div className="w-full h-full bg-white grid grid-cols-2 gap-4 dark:bg-boxdark">
                    <div className="bg-white dark:bg-boxdark">
                        <div className="w-full h-50 rounded-lg">
                            <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                                </div>

                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                                </div>

                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                                </div>
                            </div>

                            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            </div>

                            <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                    <span className="hidden">Previous</span>
                                </span>
                            </button>
                            <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"  data-carousel-next>
                                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                    <span className="hidden">Next</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-boxdark">
                        {/* <div className="text-md font-bold mt-4">Abstract</div>
                        <div className="text-sm mt-2">{ pData && pData['Abstract'] }</div> */}

                        <div className="text-md font-bold">Reference_no</div>
                        <div className="text-sm mt-2">{ pData && pData['Reference_no'] }</div>

                        <div className="text-md font-bold mt-4">Patent family</div>
                        <div className="text-sm mt-2">{ pData && pData['Patent_family'] }</div>
                        
                        <div className="text-md font-bold mt-4">Application No</div>
                        <div className="text-sm mt-2">{ pData && pData['Application_no'] }</div>

                        <div className="text-md font-bold mt-4">Jurisdiction</div> 
                        <div className="text-sm mt-2">{ pData && pData['Jurisdiction'] }</div>

                        <div className="text-md font-bold mt-4">Invention title</div>
                        <div className="text-sm mt-2">{ pData && pData['Invention_title'] }</div>

                        <div className="text-md font-bold mt-4">Abstract</div>
                        <div className="text-sm mt-2">{ pData && pData['Abstract'] }</div>

                        <div className="text-md font-bold mt-4">Earliest_Priority_Date</div>
                        <div className="text-sm mt-2">{ pData && pData['Earliest_Priority_Date'] }</div>

                        <div className="text-md font-bold mt-4">Patent_Application_Type</div>
                        <div className="text-sm mt-2">{ pData && pData['Patent_Application_Type'] }</div>

                        <div className="text-md font-bold mt-4">Complete_Application_Deadline</div>
                        <div className="text-sm mt-2">{ pData && pData['Complete_Application_Deadline'] }</div>

                        <div className="text-md font-bold mt-4">International_Filing_Date</div>
                        <div className="text-sm mt-2">{ pData && pData['International_Filing_Date'] }</div>

                        <div className="text-md font-bold mt-4">PCT_Application_No</div>
                        <div className="text-sm mt-2">{ pData && pData['PCT_Application_No'] }</div>

                        <div className="text-md font-bold mt-4">Priority_Application</div>
                        <div className="text-sm mt-2">{ pData && pData['Priority_Application'] }</div>

                        <div className="text-md font-bold mt-4">WIPO_Database</div>
                        <div className="text-sm mt-2">{ pData && pData['WIPO_Database'] }</div>

                        <div className="text-md font-bold mt-4">National_Phase_Deadline</div>
                        <div className="text-sm mt-2">{ pData && pData['National_Phase_Deadline'] }</div>

                        <div className="text-md font-bold mt-4">Convention_Deadline</div>
                        <div className="text-sm mt-2">{ pData && pData['Convention_Deadline'] }</div>

                        <div className="text-md font-bold mt-4">Status</div>
                        <div className="text-sm mt-2">{ pData && pData['Status'] }</div>

                        <div className="text-md font-bold mt-4">Application_Phase</div>
                        <div className="text-sm mt-2">{ pData && pData['Application_Phase']}</div>

                        <div className="text-md font-bold mt-4">Published</div>
                        <div className="text-sm mt-2">{ pData && pData['Published'] }</div>

                        <div className="text-md font-bold mt-4">Publication_Date</div>
                        <div className="text-sm mt-2">{ pData && pData['Publication_Date'] }</div>

                        <div className="text-md font-bold mt-4">Publication_No</div>
                        <div className="text-sm mt-2">{ pData && pData['Publication_No'] }</div>

                        <div className="text-md font-bold mt-4">Inventors</div>
                        <div className="text-sm mt-2">{ pData && pData['Inventors'] }</div>

                        <div className="text-md font-bold mt-4">Official_Database</div>
                        <div className="text-sm mt-2">{ pData && pData['Official_Database'] }</div>

                        <div className="text-md font-bold mt-4">Applicant</div>
                        <div className="text-sm mt-2">{ pData && pData['Applicant'] }</div>

                        <div className="text-md font-bold mt-4">Applicant_address</div>
                        <div className="text-sm mt-2">{ pData && pData['Applicant_address'] }</div>

                        <div className="text-md font-bold mt-4">IP_Firm</div>
                        <div className="text-sm mt-2">{ pData && pData['IP_Firm']}</div>

                        <div className="text-md font-bold mt-4">IP_Firm_Reference_No</div>
                        <div className="text-sm mt-2">{ pData && pData['IP_Firm_Reference_No']}</div>

                        <div className="text-md font-bold mt-4">Address_for_services</div>
                        <div className="text-sm mt-2">{ pData && pData['Address_for_services']}</div>

                        <div className="text-md font-bold mt-4">Responsible_Attorney</div>
                        <div className="text-sm mt-2">{ pData && pData['Responsible_Attorney']}</div>

                        {/* <div className="text-md font-bold mt-4">Attachments</div>
                        <div className="text-sm mt-2"></div> */}

                        <div className="text-md font-bold mt-4">Patent_Anniversary</div>
                        <div className="text-sm mt-2">{ pData && pData['Patent_Anniversary']}</div>

                        <div className="text-md font-bold mt-4">Next_Renewal</div>
                        <div className="text-sm mt-2">{ pData && pData['Next_Renewal']}</div>

                        <div className="text-md font-bold mt-4">Deadlines</div>
                        <div className="text-sm mt-2">{ pData && pData['Deadlines']}</div>

                        <div className="text-md font-bold mt-4">Comments</div>
                        <div className="text-sm mt-2">{ pData && pData['Comments']}</div>

                        <div className="text-md font-bold mt-4">Costs</div>
                        <div className="text-sm mt-2">{ pData && pData['Costs']}</div>

                        <div className="text-md font-bold mt-4">Invoices</div>
                        <div className="text-sm mt-2">{ pData && pData['Invoices']}</div>
                    </div>  
                </div>
            </div>
        </>
    );
}

export default mainView
