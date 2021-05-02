import { Add, Edit, FileCopyOutlined } from "@material-ui/icons";
import { Typography } from "components";
import { useState } from "react";
import styled from "styled-components";
import { darken } from "@material-ui/core/styles";
import useToast from "hooks/useToast";
import useElectron from "hooks/useElectron";

interface Props {
  value?: string;
  create?: boolean;

  setValue?: any;
}

const Colour = ({ value = "", create = false, setValue }: Props) => {
  const { showNotification, copyStatus } = useToast();
  const Electron = useElectron();

  const [background, setBackground] = useState(value);
  const [hover, setHover] = useState(false);

  const copyHex = async () => {
    showNotification("Copied to Clipboard");
    await Electron.invokeEvent("copyToClipboard", background);
  };

  return (
    <label>
      <StyledColour
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={copyHex}
      >
        <Background background={background}>
          {background === "" && create && <Add />}

          {background !== "" && create && hover && (
            <>
              <Edit />
              <Typography>Edit</Typography>
            </>
          )}

          {background !== "" && !create && hover && (
            <>
              <FileCopyOutlined />
              <Typography>{copyStatus ? "Copied" : "Copy"}</Typography>
            </>
          )}
        </Background>
        <Hex>{background}</Hex>
      </StyledColour>

      {background !== "" && create && (
        <InputColour
          type="color"
          value={background}
          onChange={(e) => {
            setValue((prevState: any) => [...prevState, e.target.value]);
            setBackground(e.target.value);
          }}
        />
      )}
    </label>
  );
};

const StyledColour = styled.div`
  text-align: center;
  cursor: pointer;
`;

const Background = styled.div<{ background?: string }>`
  // Square
  height: 73px;
  width: 73px;
  border-radius: 16px;

  background: ${({ background }) => background};
  border: ${({ background }) => !background && "1px solid white"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &: hover {
    background: ${({ background }) => background && darken(background, 0.2)};
  }
`;

const InputColour = styled.input.attrs(({ value }) => ({
  type: "color",
  value: value,
}))`
  height: 0;
  visibility: hidden;
`;

const Hex = styled.p`
  text-transform: uppercase;
`;

export default Colour;
