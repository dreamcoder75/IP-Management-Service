import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const galleryView = () => {
  const data = useSelector((state: any) => state.Patent.data);

  return (
    <>
      <div className="grid grid-cols-5 gap-4 pt-3">
        <Card className="hover:bg-indigo-500 max-w-sm overflow-hidden rounded-lg bg-white drop-shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 dark:bg-boxdark">
          <CardHeader className="m-0 scale-100 rounded-lg">
            <img
              className="h-[300px] w-full"
              src="/src/images/VEFF.JPG"
              alt="ui/ux review check"
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>

          <CardBody className="px-6 py-4">
            <div className="text-xs">Reference No</div>
            <div className="text-md mb-1">TRIAUT01</div>
            <div className="mb-2 text-xs">Patent Family</div>
            <div className="text-md mb-1">PF01</div>
            <div className="mb-2 text-xs">Application_no</div>
            <div className="text-md mb-1">20020705</div>
            <div className="mb-2 text-xs">Status</div>
            <div className="text-md mb-1">Pending Filling</div>
            <div className="mb-2 text-xs">Cost</div>
            <div className="text-md mb-1">$200</div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default galleryView;
