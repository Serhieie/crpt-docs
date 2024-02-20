import { ReactNode } from "react";

interface SchemaCodeProps {
  children: ReactNode;
}

export const ResponseSchema: React.FC<SchemaCodeProps> = ({ children }) => {
  return (
    <div className="w-[70%] md:w-[96%]   mx-auto my-2 ">
      <div className="   mx-auto bg-mainDarkLvl2 rounded-md  mb-4 px-10 py-4 flex justify-center">
        <pre className=" text-lg lg:text-xs  select-text  text-mainH1 break-words py-10">
          {children}
        </pre>
      </div>
    </div>
  );
};
