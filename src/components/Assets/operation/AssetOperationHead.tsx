// import { useAppSelectors } from "hooks/appSelectors";
import { RxDividerHorizontal } from "react-icons/rx";
import { IoSend } from "react-icons/io5";
import { ApiEndpoint } from "operationsArray";

interface AssetOperationHeadProps {
  fetch: boolean;
  operation: ApiEndpoint;
  toggleFetch: () => void;
  toggleIsOperationOpen: (event: React.MouseEvent) => void;
}

export const AssetOperationHead: React.FC<AssetOperationHeadProps> = ({
  fetch,
  operation,
  toggleFetch,
  toggleIsOperationOpen,
}) => {
  // const colors = ["bg-POST", "bg-GET", "bg-DELETE", "bg-PUT", "bg-PATCH"];
  return (
    <div
      onClick={toggleIsOperationOpen}
      className="   w-full  hover:bg-cyan-950 transition-all duration-300
     bg-mainDark px-6 py-2 my-2 rounded-md cursor-pointer select-none md:px-2 "
    >
      <div className=" flex gap-4 items-center text-mainH1  ">
        <span
          className={`  py-1 min-w-[134px] md:min-w-[80px]  text-center  text-2xl font-semibold
         text-mainLight  md:text-sm   rounded-md opacity-70 w-30  bg-${operation.method}`}
        >
          {operation.method}
        </span>
        <p
          id="roat"
          className="  text-mainH1 font-bold md:w-28  select-all  break-words  text-lg md:text-xs py-1.5"
        >
          {operation.endpoint}
        </p>
        <RxDividerHorizontal className="sm:hidden" size={30} />
        <p className=" sm:hidden  text-mainH1 md:text-xs text-xl font-montserrat">
          {operation.operationGoal}
        </p>
        <p
          id="fetch"
          onClick={toggleFetch}
          className="text-mainH1 hover:bg-mainDark md:text-xs transition-all duration-300  rounded-md  bg-mainDarkLvl2 px-3 
        cursor-pointer  font-bold text-lg flex items-center justify-center gap-2 ml-auto py-2"
        >
          {fetch ? "Return" : "Fetch"}
          <IoSend className="text-GET opacity-70 pointer-events-none " size={20} />
        </p>
      </div>
    </div>
  );
};
