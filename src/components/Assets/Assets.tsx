import { nanoid } from "nanoid";
import { AssetOperation } from "./operation/AssetOperation";
import { assetsOperationArray } from "assetsOperationsArray";

export const Assets: React.FC = () => {
  return (
    <div>
      <h1 className=" text-mainH1 font-montserrat text-5xl md:text-2xl select-none  font-medium my-2">
        Assets
      </h1>
      {assetsOperationArray.map((operation) => (
        <AssetOperation key={nanoid()} operation={operation} />
      ))}
    </div>
  );
};
