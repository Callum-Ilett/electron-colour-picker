import { Button, Colour, GradientPreview, Grid, PageHeading } from "components";
import useElectron from "hooks/useElectron";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CollectionDetail = () => {
  const router = useRouter();
  const Electron = useElectron();

  const [collection, setCollection] = useState<Collection>();

  const id = router.query.id as string;

  useEffect(() => {
    if (id) {
      Electron.invokeEvent("getCollections").then(
        (collections: Collections) => {
          const filteredCollections = collections.filter(
            (collection) => collection.id === id
          )[0];
          setCollection(filteredCollections);
        }
      );
    }
  }, [id]);

  return (
    <>
      <PageHeading text={collection?.name} backIcon />

      {collection?.type === "File Upload" && (
        <div>
          <img src={collection.data.src} width={100} />

          <Grid style={{ display: "flex" }}>
            {collection?.data.colours.map((hex: string) => (
              <Grid.Item key={hex}>
                <Colour value={hex} />
              </Grid.Item>
            ))}
          </Grid>

          <Button variant="outlined" color="danger" block>
            Delete Collection
          </Button>
        </div>
      )}

      {collection?.type === "Gradient" && (
        <>
          <GradientPreview background={collection?.data.css} />

          <Colours>
            {collection?.data.colours.map((hex: string) => (
              <Grid.Item key={hex}>
                <Colour value={hex} />
              </Grid.Item>
            ))}
          </Colours>

          <Buttons>
            <Button variant="outlined" color="danger" block>
              Delete Collection
            </Button>

            <Button
              copyToClipboard={true}
              textToCopy={collection?.data.css}
              block
            >
              Copy CSS
            </Button>
          </Buttons>
        </>
      )}
    </>
  );
};

const Colours = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export default CollectionDetail;
