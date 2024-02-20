import { ReactNode } from "react";

interface BodyResponseProps {
  children: ReactNode;
}

export const BodyResponse: React.FC<BodyResponseProps> = ({ children }) => {
  return (
    <div className="w-[70%] md:w-[96%]    mx-auto my-2  ">
      <div className="  mx-auto bg-mainDarkLvl2 rounded-md flex justify-center overflow-hidden mb-4 px-10 py-4">
        <pre className=" lg:text-xs text-lg  select-text  text-mainH1 break-words py-10">
          {children}
        </pre>
      </div>
    </div>
  );
};
