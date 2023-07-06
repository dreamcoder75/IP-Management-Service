import {Card, CardHeader, CardBody, Collapse} from "@material-tailwind/react";
import React, { useState } from 'react';
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const patent = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(cur => !cur);

    const [active, setActive] = React.useState(1);

    const getItemProps = (index:any) => ({
      className: active === index ? "bg-blue-gray-100 text-blue-gray-900" : "",
      onClick: () => setActive(index),
    });

    const next = () => {
      if (active === 5) return;

      setActive(active + 1);
    };

    const prev = () => {
      if (active === 1) return;

      setActive(active - 1);
    };

    return(
        <>
        <div className="flex position: absolute z-index:10">
            <div>
                <div className="flex px-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <button className = "text-inherit text-md" onClick={toggleOpen}> Customize Cards </button>
                </div>

                <Collapse open={open}>
                    <Card className="py-10">
                        <CardBody>
                            <h1> Hello World</h1>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div>
                <div className="flex px-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                    </svg>

                    <button className = "text-inherit text-md"> Filter </button>
                </div>

                <Collapse open={open}>
                    <Card className="py-10">
                        <CardBody>
                            <h1> Hello World</h1>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div>
                <div className="flex px-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>

                    <button className = "text-inherit text-md "> Sort </button>
                </div>

                <Collapse open={open}>
                    <Card className="py-10">
                        <CardBody>
                            <h1> Hello World</h1>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <div className="flex px-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <button className = "text-inherit text-md "> Download CSV </button>
            </div>
        </div>

        <div className="grid grid-cols-5 gap-4 py-15">
            <Card className="bg-white dark:bg-boxdark max-w-sm rounded-lg max-w-[26rem] overflow-hidden drop-shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                <CardHeader className="m-0 scale-100 rounded-lg">
                <img className="h-[300px] w-full"
                    src="/src/images/image.png"
                    alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>

                <CardBody className="px-6 py-4">
                    <div className="text-xs">Reference No</div>
                    <div className="text-md mb-1">TRIAUT01</div>
                    <div className="text-xs mb-2">Patent Family</div>
                    <div className="text-md mb-1">PF01</div>
                    <div className="text-xs mb-2">Application_no</div>
                    <div className="text-md mb-1">20020705</div>
                    <div className="text-xs mb-2">Status</div>
                    <div className="text-md mb-1">Pending Filling</div>
                    <div className="text-xs mb-2">Cost</div>
                    <div className="text-md mb-1">$200</div>
                </CardBody>
            </Card>

            <Card className="bg-white dark:bg-boxdark max-w-sm rounded-lg max-w-[26rem] overflow-hidden drop-shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                <CardHeader className="m-0 scale-100 rounded-lg">
                <img className="h-[300px] w-full"
                    src="/src/images/image.png"
                    alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>

                <CardBody className="px-6 py-4">
                    <div className="text-xs">Reference No</div>
                    <div className="text-md mb-1">TRIAUT01</div>
                    <div className="text-xs mb-2">Patent Family</div>
                    <div className="text-md mb-1">PF01</div>
                    <div className="text-xs mb-2">Application_no</div>
                    <div className="text-md mb-1">20020705</div>
                    <div className="text-xs mb-2">Status</div>
                    <div className="text-md mb-1">Pending Filling</div>
                    <div className="text-xs mb-2">Cost</div>
                    <div className="text-md mb-1">$200</div>
                </CardBody>
            </Card>

            <Card className="bg-white dark:bg-boxdark max-w-sm rounded-lg max-w-[26rem] overflow-hidden drop-shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                <CardHeader className="m-0 scale-100 rounded-lg">
                <img className="h-[300px] w-full"
                    src="/src/images/image.png"
                    alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>

                <CardBody className="px-6 py-4">
                    <div className="text-xs">Reference No</div>
                    <div className="text-md mb-1">TRIAUT01</div>
                    <div className="text-xs mb-2">Patent Family</div>
                    <div className="text-md mb-1">PF01</div>
                    <div className="text-xs mb-2">Application_no</div>
                    <div className="text-md mb-1">20020705</div>
                    <div className="text-xs mb-2">Status</div>
                    <div className="text-md mb-1">Pending Filling</div>
                    <div className="text-xs mb-2">Cost</div>
                    <div className="text-md mb-1">$200</div>
                </CardBody>
            </Card>

            <Card className="bg-white dark:bg-boxdark max-w-sm rounded-lg max-w-[26rem] overflow-hidden drop-shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                <CardHeader className="m-0 scale-100 rounded-lg">
                <img className="h-[300px] w-full"
                    src="/src/images/product/product-02.png"
                    alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>

                <CardBody className="px-6 py-4">
                    <div className="text-xs">Reference No</div>
                    <div className="text-md mb-1">TRIAUT01</div>
                    <div className="text-xs mb-2">Patent Family</div>
                    <div className="text-md mb-1">PF01</div>
                    <div className="text-xs mb-2">Application_no</div>
                    <div className="text-md mb-1">20020705</div>
                    <div className="text-xs mb-2">Status</div>
                    <div className="text-md mb-1">Pending Filling</div>
                    <div className="text-xs mb-2">Cost</div>
                    <div className="text-md mb-1">$200</div>
                </CardBody>
            </Card>

            <Card className="bg-white dark:bg-boxdark max-w-sm rounded-lg max-w-[26rem] overflow-hidden drop-shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                <CardHeader className="m-0 scale-100 rounded-lg">
                <img className="h-[300px] w-full"
                    src="/src/images/product/product-01.png"
                    alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>

                <CardBody className="px-6 py-4">
                    <div className="text-xs">Reference No</div>
                    <div className="text-md mb-1">TRIAUT01</div>
                    <div className="text-xs mb-2">Patent Family</div>
                    <div className="text-md mb-1">PF01</div>
                    <div className="text-xs mb-2">Application_no</div>
                    <div className="text-md mb-1">20020705</div>
                    <div className="text-xs mb-2">Status</div>
                    <div className="text-md mb-1">Pending Filling</div>
                    <div className="text-xs mb-2">Cost</div>
                    <div className="text-md mb-1">$200</div>
                </CardBody>
            </Card>
        </div>

        <div className="float-right">
            <ButtonGroup variant="outlined" color="blue-gray">
            <IconButton onClick={prev}>
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <IconButton {...getItemProps(1)}>1</IconButton>
            <IconButton {...getItemProps(2)}>2</IconButton>
            <IconButton {...getItemProps(3)}>3</IconButton>
            <IconButton {...getItemProps(4)}>4</IconButton>
            <IconButton {...getItemProps(5)}>5</IconButton>
            <IconButton onClick={next}>
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            </ButtonGroup>
        </div>
        </>
    );
}

export default patent
