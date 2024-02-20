import { SiBitcoincash } from "react-icons/si";
import { useState } from "react";
import {
  copyText,
  handleMouseMove,
  handleMouseEnter,
  handleMouseLeave,
} from "helpers/copyText";

export const Header: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("Click to Copy");

  return (
    <div className=" relative flex gap-8 md:gap-8 w-full font-montserrat bg-mainDark justify-between  md:px-3 h-20 px-16 items-center ">
      <p
        className="flex items-center gap-2 md:text-xs  
       text-mainH1 select-none"
      >
        <SiBitcoincash size={30} />{" "}
        <span className="text-2xl md:text-sm font-montserrat font-medium">CryptoApp</span>
      </p>
      <p
        onMouseEnter={() => handleMouseEnter(setShowTooltip)}
        onMouseLeave={() => handleMouseLeave(setShowTooltip)}
        onMouseMove={handleMouseMove}
        onClick={() =>
          copyText(setTooltipText, "https://crypto-helper.onrender.com/api/")
        }
        className="text-3xl md:text-sm font-montserra select-none text-mainH1 font-semibold cursor-pointer py-5"
      >
        https://crypto-helper.onrender.com/api/
      </p>
      {showTooltip && (
        <div
          id="tooltip"
          className={`
                  ${tooltipText === "Copied" ? " bg-succesColor " : " bg-mainH1 "}

          absolute text-mainLight bg-mainH1 rounded-md 
          px-4 py-1 left-1/4 opacity-0 transition-opacity duration-800 select-none `}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};
