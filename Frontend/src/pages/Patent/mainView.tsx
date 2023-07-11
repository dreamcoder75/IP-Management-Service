import { Card } from "@material-tailwind/react";
import React, {useState} from "react";
import ModalView from "./modalView";
// import axios from "axios";


const mainView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };


    // const [uploading, setUploading] = useState(false);


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
                        <li className="bg-blue-200 text-blue-900 p-2 rounded">
                            Item 1
                        </li>
                        <li className="bg-blue-200 text-blue-900 p-2 rounded">
                            Item 2
                        </li>
                        <li className="bg-blue-200 text-blue-900 p-2 rounded">
                            Item 3
                        </li>
                    </ul>
                </Card>
                <div className="w-full h-full bg-white grid grid-cols-2 gap-4 dark:bg-boxdark">
                    <div className="bg-white dark:bg-boxdark">
                        <div className="w-full h-50 rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                                alt="image 1"
                            />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-boxdark">
                        <div className="text-md font-bold">Reference_no</div>
                        <div className="text-sm mt-2">TRIAUP01</div>

                        <div className="text-md font-bold mt-4">Patent family</div>
                        <div className="text-sm mt-2">PF01</div>

                        <div className="text-md font-bold mt-4">Application No</div>
                        <div className="text-sm mt-2">201090509110</div>

                        <div className="text-md font-bold mt-4">Jurisdiction</div> 
                        <div className="text-sm mt-2">AU</div>

                        <div className="text-md font-bold mt-4">Invention title</div>
                        <div className="text-sm mt-2">Electro synthetic or electro energy cell, system, and method of operation</div>

                        <div className="text-md font-bold mt-4">Abstract</div>
                        <div className="text-sm mt-2">About Electro-synthetic or electro-energy cell, system, and method of operation</div>

                        <div className="text-md font-bold mt-4">Earliest_Priority_Date</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Patent_Application_Type</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Complete_Application_Deadline</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">International_Filing_Date</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">PCT_Application_No</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Priority_Application</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">WIPO_Database</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">National_Phase_Deadline</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Convention_Deadline</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Status</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Application_Phase</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Published</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Publication_Date</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Publication_No</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Inventors</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Official_Database</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Applicant</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Applicant_address</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">IP_Firm</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">IP_Firm_Reference_No</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Address_for_services</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Responsible_Attorney</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Attachments</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Patent_Anniversary</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Next_Renewal</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Deadlines</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Comments</div>
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Costs</div>Z
                        <div className="text-sm mt-2">-</div>

                        <div className="text-md font-bold mt-4">Invoices</div>
                        <div className="text-sm mt-2">-</div>

                    </div>
                </div>
        </div>
        </>
    );
}

export default mainView