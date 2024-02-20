import { RxDividerVertical } from "react-icons/rx";

interface AssetResponseTitleProps {
  onShowBodyClick: () => void;
  onShowSchemaClick: () => void;
  showCode: boolean;
}

export const AssetResponseTitle: React.FC<AssetResponseTitleProps> = ({
  onShowBodyClick,
  onShowSchemaClick,
  showCode,
}) => {
  return (
    <h3 className="flex text-mainH1 cursor-pointer items-center font-semibold md:text-xs  text-lg ">
      <span
        className={`${showCode ? " text-succesColor " : " text-mainH1 "}`}
        onClick={onShowBodyClick}
      >
        Response body
      </span>{" "}
      <RxDividerVertical size={28} />
      <span
        className={`${showCode ? " text-mainH1 " : " text-succesColor "}`}
        onClick={onShowSchemaClick}
      >
        Response body schema
      </span>
    </h3>
  );
};
