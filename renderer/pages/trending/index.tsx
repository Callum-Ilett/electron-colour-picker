import { Grid, PageHeading, Palette } from "components";
import { useEffect, useState } from "react";
import { group } from "utilities";
import randomColour from "randomcolor";

const Trending = () => {
  const [trending, setTrending] = useState<string[][]>();

  useEffect(() => {
    const trendingPalettes = group(randomColour({ count: 100 }), 5);
    setTrending(trendingPalettes);
  }, []);

  return (
    <>
      <PageHeading text="Trending Palettes" />

      <Grid>
        {trending?.map((colours, i) => (
          <Grid.Item key={i}>
            <Palette colours={colours} />
          </Grid.Item>
        ))}
      </Grid>
    </>
  );
};

export default Trending;
