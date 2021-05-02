import styled from "styled-components";

export const StyledPageHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  h3 {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div``;
