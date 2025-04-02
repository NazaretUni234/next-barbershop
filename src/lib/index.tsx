"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { RootStore, storeRedux } from "./store";

interface Props {
  children: React.ReactNode;
}

export default function ProviderRedux({ children }: Props) {
  const storeRef = useRef<RootStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = storeRedux();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
