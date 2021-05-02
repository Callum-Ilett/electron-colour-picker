// import { Add, Edit, FileCopyOutlined } from "@material-ui/icons";
import { Add, Edit, FileCopyOutlined } from "@material-ui/icons";
import { PageHeading, Grid, Typography, Button, Palette } from "components";
import { useState } from "react";
import styled from "styled-components";
import { darken } from "@material-ui/core/styles";
import useElectron from "hooks/useElectron";
import { useRouter } from "next/router";

const CreatePalette = () => {
  const Electron = useElectron();
  const router = useRouter();

  const paletteAmount = 5;

  const [chosenColours, setChosenColours] = useState<string[]>([]);

  const handleSavePalette = async () => {
    const palette = chosenColours;
    await Electron.invokeEvent("savePalette", palette);
    router.push("/palettes");
  };

  return (
    <>
      <PageHeading text="Create a Palette" backIcon />

      {chosenColours.length > 0 && (
        <Palettes>
          <Palette colours={chosenColours} />
        </Palettes>
      )}

      <Grid>
        {[...Array(paletteAmount)].map((hex, i) => (
          <Grid.Item key={i}>
            <Colour value={hex} setValue={setChosenColours} create />
          </Grid.Item>
        ))}
      </Grid>

      <Buttons>
        <Button
          onClick={() => router.reload()}
          variant="outlined"
          color="danger"
          block
        >
          Delete Palette
        </Button>

        <Button onClick={handleSavePalette} block>
          Save Palette
        </Button>
      </Buttons>
    </>
  );
};

interface Props {
  value?: string;
  create?: boolean;

  setValue?: any;
}

const Colour = ({ value = "", create, setValue }: Props) => {
  const [background, setBackground] = useState(value);
  const [hover, setHover] = useState(false);

  return (
    <label>
      <StyledColour
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
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
              <Typography>Copy</Typography>
            </>
          )}
        </Background>
        <Hex>{background}</Hex>
      </StyledColour>

      <InputColour
        type="color"
        value={background}
        onChange={(e) => {
          setValue((prevState: any) => [...prevState, e.target.value]);
          setBackground(e.target.value);
        }}
      />
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

const Palettes = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export default CreatePalette;
