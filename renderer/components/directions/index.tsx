import DiagonalTopRight from "../../icons/arrows/diagonal-top-right-arrow.svg";
import Right from "../../icons/arrows/right-arrow.svg";
import DiagonalBottomRight from "../../icons/arrows/diagonal-bottom-right.svg";
import Down from "../../icons/arrows/down-arrow.svg";
import DiagonalBottomLeft from "../../icons/arrows/diagonal-bottom-left-arrow.svg";
import Left from "../../icons/arrows/left-arrow.svg";
import DiagonalTopLeft from "../../icons/arrows/diagonal-top-left-arrow.svg";
import Up from "../../icons/arrows/up-arrow.svg";

import styled from "styled-components";
import { Typography } from "components";
import { Dispatch, SetStateAction } from "react";

const directions: { label: GradientDirection; Icon: any }[] = [
  {
    label: "to right",
    Icon: Right,
  },
  {
    label: "to right top",
    Icon: DiagonalTopRight,
  },
  {
    label: "to right bottom",
    Icon: DiagonalBottomRight,
  },
  {
    label: "to bottom",
    Icon: Down,
  },
  {
    label: "to left bottom",
    Icon: DiagonalBottomLeft,
  },
  {
    label: "to left",
    Icon: Left,
  },
  {
    label: "to left top",
    Icon: DiagonalTopLeft,
  },
  {
    label: "to top",
    Icon: Up,
  },
];

interface Props {
  direction: GradientDirection;
  setDirection: Dispatch<SetStateAction<GradientDirection>>;
}

const Directions = ({ direction, setDirection }: Props) => {
  return (
    <>
      <Typography>Gradient Direction: </Typography>
      <StyledDirections>
        {directions.map(({ label, Icon }) => (
          <Direction
            key={label}
            selected={label === direction}
            onClick={() => setDirection(label)}
          >
            <Icon />
          </Direction>
        ))}
      </StyledDirections>
    </>
  );
};

const StyledDirections = styled.div`
  display: flex;
  margin-top: 16px;
`;

const Direction = styled.div<{ selected: boolean }>`
  border-radius: 50%;
  border: 1px solid white;
  background: ${({ selected, theme }) =>
    selected && theme.palette.primary.main};
  width: 30px;
  height: 30px;
  margin-right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Directions;
