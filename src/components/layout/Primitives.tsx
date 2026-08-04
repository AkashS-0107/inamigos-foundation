import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { classNames } from "@/utils";
import { Container, type ContainerProps, type SectionProps } from "@/components/ui";

export type LayoutSpacing = "none" | "1" | "2" | "3" | "4" | "6" | "8" | "12" | "16" | "24";

const tokenSpace = (space: LayoutSpacing): CSSProperties["gap"] =>
  space === "none" ? 0 : `var(--space-${space})`;

const gapStyle = (gap: LayoutSpacing): CSSProperties => ({ gap: tokenSpace(gap) });

/** Alias for the system-wide constrained content container. */
export const MaxWidthContainer = Container;
export type MaxWidthContainerProps = ContainerProps;

export interface SectionContentProps extends ContainerProps {
  /** Vertical rhythm between direct children. */
  gap?: LayoutSpacing;
}

/** Constrained section body with optional token-based vertical rhythm. */
export const SectionContent = forwardRef<HTMLDivElement, SectionContentProps>(function SectionContent(
  { gap, className, style, ...props },
  ref,
) {
  return (
    <Container
      ref={ref}
      className={classNames(gap !== undefined && "flex flex-col", className)}
      style={{ gap: gap === undefined ? undefined : tokenSpace(gap), ...style }}
      {...props}
    />
  );
});

export type LayoutSectionProps = SectionProps;

/** Page-level semantic surface that establishes the current theme background. */
export const PageContainer = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(function PageContainer(
  { className, style, ...props },
  ref,
) {
  return (
    <main
      ref={ref}
      className={className}
      style={{ minHeight: "100dvh", background: "var(--color-background)", ...style }}
      {...props}
    />
  );
});

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: LayoutSpacing;
  align?: CSSProperties["alignItems"];
}
/** Vertical flex layout primitive. */
export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { gap = "4", align, className, style, ...props },
  ref,
) {
  return <div ref={ref} className={classNames("flex flex-col", className)} style={{ ...gapStyle(gap), alignItems: align, ...style }} {...props} />;
});

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  gap?: LayoutSpacing;
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
}
/** General purpose flex layout primitive. */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(
  { gap = "4", direction = "row", align, justify, wrap = false, className, style, ...props },
  ref,
) {
  return <div ref={ref} className={classNames("flex", className)} style={{ ...gapStyle(gap), flexDirection: direction, alignItems: align, justifyContent: justify, flexWrap: wrap ? "wrap" : undefined, ...style }} {...props} />;
});

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: LayoutSpacing;
  minColumnWidth?: CSSProperties["minWidth"];
}
/** Responsive CSS grid layout. Set minColumnWidth for fluid columns. */
export const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  { columns = 1, gap = "4", minColumnWidth, className, style, ...props },
  ref,
) {
  return <div ref={ref} className={classNames("grid", className)} style={{ ...gapStyle(gap), gridTemplateColumns: minColumnWidth ? `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))` : `repeat(${columns}, minmax(0, 1fr))`, ...style }} {...props} />;
});

export interface SpacerProps {
  size?: LayoutSpacing;
  axis?: "vertical" | "horizontal";
  className?: string;
}
/** Explicit token-sized empty space for layout composition. */
export function Spacer({ size = "4", axis = "vertical", className }: SpacerProps) {
  const dimension = tokenSpace(size);
  return <div aria-hidden="true" className={className} style={axis === "horizontal" ? { width: dimension, flexShrink: 0 } : { height: dimension, flexShrink: 0 }} />;
}
