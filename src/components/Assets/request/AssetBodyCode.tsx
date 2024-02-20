import { ReactNode } from "react";

interface AssetBodyCodeProps {
  children: ReactNode;
}

export const AssetBodyCode: React.FC<AssetBodyCodeProps> = ({ children }) => {
  return (
    <div className="w-[70%] md:w-[96%] mx-auto my-2  ">
      <div className="  mx-auto select-text  bg-mainDarkLvl2 rounded-md flex justify-center  mb-4 px-10 py-4">
        <pre className="md:text-xs select-text text-lg text-mainH1 break-words py-10">
          {children}
        </pre>
      </div>
    </div>
  );
};
