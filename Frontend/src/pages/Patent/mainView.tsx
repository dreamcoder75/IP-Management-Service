import { useState, useEffect } from "react";
import { Card } from "@material-tailwind/react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

import { base_URL } from "../../constants/config";
import ModalView from "./modalView";
import moment from "moment";
import { setPatentData } from "../../reducers/Patentreducer";

const mainView = () => {
  const [pAllData, setPAllData] = useState<any>([]);
  const [pData, setPData] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();

  const tabContent = [
    {
      id: 0,
      title: "Main Info",
      content: (
        <div>
          <div className="text-md font-bold">Reference_no</div>
          <label className="mt-2 text-sm">
            {pData && pData["Reference_no"] ? pData["Reference_no"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Patent family</div>
          <label className="mt-2 text-sm">
            {pData && pData["Patent_family"] ? pData["Patent_family"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Application No</div>
          <label className="mt-2 text-sm">
            {pData && pData["Application_no"] ? pData["Application_no"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Jurisdiction</div>
          <label className="mt-2 text-sm">
            {pData && pData["Jurisdiction"] ? pData["Jurisdiction"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Invention title</div>
          <label className="mt-2 text-sm">
            {pData && pData["Invention_title"] ? pData["Invention_title"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Abstract</div>
          <label className="mt-2 text-sm">
            {pData && pData["Abstract"] ? pData["Abstract"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Patent_Application_Type</div>
          <label className="mt-2 text-sm">
            {pData && pData["Patent_Application_Type"]
              ? pData["Patent_Application_Type"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">PCT_Application_No</div>
          <label className="mt-2 text-sm">
            {pData && pData["PCT_Application_No"]
              ? pData["PCT_Application_No"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Priority_Application</div>
          <label className="mt-2 text-sm">
            {pData && pData["Priority_Application"]
              ? pData["Priority_Application"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">WIPO_Database</div>
          <label className="mt-2 text-sm">
            {pData && pData["WIPO_Database"] ? pData["WIPO_Database"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Status</div>
          <label
            className={` mt-2 rounded-lg p-1 text-sm text-white ${
              pData && pData["Status"] === "Pending Filing"
                ? "bg-primary"
                : pData && pData["Status"] === "granted"
                ? "bg-success"
                : pData && pData["Status"] === "Filed"
                ? "bg-danger"
                : "bg-meta-6"
            }`}
          >
            {pData && pData["Status"]}
          </label>

          <div className="text-md mt-4 font-bold">Application_Phase</div>
          <label className="mt-2 text-sm">
            {pData && pData["Application_Phase"]
              ? pData["Application_Phase"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Published</div>
          <label className="mt-2 text-sm">
            {pData && pData["Published"] ? pData["Published"] : "-"}
          </label>
        </div>
      ),
    },
    {
      id: 1,
      title: "Other Info",
      content: (
        <div>
          <div className="text-md mt-4 font-bold">Publication_No</div>
          <label className="mt-2 text-sm">
            {pData && pData["Publication_No"] ? pData["Publication_No"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Inventors</div>
          <div className="flex space-x-4">
            {pData && pData.Inventors && pData.Inventors.length > 0 ? (
              pData.Inventors.map((inventor: any, index: number) => (
                <label key={index} className="mt-2 text-sm">
                  {typeof inventor === "object" ? inventor.value : inventor}
                </label>
              ))
            ) : (
              <label className="mt-2 text-sm">-</label>
            )}
          </div>

          {/* <div className="text-md font-bold mt-4">Official_Database</div>
                <label className="text-sm mt-2">{ pData && pData['Official_Database'] ? pData['Official_Database'] : '-'}</label> */}

          <div className="mt-4">
            <a
              href={
                pData && pData["Official_Database"]
                  ? pData["Official_Database"]
                  : "-"
              }
              className="hover:bg-blue-800 inline-block rounded bg-meta-3 px-4 py-2 text-white"
            >
              Offical Database
            </a>
          </div>

          <div className="text-md mt-4 font-bold">Applicant</div>
          <label className="mt-2 text-sm">
            {pData && pData["Applicant"] ? pData["Applicant"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Applicant_address</div>
          <label className="mt-2 text-sm">
            {pData && pData["Applicant_address"]
              ? pData["Applicant_address"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">IP_Firm</div>
          <label className="mt-2 text-sm">
            {pData && pData["IP_Firm"] ? pData["IP_Firm"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">IP_Firm_Reference_No</div>
          <label className="mt-2 text-sm">
            {pData && pData["IP_Firm_Reference_No"]
              ? pData["IP_Firm_Reference_No"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Address_for_services</div>
          <label className="mt-2 text-sm">
            {pData && pData["Address_for_services"]
              ? pData["Address_for_services"]
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Responsible_Attorney</div>
          <div className="flex space-x-4">
            {pData &&
            pData.Responsible_Attorney &&
            pData.Responsible_Attorney.length > 0 ? (
              pData.Responsible_Attorney.map(
                (Responsible_Attorney: any, index: number) => (
                  <label key={index} className="mt-2 text-sm">
                    {typeof Responsible_Attorney === "object"
                      ? Responsible_Attorney.value
                      : Responsible_Attorney}
                  </label>
                )
              )
            ) : (
              <label className="mt-2 text-sm">-</label>
            )}
          </div>
          <div className="text-md mt-4 font-bold">Comments</div>
          <label className="mt-2 text-sm">
            {pData && pData["Comments"] ? pData["Comments"] : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Costs</div>
          <label className="mt-2 text-sm">
            {pData && pData["Costs"] ? pData["Costs"] : "-"}
          </label>
        </div>
      ),
    },
    {
      id: 2,
      title: "Deadline Info",
      content: (
        <div>
          <div className="text-md mt-4 font-bold">Earliest_Priority_Date</div>
          <label className="mt-2 text-sm">
            {pData && pData.Earliest_Priority_Date
              ? moment(pData.Earliest_Priority_Date).format("YYYY-MM-DD")
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">
            Complete_Application_Deadline
          </div>
          <label className="mt-2 text-sm">
            {pData && pData.Earliest_Priority_Date
              ? moment(pData.Complete_Application_Deadline).format("YYYY-MM-DD")
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">
            International_Filing_Date
          </div>
          <label className="mt-2 text-sm">
            {pData && pData.International_Filing_Date
              ? moment(pData.International_Filing_Date).format("YYYY-MM-DD")
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">National_Phase_Deadline</div>
          <label className="mt-2 text-sm">
            {pData && pData.National_Phase_Deadline
              ? pData.National_Phase_Deadline
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Convention_Deadline</div>
          <label className="mt-2 text-sm">
            {pData && pData.Convention_Deadline
              ? moment(pData.Convention_Deadline).format("YYYY-MM-DD")
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Publication_Date</div>
          <label className="mt-2 text-sm">
            {pData && pData.Publication_Date
              ? moment(pData.Publication_Date).format("YYYY-MM-DD")
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Patent_Anniversary</div>
          <label className="mt-2 text-sm">
            {pData && pData.Patent_Anniversary
              ? moment(pData.Patent_Anniversary).format("YYYY-MM-DD")
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Next_Renewal</div>
          <label className="mt-2 text-sm">
            {pData && pData.Next_Renewal
              ? moment(pData.Next_Renewal).format("YYYY-MM-DD")
              : "-"}
          </label>

          <div className="text-md mt-4 font-bold">Deadlines</div>
          <label className="mt-2 text-sm">
            {pData && pData.Deadlines
              ? moment(pData.Deadlines).format("YYYY-MM-DD")
              : "-"}
          </label>
        </div>
      ),
    },
    {
      id: 3,
      title: "File Info",
      content: (
        <div>
          <div className="text-md mt-4 font-bold">Attachments</div>
          <label className="mt-2 text-sm">{pData?.Patent_Figures || "-"}</label>
          {/* <DocViewer
                    documents={docs}
                    activeDocument={activeDocument}
                    onDocumentChange={handleDocumentChange}
                /> */}
        </div>
      ),
    },
  ];

  const handleTabClick = (id: any) => {
    setActiveTab(id);
  };

  useEffect(() => {
    getPatentAll();
  }, []);

  useEffect(() => {
    if (pAllData.length > 0) {
      handlePatentById(pAllData[0]["_id"]);
    }
  }, [pAllData]);

  const getPatentAll = async () => {
    await axios
      .post(`${base_URL}/patent/getPatentsAll`)
      .then((res) => {
        setPAllData(res.data.data);
        dispatch(setPatentData(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePatentById = async (_id: any) => {
    var result = pAllData.filter((obj: any) => {
      return obj["_id"] === _id;
    });
    console.log(result[0]);
    setPData(result[0]);
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
        <Card className="min-h-100 w-80 overflow-y-auto shadow-xl dark:bg-boxdark">
          <div className="items-center justify-center p-2">
            <span className="ml-4 flex space-y-2" onClick={toggleModal}>
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
            </span>
            {isModalOpen && (
              <ModalView
                isOpen={isModalOpen}
                setToggleModal={toggleModal}
                getPatentAll={getPatentAll}
              />
            )}
          </div>

          <ul className="list-none space-y-2 p-0">
            {pAllData.map((item: any, index: number) => (
              <li
                key={index}
                className="rounded p-1 px-8"
                onClick={() => handlePatentById(item["_id"])}
              >
                <label
                  className={`mt-2 rounded-lg p-1 pb-1 pt-1 text-sm text-white ${
                    item && item["Status"] === "Pending Filing"
                      ? "bg-primary"
                      : item && item["Status"] === "granted"
                      ? "bg-success"
                      : item && item["Status"] === "Filed"
                      ? "bg-danger"
                      : "bg-meta-6"
                  }`}
                ></label>
                <span className="ml-2">{item.Reference_no}</span>
              </li>
            ))}
          </ul>
        </Card>
        <div className="grid w-full grid-cols-2 gap-4 bg-white dark:bg-boxdark">
          <div className="slide-container containerSlide bg-white dark:bg-boxdark">
            <Carousel>
              {pData?.Patent_Figures && pData.Patent_Figures.length > 0 ? (
                pData.Patent_Figures.map((item: any, index: any) => (
                  <div key={index}>
                    <img
                      style={{ width: "100%" }}
                      src={`http://127.0.0.1:8000/${item}`}
                    />
                    <h2>{""}</h2>
                  </div>
                ))
              ) : (
                <img style={{ width: "100%" }} alt="No Images" />
              )}
            </Carousel>
          </div>

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
