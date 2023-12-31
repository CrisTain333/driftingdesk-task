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
