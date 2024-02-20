import { useState } from "react";
import { ApiEndpoint } from "operationsArray";
import { FaStarOfLife } from "react-icons/fa6";
import { AssetBodyCode } from "./AssetBodyCode";
import { AssetSchemaCode } from "./AssetSchemaCode";
import { AssetCodeTitle } from "./AssetCodeTitle";

interface AssetRequestProps {
  operation: ApiEndpoint;
}

export const AssetRequest: React.FC<AssetRequestProps> = ({ operation }) => {
  const [showCode, setShowCode] = useState<boolean>(true);
  const onShowBodyClick = () => {
    setShowCode(true);
  };
  const onShowSchemaClick = () => {
    setShowCode(false);
  };

  return (
    <div className=" select-none">
      <div className="w-[70%] md:w-[90%]  mx-auto  md:gap-1 md:mt-4 flex items-center justify-center mt-8 mb-3 gap-4">
        <AssetCodeTitle
          onShowBodyClick={onShowBodyClick}
          onShowSchemaClick={onShowSchemaClick}
          showCode={showCode}
        />
        <p className="ml-auto font-semibold  md:text-xs text-mainH1 flex items-center text-sm ">
          type:{" "}
          <span className="text-POST font-semibold ml-2">
            {" "}
            {operation.requestBodyType}
          </span>
        </p>
        <p className="ml-auto  text-mainH1 flex items-center text-sm md:text-xs font-semibold ">
          token :{" "}
          <span className="text-DELETE ml-2">
            {" "}
            {operation.token ? (
              <span className="text-DELETE  flex items-center gap-2 md:gap-1 font-semibold">
                <FaStarOfLife />
              </span>
            ) : (
              "Not required"
            )}
          </span>
        </p>
      </div>
      {showCode ? (
        <AssetBodyCode>
          {" "}
          <code className="a">{operation.requestBody}</code>
        </AssetBodyCode>
      ) : (
        <AssetSchemaCode>
          {" "}
          <code>{operation.requestBodySchema}</code>
        </AssetSchemaCode>
      )}
    </div>
  );
};
