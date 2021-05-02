import { Add } from "@material-ui/icons";
import { Typography } from "components";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  id?: string;
  background?: string;
  create?: boolean;
  fullWidth?: boolean;
}

const Gradient = ({ background, fullWidth, create, id }: Props) => {
  return (
    <Link href={`/gradients/${create ? "create" : id}`}>
      <StyledGradient background={background} fullWidth={fullWidth}>
        {create && (
          <>
            <Add />
            <Typography>Create a gradient</Typography>
          </>
        )}
      </StyledGradient>
    </Link>
  );
};

const StyledGradient = styled.div<{ background?: string; fullWidth?: boolean }>`
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: ${({ background }) => background};

  border-radius: 16px;
  height: ${({ fullWidth }) => (!fullWidth ? "120px" : "200px")};
  min-width: ${({ fullWidth }) => (!fullWidth ? "160px" : "100%")};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 8px;
  }
`;

export default Gradient;
