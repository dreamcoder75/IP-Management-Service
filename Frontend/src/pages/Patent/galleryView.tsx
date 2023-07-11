import {Card, CardHeader, CardBody, Collapse} from "@material-tailwind/react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import React, { useState } from 'react';

const galleryView  = () => {
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
            <div className="grid grid-cols-5 gap-4 px-4">
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
            </div>

        </>
    );
}

export default galleryView