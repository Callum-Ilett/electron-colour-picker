import { Add, Edit, FileCopyOutlined } from "@material-ui/icons";
import { Typography } from "components";
import useElectron from "hooks/useElectron";
import useToast from "hooks/useToast";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

interface Props {
  hex?: string;
  pill?: boolean;
  create?: boolean;
  setCollection?: Dispatch<SetStateAction<Collection>>;
  collection?: Collection;
}

const Colour = ({ hex = "", pill, create }: Props) => {
  const { showNotification, copyStatus } = useToast();
  const Electron = useElectron();

  const [showOverlay, setShowOverlay] = useState(false);
  const [background] = useState(hex);

  const copyHex = async () => {
    showNotification("Copied to Clipboard");
    await Electron.invokeEvent("copyToClipboard", background);
  };

  return (
    <StyledColour
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <Background background={background} pill={pill} create={create}>
        {showOverlay && background !== "" && !create && (
          <Overlay show={showOverlay} onClick={copyHex}>
            <FileCopyOutlined />
            <Typography>{copyStatus ? "Copied" : "Copy"}</Typography>
          </Overlay>
        )}

        {create && background === "" && <Add />}

        {create && showOverlay && background !== "" && (
          <Overlay show={showOverlay}>
            <Edit />
            <Typography>Edit</Typography>
          </Overlay>
        )}
      </Background>
      <Hex>{background}</Hex>
    </StyledColour>
  );
};

const StyledColour = styled.div`
  text-align: center;
  cursor: pointer;
`;

const Background = styled.div<{
  background?: string;
  pill?: boolean;
  create?: boolean;
}>`
  overflow: hidden;
  position: relative;
  border-radius: ${({ pill }) => (pill ? "500px" : "16px")};
  height: ${({ pill }) => (pill ? "50px" : "73px")};
  width: ${({ pill }) => (pill ? "150px" : "73px")};

  background: ${({ background }) => background};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
  border: ${({ create, background }) =>
    create && background === "" && "1px solid white"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div<{ show: boolean }>`
  content: "";
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ show }) => (show ? 1 : 0)};
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);

  & p {
    margin-top: ${({ theme }) => theme.spacing(0.5)};
  }
`;

const Hex = styled.p`
  text-transform: uppercase;
`;

export default Colour;
