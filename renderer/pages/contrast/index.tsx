import { Typography, PageHeading } from "components";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { WCAG2Options, isReadable } from "tinycolor2";

const Contrast = () => {
  const [properties, setProperties] = useState({
    background: "#acc8e5",
    foreground: "#213954",
  });

  const [contrasts, setContrast] = useState<Contrast[] | null>(null);

  const checkContrast = (colour1: string, colour2: string) => {
    const normal: WCAG2Options[] = [{ level: "AA" }, { level: "AAA" }];
    const large: WCAG2Options[] = [
      { level: "AA", size: "large" },
      { level: "AAA", size: "large" },
    ];

    const options: WCAG2Options[] = [...normal, ...large];

    return options.map(({ level, size }) => ({
      status: isReadable(colour1, colour2, { level, size }),
      level,
      size: size !== undefined ? size : "normal",
    }));
  };

  useEffect(() => {
    const { foreground, background } = properties;

    setContrast(checkContrast(foreground, background));
  }, [properties]);

  return (
    <>
      <PageHeading text="Contrast" />

      <Preview {...properties}>
        <Typography variant="h2">Lorem Ipsum</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pellentesque, nisl non suscipit efficitur, nibh mi consequat eros,
          hendrerit mollis purus mi non nisl.
        </Typography>
      </Preview>

      <Results>
        {contrasts?.map(({ status, level, size }) => (
          <Result key={`${level}-${size}`}>
            <Button background={status ? "#4BB54C" : "#FF0033"}>
              {status ? "Pass" : "Fail"}
            </Button>
            <Typography>
              {level} {size}
            </Typography>
          </Result>
        ))}
      </Results>

      <Properties>
        <TextColour>
          <Typography>Text Colour</Typography>
          <input
            type="color"
            value={properties.foreground}
            style={{ width: "100%" }}
            onChange={(e) =>
              setProperties({ ...properties, foreground: e.target.value })
            }
          />
        </TextColour>

        <BackgrondColour>
          <Typography>Background Colour</Typography>
          <input
            type="color"
            value={properties.background}
            style={{ width: "100%" }}
            onChange={(e) =>
              setProperties({ ...properties, background: e.target.value })
            }
          />
        </BackgrondColour>
      </Properties>
    </>
  );
};

const Preview = styled.div<{ background: string; foreground: string }>`
  background: ${({ background }) => background};
  color: ${({ foreground }) => foreground};
  padding: 16px;
  border-radius: 4px;
  color: ;
  margin-bottom: 16px;

  h2 {
    text-align: center;
    margin-bottom: 8px;
  }
`;

const Properties = styled.div`
  display: flex;
`;
const TextColour = styled.div`
  margin-right: 16px;
  width: 50%;
`;
const BackgrondColour = styled.div`
  width: 50%;
`;
const Results = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button<{ background: string }>`
  background: ${({ background }) => background};
  color: white;
  border: none;
  border-radius: 500px;
  padding: 4px;
  margin-bottom: 4px;
`;

export default Contrast;
