import { forwardRef, type ImgHTMLAttributes } from "react";
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> { /** Alternative text is required unless image is decorative. */ alt: string; }
/** Responsive image primitive; consumers control presentation through className. */
export const Image = forwardRef<HTMLImageElement, ImageProps>(function Image({ loading = "lazy", decoding = "async", ...props }, ref) { return <img ref={ref} loading={loading} decoding={decoding} {...props} />; });
