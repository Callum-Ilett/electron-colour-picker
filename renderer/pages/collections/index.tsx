import { CreateNewFolderOutlined, Folder } from "@material-ui/icons";
import { Typography, Grid, PageHeading } from "components";
import useElectron from "hooks/useElectron";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Collections = () => {
  const Electron = useElectron();

  const [collections, setCollections] = useState<Collections>([]);

  useEffect(() => {
    Electron.invokeEvent("getCollections").then((data) => setCollections(data));
  }, []);

  return (
    <>
      <PageHeading text="Collections" />
      <Grid>
        {/* {collections.length >= 6 && (
          <Grid.Item>
            <Collection create />
          </Grid.Item>
        )} */}

        {collections?.map((collection) => (
          <Grid.Item>
            <Collection name={collection.name} id={collection.id} />
          </Grid.Item>
        ))}

        {/* {collections.length < 6 && (
          <Grid.Item>
            <Collection create />
          </Grid.Item>
        )} */}
      </Grid>
    </>
  );
};

interface Props {
  name?: string;
  id?: string;
  create?: boolean;
}

const Collection = ({ create, name, id }: Props) => (
  <Link href={`/collections/${create ? "create" : id}`}>
    <StyledCollection>
      {create && <CreateNewFolderOutlined />}
      {!create && <Folder />}

      <Typography>{create ? "Create New" : name}</Typography>
    </StyledCollection>
  </Link>
);

const StyledCollection = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .MuiSvgIcon-root {
    color: #5ecffd;
    font-size: 4rem;
  }
`;

export default Collections;
