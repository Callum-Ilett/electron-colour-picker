import { ReactNode } from "react";
import { Sidebar } from "components";
import { Layout, Main, Container } from "./styles";

interface Props {
  children: ReactNode;
}

const SiteLayout = ({ children }: Props) => (
  <Layout>
    <Sidebar />
    <Main>
      <Container>{children}</Container>
    </Main>
  </Layout>
);

export default SiteLayout;
