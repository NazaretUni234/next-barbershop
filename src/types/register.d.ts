export interface PropsAlert {
  type: "success" | "error" | "warning" | "info";
  message: string | null;
}
