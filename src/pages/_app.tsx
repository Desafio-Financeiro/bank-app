import { ThemeProvider, CssBaseline, GlobalStyles, Box } from "@mui/material";
import { Card, theme } from "fiap-financeiro-ds";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "@/styles/global.css"
import { CookiesProvider } from "react-cookie";
import Header from "@/modules/home/components/header";
import { Menu } from "@/modules/home/components";
import styles from "./styles";

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
      <CssBaseline />


      <CookiesProvider>
            <RecoilRoot>
              <Header />
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                <Box component="main" sx={styles.main}>
                  <Card type="default" sx={styles.menu}>
                    <Menu />
                  </Card>
                  <Box flex={1}>
                  <Component {...pageProps} />
                  </Box>
                </Box>
              </Box>
            </RecoilRoot>
          </CookiesProvider>
    </ThemeProvider>

}
