import { Auth } from "components/Auth/Auth";
import { Assets } from "./Assets/Assets";

export const Main: React.FC = () => {
  return (
    <div className=" px-4">
      <Auth />
      <Assets />
    </div>
  );
};
