import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";
import { MetaMaskProvider } from "metamask-react";
import Meta from "../components/Meta";
import UserContext from "../components/UserContext";
import { useRef } from "react";
import { BrainGymAuthContextProvider } from "../context/brainGymContext";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;
  const scrollRef = useRef({
    scrollPos: 0,
  });

  return (
    <>
      <Meta title="Home" />

      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <MetaMaskProvider>
            <BrainGymAuthContextProvider>
              <UserContext.Provider value={{ scrollRef: scrollRef }}>
                {pid === "/login" ? (
                  <Component {...pageProps} />
                ) : (
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                )}
              </UserContext.Provider>
            </BrainGymAuthContextProvider>
          </MetaMaskProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
