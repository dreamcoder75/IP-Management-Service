import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"input">;

const ImageUploader = (props: Props) => {
  return (
    <input
      {...props}
      type="file"
      multiple
      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-2 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-blue-500 active:border-blue-500 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-blue-500"
      
    />
  );
};

export default ImageUploader;