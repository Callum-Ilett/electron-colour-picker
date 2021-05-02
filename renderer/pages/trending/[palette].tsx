import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PageHeading, Grid } from "components";
import { Colour } from "components";

const TrendingDetail = () => {
  const [colours, setColours] = useState<string[]>([]);

  const router = useRouter();

  const palette = router.query.palette as string;

  useEffect(() => {
    palette && setColours(palette.split("-").map((hex) => `#${hex}`));
  }, [palette]);

  return (
    <div>
      <PageHeading text="Trending" backIcon />

      <Grid>
        {colours.map((hex, i) => (
          <Grid.Item key={i}>
            <Colour value={hex} />
          </Grid.Item>
        ))}
      </Grid>
    </div>
  );
};

export default TrendingDetail;
