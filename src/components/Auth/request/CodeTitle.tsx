import { RxDividerVertical } from "react-icons/rx";

interface ResponseTitleProps {
  onShowBodyClick: () => void;
  onShowSchemaClick: () => void;
  showCode: boolean;
}

export const CodeTitle: React.FC<ResponseTitleProps> = ({
  onShowBodyClick,
  onShowSchemaClick,
  showCode,
}) => {
  return (
    <h3 className="flex text-mainH1 cursor-pointer md:text-xs items-center font-semibold text-lg ">
      <span
        className={`${showCode ? " text-succesColor " : " text-mainH1 "}`}
        onClick={onShowBodyClick}
      >
        Sign in body
      </span>{" "}
      <RxDividerVertical size={28} />
      <span
        className={`${showCode ? " text-mainH1 " : " text-succesColor "}`}
        onClick={onShowSchemaClick}
      >
        Sign in body schema
      </span>
    </h3>
  );
};
