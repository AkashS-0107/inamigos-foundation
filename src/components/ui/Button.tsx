import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { classNames } from "@/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis of the control. */ variant?: "primary" | "secondary" | "outline" | "ghost";
  /** Control density. */ size?: "sm" | "md" | "lg";
  /** Optional content shown before the label. */ startIcon?: ReactNode;
  /** Optional content shown after the label. */ endIcon?: ReactNode;
  /** Communicates an in-progress action to assistive technology. */ loading?: boolean;
}

/** Accessible action control with token-based variants. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", startIcon, endIcon, loading = false, disabled, children, type = "button", ...props }, ref,
) {
  return <button ref={ref} type={type} className={classNames("ds-button ds-focus", `ds-button--${variant}`, `ds-button--${size}`, className)} disabled={disabled || loading} aria-busy={loading || undefined} {...props}>
    {startIcon}{children}{endIcon}
  </button>;
});
