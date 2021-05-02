import { Grid, PageHeading, Palette } from "components";
import useElectron from "hooks/useElectron";
import { useEffect, useState } from "react";

const Palettes = () => {
  const Electron = useElectron();

  const [palettes, setPalettes] = useState<Palettes>();

  useEffect(() => {
    Electron.invokeEvent("getPalettes").then((data) => setPalettes(data));
  }, []);

  console.log(palettes);
  return (
    <>
      <PageHeading text="Palettes" plusIcon />

      <Grid>
        {palettes?.map((palette) => (
          <Grid.Item key={palette.id}>
            <Palette colours={palette.colours} />
          </Grid.Item>
        ))}
      </Grid>
    </>
  );
};

export default Palettes;
