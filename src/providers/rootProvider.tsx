/* eslint-disable @typescript-eslint/no-explicit-any */
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
const RootProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RootProvider;
