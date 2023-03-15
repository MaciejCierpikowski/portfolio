import { ReactNode } from "react";
import { CellItem } from "../style";

interface ICell {
  children?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  inLegend?: boolean;
  fill?: boolean;
  border?: boolean;
}
const Cell = ({
  onClick,
  children,
  isActive = false,
  inLegend,
  fill,
  border,
}: ICell) => {
  return (
    <CellItem
      onClick={!isActive ? onClick : undefined}
      inLegend={inLegend}
      fill={fill}
      border={border}
    >
      {children}
    </CellItem>
  );
};

export default Cell;
