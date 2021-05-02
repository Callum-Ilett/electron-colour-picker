import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
`;

export const Main = styled.main`
  flex: 1;
  min-height: 100vh;
  background: ${({ theme }) => theme.palette.background};
  padding-top: ${({ theme }) => theme.titlebar.height};
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: ${({ theme }) => theme.sidebar.width};
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
`;
