import styled from "styled-components";
import { withProperties } from "utilities";

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  margin-right: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const Grid = withProperties(StyledGrid, { Item });

export default Grid;
