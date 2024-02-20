import { AssetBodyResponse } from "./AssetBodyResponse";
import { ApiEndpoint } from "operationsArray";
import { AssetResponseSchema } from "./AssetResponseSchema";
import { AssetResponseTitle } from "./AssetResponseTitle";

import { useState } from "react";

interface AssetResponseProps {
  operation: ApiEndpoint;
}

export const AssetResponse: React.FC<AssetResponseProps> = ({ operation }) => {
  const [showCode, setShowCode] = useState<boolean>(true);
  const onShowBodyClick = () => {
    setShowCode(true);
  };
  const onShowSchemaClick = () => {
    setShowCode(false);
  };

  return (
    <div className=" select-none">
      <div className="w-[70%] md:w-[90%]  mx-auto md:mt-4  flex items-center  mt-8 mb-3 gap-4">
        <AssetResponseTitle
          onShowBodyClick={onShowBodyClick}
          onShowSchemaClick={onShowSchemaClick}
          showCode={showCode}
        />
      </div>

      {showCode ? (
        <AssetBodyResponse>
          {" "}
          <code>{operation.responseBody}</code>
        </AssetBodyResponse>
      ) : (
        <AssetResponseSchema>
          {" "}
          <code>{operation.responseBodySchema}</code>
        </AssetResponseSchema>
      )}
    </div>
  );
};
