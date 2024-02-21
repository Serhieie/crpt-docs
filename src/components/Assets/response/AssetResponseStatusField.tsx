import { ApiEndpoint } from "operationsArray";
import { nanoid } from "nanoid";

interface AssetsResponseStatusFieldProps {
  operation: ApiEndpoint;
}

export const AssetsResponseStatusField: React.FC<AssetsResponseStatusFieldProps> = ({
  operation,
}) => {
  return (
    <div className="w-[70%] select-none   md:w-[90%] mx-auto my-2 mb-32 md:mb-20 mt-10 md:mt-4">
      <h2 className=" text-2xl font-montserrat font-medium text-mainH1 text-center mb-6">
        Main response statuses
      </h2>
      <div>
        <ul className=" flex text-mainH1 items-center justify-between">
          {operation.mainStatuses.map((status) => (
            <li key={nanoid()}>
              <h4
                className={` 
  ${
    status.status >= 200 && status.status < 300
      ? " text-GET "
      : status.status >= 400 && status.status < 500
      ? " text-POST "
      : " text-DELETE "
  }
  font-semibold text-2xl md:text-lg mb-2 font-montserrat text-center`}
              >
                {status.status}
              </h4>
              <p className=" font-montserrat max-w-32 text-center font-semibold md:text-sm text-xl">
                {status.message}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
