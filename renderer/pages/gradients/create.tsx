import { Button, GradientPreview, ColourPicker, PageHeading } from "components";

import Directions from "components/directions";
import useElectron from "hooks/useElectron";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import tinygradient from "tinygradient";

const CreateGradient = () => {
  const router = useRouter();
  const Electron = useElectron();
  const [direction, setDirection] = useState<GradientDirection>("to right");

  const [gradient, setGradient] = useState<Gradient>({
    colours: ["#1B1D1D", "#F64F59"],
    css: tinygradient(["#1B1D1D", "#F64F59"]).css("linear", direction),
    direction,
  });

  useEffect(() => {
    const css = tinygradient(gradient.colours).css("linear", direction);

    setGradient({ ...gradient, css, direction });
  }, [direction]);

  const saveGradient = async () => {
    await Electron.invokeEvent("saveGradient", gradient);
    router.push("/gradients");
  };

  return (
    <>
      <PageHeading text="Create a Gradient" backIcon />

      <GradientPreview background={gradient.css} />

      <Colours>
        {gradient.colours.map((hex) => (
          <ColourPicker
            key={hex}
            hex={hex}
            gradient={gradient}
            setGradient={setGradient}
          />
        ))}
      </Colours>

      <Directions direction={direction} setDirection={setDirection} />

      <Buttons>
        <Button
          variant="outlined"
          copyToClipboard={true}
          textToCopy={gradient.css}
          block
        >
          Copy CSS
        </Button>
        <Button block onClick={saveGradient}>
          Save
        </Button>
      </Buttons>
    </>
  );
};

const Colours = styled.div`
  display: flex;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export default CreateGradient;
