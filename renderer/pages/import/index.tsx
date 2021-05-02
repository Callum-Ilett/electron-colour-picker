import { CloudUpload } from "@material-ui/icons";
import { Button, PageHeading } from "components";
import useElectron from "hooks/useElectron";
import { useEffect } from "react";
import styled from "styled-components";

const Import = () => {
  const Electron = useElectron();

  const handleUpload = async () => {
    await Electron.invokeEvent("browseFiles");
  };

  useEffect(() => {
    Electron.invokeEvent("getUploads").then((data) => console.log(data));
  }, []);

  return (
    <div>
      <PageHeading text="Import" />
      <FileUploader>
        <Instructions>
          <CloudUpload />

          <Button onClick={handleUpload} variant="outlined">
            Browse Files
          </Button>
        </Instructions>
      </FileUploader>
    </div>
  );
};

const FileUploader = styled.div`
  height: 70vh;
  border: 1px dashed rgba(255, 255, 255, 0.8);
  display: grid;
  place-items: center;

  color: rgba(255, 255, 255, 0.8);

  & svg {
    width: 100px;
    height: 100px;
  }
`;

const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

export default Import;
