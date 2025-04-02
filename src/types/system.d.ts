export interface ShowAlertType {
  show: boolean;
  message: string;
  type: "success" | "error" | "warning" | "info";
}

export type TypeManagement = "services" | "barbers";
