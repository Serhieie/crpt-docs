import { ReactNode } from "react";

interface AssetBodyResponseProps {
  children: ReactNode;
}

export const AssetBodyResponse: React.FC<AssetBodyResponseProps> = ({ children }) => {
  return (
    <div className="w-[70%] md:w-[96%]   mx-auto my-2  ">
      <div
        className="  mx-auto bg-mainDarkLvl2 rounded-md flex 
      justify-center overflow-hidden mb-4 px-10 py-4 select-text "
      >
        <pre className=" md:text-xs select-text text-lg text-mainH1 break-words py-10">
          {children}
        </pre>
      </div>
    </div>
  );
};
