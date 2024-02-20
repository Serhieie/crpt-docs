import { nanoid } from "nanoid";
import { Operation } from "./operation/Operation";
import { operationsArray } from "operationsArray";

export const Auth: React.FC = () => {
  return (
    <div>
      <h1 className=" text-mainH1 font-montserrat text-5xl md:text-2xl select-none  font-medium my-2">
        User
      </h1>
      {operationsArray.map((operation) => (
        <Operation key={nanoid()} operation={operation} />
      ))}
    </div>
  );
};
