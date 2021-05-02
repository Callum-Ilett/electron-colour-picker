import { ReactNode } from "react";
import { withProperties } from "utilities";
import {
  StyledForm,
  StyledInput,
  StyledSelect,
  Group,
  Label,
  StyledCheckBox,
} from "./styles";

interface Props {
  as: "select" | "text";
  children: ReactNode;
}

const Control = ({ as = "text", children, ...restProps }: Props) => {
  if (as == "select") {
    return <StyledSelect {...restProps}>{children}</StyledSelect>;
  } else {
    return <StyledInput type="text" {...restProps} />;
  }
};

const Checkbox = ({ label }: { label: string }) => (
  <StyledCheckBox>
    <input id="checkbox" type="checkbox" />
    <Label htmlFor="checkbox">{label}</Label>
  </StyledCheckBox>
);

const Form = withProperties(StyledForm, {
  Group,
  Label,
  Control,
  Checkbox,
});

export default Form;
