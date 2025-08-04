import React from "react";

interface ButtonProps {
  text: string;
}

const index = ({ text }: ButtonProps): React.ReactElement => {
  return (
    <div>
      <button className="text-nowrap border-2 border-[#212121] bg-[#E1D6EA] shadow-[8px_8px_0px_#000000] capitalize py-2 px-4 h-[60px] min-w-[200px] font-bowlby font-[400] text-xl text-[#2C1D39] text-center cursor-pointer hover:shadow-[9px_9px_0px_#000000] hover:opacity-90  transition-all duration-200">
        {text}
      </button>
    </div>
  );
};

export default index;
