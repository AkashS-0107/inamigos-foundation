import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { classNames } from "@/utils";

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Accessible name; icon-only controls always require one. */ "aria-label": string;
  icon: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

/** Compact, icon-only button. */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton({ className, icon, variant = "ghost", size = "md", type = "button", ...props }, ref) {
  return <button ref={ref} type={type} className={classNames("ds-button ds-icon-button ds-focus", `ds-button--${variant}`, `ds-button--${size}`, className)} {...props}>{icon}</button>;
});
