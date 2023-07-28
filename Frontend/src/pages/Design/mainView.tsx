import { useState, useEffect } from "react";
import { Card } from "@material-tailwind/react";
import axios from "axios";

import { base_URL } from "../../constants/config";
import ModalView from "./modalView";

const mainView = () => {
  const [designAllData, setDesignAllData] = useState([]);
  const [designData, setDesignData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      id: 0,
      title: "Main Info",
      content: (
        <div>
          <div className="text-md font-bold">Reference_no</div>
          <label className="mt-2 text-sm">
            {designData && designData["Reference_no"]
              ? designData["Reference_no"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Design Family</div>
          <label className="mt-2 text-sm">
            {designData && designData["design_family"]
              ? designData["design_family"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Design Application No</div>
          <label className="mt-2 text-sm">
            {designData && designData["design_app_no"]
              ? designData["design_app_no"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">SoND</div>
          <label className="mt-2 text-sm">
            {designData && designData["SoND"] ? designData["SoND"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Jurisdiction</div>
          <label className="mt-2 text-sm">
            {designData && designData["Jurisdiction"]
              ? designData["Jurisdiction"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Status</div>
          <label className="mt-2 text-sm">
            {designData && designData["Status"] ? designData["Status"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Designers</div>
          <label className="mt-2 text-sm">
            {designData && designData["Designers"]
              ? designData["Designers"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">IP Firm</div>
          <label className="mt-2 text-sm">
            {designData && designData["IP_Firm"] ? designData["IP_Firm"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">IP Firm Reference No</div>
          <label className="mt-2 text-sm">
            {designData && designData["IP_Firm_Ref_no"]
              ? designData["IP_Firm_Ref_no"]
              : "-"}
          </label>

          {/* <div className="text-md font-bold mt-4">Attachments</div>
                    <label className="text-sm mt-2">{ designData && designData['Attachments'] ? designData['Attachments'] : '-'}</label> */}
        </div>
      ),
    },

    {
      id: 1,
      title: "Other Info",
      content: (
        <div>
          {/* <div className="text-md font-bold mt-4">Official Database</div>
                    <label className="text-sm mt-2">{ designData && designData['Official_database'] ? designData['Official_database'] : '-'}</label> */}

          <div className="mt-4">
            <a
              href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2023901260"
              className="hover:bg-blue-800 inline-block rounded bg-meta-3 px-4 py-2 text-white"
            >
              Offical Database
            </a>
          </div>

          <div className="text-md mt-4 font-bold">Applicant</div>
          <label className="mt-2 text-sm">
            {designData && designData["Applicant"]
              ? designData["Applicant"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Applicant Address</div>
          <label className="mt-2 text-sm">
            {designData && designData["Applicant_address"]
              ? designData["Applicant_address"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Address for Services</div>
          <label className="mt-2 text-sm">
            {designData && designData["address_services"]
              ? designData["Address_services"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Responsible Attorney</div>
          <label className="mt-2 text-sm">
            {designData && designData["Responsible_Attorney"]
              ? designData["Responsible_Attorney"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Costs</div>
          <label className="mt-2 text-sm">
            {designData && designData["Costs"] ? designData["costs"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Comments</div>
          <label className="mt-2 text-sm">
            {designData && designData["Comments"]
              ? designData["Comments"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Invoice</div>
          <label className="mt-2 text-sm">
            {designData && designData["Invoice"] ? designData["Invoice"] : "-"}
          </label>
        </div>
      ),
    },

    {
      id: 2,
      title: "Deadline Info",
      content: (
        <div>
          <div className="text-md mt-4 font-bold">Priority Date</div>
          <label className="mt-2 text-sm">
            {designData && designData["priority_date"]
              ? designData["priority_date"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Filing Date</div>
          <label className="mt-2 text-sm">
            {designData && designData["filing_date"]
              ? designData["filing_date"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">
            Max registration period ends
          </div>
          <label className="mt-2 text-sm">
            {designData && designData["registration_period"]
              ? designData["registration_period"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">
            Currently registered until
          </div>
          <label className="mt-2 text-sm">
            {designData && designData["registered_until"]
              ? designData["registered_until"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Registration Date</div>
          <label className="mt-2 text-sm">
            {designData && designData["Registration_Date"]
              ? designData["Registration_Date"]
              : "-"}
          </label>
        </div>
      ),
    },
  ];

  const handleTabClick = (id: any) => {
    setActiveTab(id);
  };

  useEffect(() => {
    getDesignAll();
  }, []);

  useEffect(() => {
    if (designAllData.length > 0) {
      handleDesignById(designAllData[0]["_id"]);
    }
  }, [designAllData]);

  const getDesignAll = async () => {
    await axios
      .post(`${base_URL}/design/getDesignsAll`)
      .then((res) => {
        setDesignAllData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDesignById = async (_id: any) => {
    var result = designAllData.filter((obj) => {
      return obj["_id"] === _id;
    });
    setDesignData(result[0]);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className="round-xl min-h-100 flex overflow-y-auto pt-3 dark:bg-boxdark"
        style={{ minHeight: "100vh" }}
      >
        <Card className="min-h-100 w-70 overflow-y-auto shadow-xl dark:bg-boxdark">
          <div className="items-center justify-center p-2">
            <button className="flex" onClick={toggleModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Insert Record
            </button>
            {isModalOpen && (
              <ModalView isOpen={isModalOpen} setToggleModal={toggleModal} />
            )}
          </div>

          <ul className="list-none space-y-2 p-0">
            {designAllData.map(({ Reference_no, _id }) => (
              <li
                key={_id}
                className="rounded p-2 px-6 py-4"
                onClick={() => handleDesignById(_id)}
              >
                {Reference_no}
              </li>
            ))}
          </ul>
        </Card>
        <div className="grid w-full grid-cols-2 gap-4 bg-white dark:bg-boxdark">
          <div className="bg-white dark:bg-boxdark">{/* image */}</div>

          <div className="bg-white dark:bg-boxdark">
            {/* <div className="text-md font-bold mt-4">Abstract</div>
                    <div className="text-sm mt-2">{ pData && pData['Abstract'] }</div> */}
            <div className="w-full">
              <div className="border-gray-200 border-b">
                <nav className="flex w-full space-x-4" aria-label="Tabs">
                  {tabContent.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white text-gray-500 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 active -mb-px inline-flex items-center gap-2 rounded-t-lg border px-4 py-3 text-center font-medium ${
                        activeTab === tab.id
                          ? "border-indigo-500 text-indigo-600 text-lg text-primary "
                          : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent"
                      } border-b-2 px-1 py-4 text-base font-medium`}
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
};

export default mainView;
