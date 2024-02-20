// import { useAppSelectors } from "hooks/appSelectors";
import { RxDividerHorizontal } from "react-icons/rx";
import { IoSend } from "react-icons/io5";
import { ApiEndpoint } from "operationsArray";

interface OperationHeadProps {
  fetch: boolean;
  operation: ApiEndpoint;
  toggleFetch: () => void;
  toggleIsOperationOpen: (event: React.MouseEvent) => void;
}

export const OperationHead: React.FC<OperationHeadProps> = ({
  fetch,
  operation,
  toggleFetch,
  toggleIsOperationOpen,
}) => {
  // const colors = ["bg-POST", "bg-GET", "bg-DELETE", "bg-PUT", "bg-PATCH"];
  return (
    <div
      onClick={toggleIsOperationOpen}
      className="  w-full  hover:bg-cyan-950 transition-all duration-300
     bg-mainDark px-6 py-2 my-2 rounded-md cursor-pointer select-none md:px-2 "
    >
      <div className=" flex gap-4 items-center text-mainH1  ">
        <span
          className={`   py-1 min-w-[134px] md:min-w-[80px]  text-center  text-2xl font-semibold
         text-mainLight  md:text-sm   rounded-md opacity-70 w-30  bg-${operation.method}`}
        >
          {operation.method}
        </span>
        <p
          id="roat"
          className="  text-mainH1 font-bold md:text-xs select-all md:w-28  break-words  text-lg py-1.5 md:py-0 "
        >
          {operation.endpoint}
        </p>
        <RxDividerHorizontal className="sm:hidden" size={30} />
        <p className=" md:text-xs  sm:hidden text-mainH1 text-xl font-montserrat">
          {operation.operationGoal}
        </p>
        <p
          id="fetch"
          onClick={toggleFetch}
          className="text-mainH1 hover:bg-mainDark transition-all duration-300  rounded-md  bg-mainDarkLvl2 px-3 
        cursor-pointer  font-bold md:text-xs text-lg flex items-center justify-center gap-2 ml-auto py-2"
        >
          {fetch ? "Return" : "Fetch"}
          <IoSend className="text-GET opacity-70 pointer-events-none " size={20} />
        </p>
      </div>
    </div>
  );
};
