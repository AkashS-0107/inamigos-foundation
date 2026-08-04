import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { classNames } from "@/utils";

export type ContainerWidth = "content" | "full" | CSSProperties["maxWidth"];

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Horizontal padding token applied at every viewport size. */
  gutter?: "none" | "1" | "2" | "3" | "4" | "6" | "8" | "12";
  /** Constrains content to the system width token, the full viewport, or a custom max width. */
  maxWidth?: ContainerWidth;
}

/** Centers content within the configured global maximum width. */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { className, gutter, maxWidth = "content", style, ...props },
  ref,
) {
  const resolvedMaxWidth = maxWidth === "content" ? "var(--container-max-width)" : maxWidth === "full" ? "none" : maxWidth;

  return (
    <div
      ref={ref}
      className={classNames("ds-container", className)}
      style={{
        width: "100%",
        maxWidth: resolvedMaxWidth,
        paddingInline: gutter ? (gutter === "none" ? 0 : `var(--space-${gutter})`) : undefined,
        ...style,
      }}
      {...props}
    />
  );
});
