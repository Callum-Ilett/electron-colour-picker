import { ReactNode } from "react";
import styled from "styled-components";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

interface TypographyProps {
  variant?: Variant;
  children: ReactNode;
}

export const GradientPreview = styled.div<{ background: string }>`
  background: ${({ background }) => background && background};
  margin-bottom: 24px;
  height: 200px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #ffffff;
  border-radius: 4px;
`;

export const Typography = ({ variant: Tag, children }: TypographyProps) =>
  Tag ? <Tag>{children}</Tag> : <p>{children}</p>;

export { default as Button } from "./button";
export { default as Sidebar } from "./sidebar";
export { default as SiteLayout } from "./layout";
export { default as PageHeading } from "./page-heading";
export { default as Grid } from "./grid";
export { default as Palette } from "./palette";
export { default as Colour } from "./new-colour";
export { default as ColourPicker } from "./colour-picker";
