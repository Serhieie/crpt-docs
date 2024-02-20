import { AssetOperationHead } from "./AssetOperationHead";
import { useState } from "react";
import { AssetRequest } from "../request/AssetRequest";
import { AssetResponse } from "../response/AssetResponse";
import { AssetsResponseStatusField } from "../response/AssetResponseStatusField";
import { ApiEndpoint } from "operationsArray";
import { nanoid } from "nanoid";

interface AssetOperationProps {
  operation: ApiEndpoint;
}

export const AssetOperation: React.FC<AssetOperationProps> = ({ operation }) => {
  const [fetch, setFetch] = useState<boolean>(false);
  const [isOperationOpen, setIsOperationOpen] = useState<boolean>(false);

  const toggleFetch = () => {
    if (isOperationOpen) setFetch((state) => !state);
  };

  const toggleIsOperationOpen = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const check = target.id === "fetch" || target.id === "roat";
    if (!check) setIsOperationOpen((state) => !state);
  };
  const key = nanoid();
  return (
    <div
      key={key}
      className={`
    ${isOperationOpen ? " pb-0.5 " : " pb-0 "}
    transition-all duration-300 bg-mainDark rounded-md`}
    >
      <AssetOperationHead
        fetch={fetch}
        operation={operation}
        toggleFetch={toggleFetch}
        toggleIsOperationOpen={toggleIsOperationOpen}
      />

      {isOperationOpen && (
        <>
          {!fetch ? (
            <h2 className="ml-12 text-2xl font-montserrat font-medium text-mainH1 mt-10 md:mt-4">
              Request information :
            </h2>
          ) : (
            <h2 className="ml-12 text-2xl font-montserrat font-medium text-mainH1 mt-10 md:mt-4">
              Success response :
            </h2>
          )}
          {fetch ? (
            <AssetResponse operation={operation} />
          ) : (
            <AssetRequest operation={operation} />
          )}
          <AssetsResponseStatusField operation={operation} />
        </>
      )}
    </div>
  );
};
