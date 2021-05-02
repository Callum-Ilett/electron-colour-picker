import useElectron from "hooks/useElectron";
import useImageColour from "use-image-color";
import styled from "styled-components";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ImageDetail = () => {
  const Electron = useElectron();
  const router = useRouter();

  const [upload, setUpload] = useState<Upload>();

  const id = router.query.id as string;

  const { colors: colours } = useImageColour(upload?.src, {
    cors: true,
    colors: 5,
  });

  useEffect(() => {
    if (id) {
      Electron.invokeEvent("getUploads").then((uploads: Uploads) => {
        const filteredUpload = uploads.filter((upload) => upload.id === id)[0];
        setUpload(filteredUpload);
      });
    }
  }, [id]);

  const handleAddToCollection = async () => {
    const newCollection: Collection = {
      type: "File Upload",
      data: { ...upload, colours },
    };
    await Electron.invokeEvent("addToCollections", newCollection);
    await Electron.invokeEvent("closeImageWindow");
  };

  return (
    <>
      <TitleBar>
        <Button onClick={handleAddToCollection}>Add to collection</Button>
      </TitleBar>

      <Main>
        <img src={upload?.src} width={250} />

        <Colours>
          {colours?.map((colour: string, i: number) => (
            <Colour key={i} background={colour} />
          ))}
        </Colours>
      </Main>
    </>
  );
};

const TitleBar = styled.header`
  background: linear-gradient(180deg, #4b4b4b 1.45%, #3d3d3d 97.1%);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 30px;
  padding: 16px;

  & p {
    cursor: pointer;
  }
`;

const Main = styled.main`
  text-align: center;
`;

const Colours = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const Colour = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  width: 50px;
  height: 29px;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: white;
`;

export default ImageDetail;
