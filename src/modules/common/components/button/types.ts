export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "success";
  frontIcon?: React.ReactNode;
  backIcon?: React.ReactNode;
}
