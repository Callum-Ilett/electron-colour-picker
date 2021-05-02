import {} from "styled-components";
import theme from "theme/dark";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
