import { BodyResponse } from "./BodyResponse";
import { ApiEndpoint } from "operationsArray";
import { ResponseSchema } from "./ResponseSchema";
import { ResponseTitle } from "./ResponseTitle";

import { useState } from "react";

interface ResponseProps {
  operation: ApiEndpoint;
}

export const Response: React.FC<ResponseProps> = ({ operation }) => {
  const [showCode, setShowCode] = useState<boolean>(true);
  const onShowBodyClick = () => {
    setShowCode(true);
  };
  const onShowSchemaClick = () => {
    setShowCode(false);
  };

  return (
    <div className=" select-none">
      <div className="w-[70%]  md:w-[90%]  mx-auto   flex items-center  mt-8 md:mt-4 mb-3 gap-4 md:gap-1">
        <ResponseTitle
          onShowBodyClick={onShowBodyClick}
          onShowSchemaClick={onShowSchemaClick}
          showCode={showCode}
        />
      </div>

      {showCode ? (
        <BodyResponse>
          {" "}
          <code>{operation.responseBody}</code>
        </BodyResponse>
      ) : (
        <ResponseSchema>
          {" "}
          <code>{operation.responseBodySchema}</code>
        </ResponseSchema>
      )}
    </div>
  );
};
