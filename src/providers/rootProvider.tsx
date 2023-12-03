/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
const RootProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const URL = process.env.BASE_URL;
  const API_KEY = process.env.API_KEY;

  console.log("URL :" + URL);
  console.log("KEY :" + API_KEY);

  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <Provider store={store}>
        <Toaster />
        {children}
      </Provider>
    </ThemeProvider>
  );
};

export default RootProvider;
