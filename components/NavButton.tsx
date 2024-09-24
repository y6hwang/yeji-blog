import React, {ReactNode} from "react";

const NavButton = ({className, navigate, icon, value}: {
  className?: string;
  navigate: () => void;
  icon?: ReactNode | null;
  value?: string;
}) => (
  <button onClick={navigate} className={`p-2 flex flex-row items-center gap-x-4 ${className}`}>
    {icon}
    {value && <h2 className='text-lg text-teal-900 font-bold max-lg:hidden'>{value}</h2>}
  </button>
);

export default NavButton;