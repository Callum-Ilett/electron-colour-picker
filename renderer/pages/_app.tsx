import { SiteLayout } from "components";
import GlobalStyles from "global-styles";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import darkTheme from "theme/dark";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />

      {pathname === "/import/[id]" ? (
        <>
          <Component {...pageProps} />
          <ToastContainer hideProgressBar limit={1} />
        </>
      ) : (
        <SiteLayout>
          <Component {...pageProps} />
          <ToastContainer hideProgressBar limit={1} />
        </SiteLayout>
      )}
    </ThemeProvider>
  );
};

export default MyApp;
