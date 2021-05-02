import styled from "styled-components";
import { withProperties } from "utilities";

export const Logo = styled.img`
  margin: 0 auto;
`;

export const Aside = styled.aside`
  padding-top: ${({ theme }) => theme.titlebar.height};
  background: ${({ theme }) => theme.sidebar.background};
  width: ${({ theme }) => theme.sidebar.width};

  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing(5)};
  padding: 8px;
`;

const Item = styled.div<{ active: boolean }>`
  background: ${({ active, theme }) =>
    active
      ? theme.palette.primary.main
      : theme.hexToRGB(theme.palette.primary.main, 0.25)};

  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: ${({ theme }) => theme.spacing(1.3)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  cursor: pointer;

  min-width: 88px;
  flex: 1;
  height: 61px;

  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const Menu = withProperties(NavMenu, { Item, Label });
