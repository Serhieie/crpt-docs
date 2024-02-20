import { ReactNode } from "react";

interface AssetSchemaCodeProps {
  children: ReactNode;
}

export const AssetSchemaCode: React.FC<AssetSchemaCodeProps> = ({ children }) => {
  return (
    <div className=" w-[70%] md:w-[96%] mx-auto my-2 ">
      <div className="  mx-auto bg-mainDarkLvl2 rounded-md flex justify-center  mb-4 px-10 py-4">
        <pre className=" text-lg select-text md:text-xs text-mainH1 break-words py-10">
          {children}
        </pre>
      </div>
    </div>
  );
};
