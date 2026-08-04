import { forwardRef, type HTMLAttributes } from "react";
import { classNames } from "@/utils";
/** Semantic divider between related groups. */
export const Divider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(function Divider({ className, ...props }, ref) { return <hr ref={ref} className={classNames("ds-divider", className)} {...props} />; });
