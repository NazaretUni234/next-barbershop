"use client";
import { setShowAlert } from "@/lib/slides/system";
import { ShowAlertType } from "@/types/system";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useTextInput<T>(initialValue: T) {
  const [data, setData] = useState<T>(initialValue);
  const handleChange = (key: string, value: any) => {
    setData((prevState) => ({ ...prevState, [key]: value }));
  };

  const clearData = () => {
    setData(initialValue);
  };

  const handleObjectPart = useCallback((newPart: Partial<T>) => {
    setData((prevState) => ({ ...prevState, ...newPart }));
  }, []);

  return {
    data,
    handleChange,
    handleObjectPart,
    clearData,
  };
}

export function useRedirection() {
  const router = useRouter();
  const handleRedirect = useCallback(
    (direction: string) => {
      router.push(direction);
    },
    [router]
  );
  return { handleRedirect };
}

export function useNotification() {
  const notificationState: ShowAlertType = useSelector(
    (state: any) => state.system.showAlert
  );
  const dispatch = useDispatch();
  const { message, show, type } = notificationState;
  const openNotification = (
    message: string,
    type: "success" | "error" | "info" | "warning"
  ) => {
    dispatch(setShowAlert({ message: message, type: type, show: true }));
  };
  const closeNotification = () => {
    dispatch(setShowAlert({ message: "", type: "success", show: false }));
  };
  return { message, show, type, closeNotification, openNotification };
}
