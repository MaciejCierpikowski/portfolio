import { ReactNode } from "react";
import { CellItem } from "../style";

interface ICell {
  children?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}
const Cell = ({ onClick, children, isActive = false }: ICell) => {
  return (
    <CellItem
      onClick={!isActive ? onClick : undefined}
      //   className={clsx(
      //     "h-10 border-b border-r flex items-center justify-center select-none transition-colors",
      //     {
      //       "cursor-pointer hover:bg-gray-100 active:bg-gray-200":
      //         !isActive && onClick,
      //       "font-bold text-white bg-blue-600": isActive,
      //     },
      //     className
      //   )}
    >
      {children}
    </CellItem>
  );
};

export default Cell;
