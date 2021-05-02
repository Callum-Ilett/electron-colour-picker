import tinycolor from "tinycolor2";
import styled from "styled-components";
import { Typography } from "components";
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import tinygradient from "tinygradient";

interface Props {
  hex: string;
  gradient: Gradient;
  setGradient: Dispatch<SetStateAction<Gradient>>;
}

const ColourPicker = ({ hex, gradient, setGradient }: Props) => {
  const [chosenHex, setChosenHex] = useState(hex);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const newHex = value.toUpperCase();

    setChosenHex(newHex);

    const colours = gradient.colours.map((colour) =>
      colour === chosenHex ? colour.replace(colour, newHex) : colour
    );

    const css = tinygradient(colours).css("linear", "to right");

    const newGradient: Gradient = {
      colours,
      css,
      direction: gradient.direction,
    };

    setGradient(newGradient);
  };

  return (
    <StyledColourPicker hex={hex}>
      <ColourInput value={chosenHex} onChange={handleChange} />
      <Typography>{hex}</Typography>
    </StyledColourPicker>
  );
};

const StyledColourPicker = styled.span<{ hex: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  position: relative;

  & > p {
    position: absolute;
    pointer-events: none;
    color: ${({ hex }) => getContrastYIQ(hex)};
  }
`;

const getContrastYIQ = (hexcolor: string) => {
  const { r, g, b } = tinycolor(hexcolor).toRgb();
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};

const ColourInput = styled.input.attrs(({ value }) => ({
  type: "color",
  value: value,
}))`
  width: 150px;
  height: 50px;

  cursor: pointer;
  border-radius: 500px;
  overflow: hidden;
  padding: 0;

  & ::-webkit-color-swatch,
  & ::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 500px;
    padding: 0;
  }

  & :focus {
    outline: none;
  }
`;

export default ColourPicker;
