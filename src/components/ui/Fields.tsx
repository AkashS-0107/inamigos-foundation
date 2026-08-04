import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { classNames } from "@/utils";
/** Token-styled native single-line form field. */
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input({ className, ...props }, ref) { return <input ref={ref} className={classNames("ds-input ds-focus", className)} {...props} />; });
/** Token-styled native multi-line form field. */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(function Textarea({ className, ...props }, ref) { return <textarea ref={ref} className={classNames("ds-input ds-focus", className)} {...props} />; });
