import Gradient from "components/gradient";
import { PageHeading, Grid } from "components";
import { useEffect, useState } from "react";
import useElectron from "hooks/useElectron";

const Gradients = () => {
  const Electron = useElectron();

  const [gradients, setGradients] = useState<Gradients>([]);

  useEffect(() => {
    Electron.invokeEvent("getGradients").then((data) => setGradients(data));
  }, []);

  return (
    <>
      <PageHeading text="Gradients" plusIcon />

      <Grid>
        {gradients.length >= 6 && (
          <Grid.Item>
            <Gradient create />
          </Grid.Item>
        )}

        {gradients.map((gradient, i) => (
          <Grid.Item key={i}>
            <Gradient background={gradient.css} id={gradient.id} />
          </Grid.Item>
        ))}

        {gradients.length < 6 && (
          <Grid.Item>
            <Gradient create />
          </Grid.Item>
        )}
      </Grid>
    </>
  );
};

export default Gradients;
