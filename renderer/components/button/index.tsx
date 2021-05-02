import useElectron from "hooks/useElectron";
import useToast from "hooks/useToast";
import { StyledButton } from "./styles";

interface Props {
  children: string;
  variant?: "outlined";
  color?: "primary" | "danger";
  block?: boolean;
  copyToClipboard?: boolean;
  textToCopy?: string;

  onClick?: () => void;
}

const Button = ({
  children,
  copyToClipboard,
  textToCopy,
  ...restProps
}: Props) => {
  const Electron = useElectron();
  const { showNotification } = useToast();

  const handleClick = async () => {
    const text = children;

    if (text === "Copy CSS" && copyToClipboard) {
      showNotification("Copied to Clipboard");
      await Electron.invokeEvent("copyToClipboard", textToCopy);
    }
  };

  return (
    <StyledButton onClick={handleClick} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
