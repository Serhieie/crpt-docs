import { useState } from "react";
import { ApiEndpoint } from "operationsArray";
import { FaStarOfLife } from "react-icons/fa6";
import { BodyCode } from "./BodyCode";
import { SchemaCode } from "./SchemaCode";
import { CodeTitle } from "./CodeTitle";

interface RequestProps {
  operation: ApiEndpoint;
}

export const Request: React.FC<RequestProps> = ({ operation }) => {
  const [showCode, setShowCode] = useState<boolean>(true);
  const onShowBodyClick = () => {
    setShowCode(true);
  };
  const onShowSchemaClick = () => {
    setShowCode(false);
  };

  return (
    <div className=" select-none">
      <div className="w-[70%] md:w-[90%]  md:mt-4   mx-auto   flex items-center justify-center mt-8 mb-3 gap-4 md:gap-1 ">
        <CodeTitle
          onShowBodyClick={onShowBodyClick}
          onShowSchemaClick={onShowSchemaClick}
          showCode={showCode}
        />
        <p className="ml-auto md:text-xs text-mainH1 font-semibold flex items-center text-sm ">
          type:{" "}
          <span className="text-POST md:text-xs font-semibold ml-2">
            {" "}
            {operation.requestBodyType}
          </span>
        </p>
        <p className="ml-auto  text-mainH1 flex font-semibold items-center md:text-xs text-sm ">
          token :{" "}
          <span className="text-DELETE md:text-xs ml-2">
            {" "}
            {operation.token ? (
              <p className="text-DELETE  font-semibold flex items-center gap-2 md:gap-1">
                <FaStarOfLife />
              </p>
            ) : (
              "NOT required"
            )}
          </span>
        </p>
      </div>
      {showCode ? (
        <BodyCode>
          {" "}
          <code className="a">{operation.requestBody}</code>
        </BodyCode>
      ) : (
        <SchemaCode>
          {" "}
          <code>{operation.requestBodySchema}</code>
        </SchemaCode>
      )}
    </div>
  );
};
