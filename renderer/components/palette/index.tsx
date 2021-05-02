import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  colours?: string[];
}

const Palette = ({ colours }: Props) => {
  const id = colours?.map((colour) => colour.replace("#", "")).join("-");

  return (
    <Link href={`/trending/${id}`}>
      <StyledPalette>
        {colours?.map((colour, i) => (
          <Colour key={i} background={colour} />
        ))}
      </StyledPalette>
    </Link>
  );
};

const StyledPalette = styled.div`
  height: 96px;
  width: 160px;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  cursor: pointer;
`;

const Colour = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  width: 46px;
  height: 100%;
`;

export default Palette;
