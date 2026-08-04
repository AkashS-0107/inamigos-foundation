import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { classNames } from "@/utils";
import { Card, Container, Heading, Paragraph, Section } from "@/components/ui";

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> { level?: 1 | 2 | 3 | 4 | 5 | 6; }
/** Conventional section heading wrapper for consistent semantics. */
export const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(function SectionTitle({ level = 2, ...props }, ref) { return <Heading ref={ref} level={level} {...props} />; });
export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> { contained?: boolean; }
/** Section with optional shared content-width constraint. */
export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(function SectionWrapper({ contained = true, children, ...props }, ref) { return <Section ref={ref} {...props}>{contained ? <Container>{children}</Container> : children}</Section>; });
export interface SectionHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> { eyebrow?: ReactNode; title: ReactNode; description?: ReactNode; titleLevel?: 1 | 2 | 3 | 4 | 5 | 6; }
/** Reusable label, title, and supporting-copy arrangement. */
export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(function SectionHeader({ eyebrow, title, description, titleLevel = 2, className, ...props }, ref) { return <div ref={ref} className={classNames("ds-section-header", className)} {...props}>{eyebrow}{<SectionTitle level={titleLevel}>{title}</SectionTitle>}{description ? <Paragraph>{description}</Paragraph> : null}</div>; });
export interface StatCardProps extends HTMLAttributes<HTMLDivElement> { label: ReactNode; value: ReactNode; description?: ReactNode; icon?: LucideIcon; }
/** Compact presentational card for a labeled value. */
export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(function StatCard({ label, value, description, icon: Icon, className, ...props }, ref) { return <Card ref={ref} className={classNames("ds-stat-card", className)} {...props}>{Icon ? <Icon aria-hidden="true" /> : null}<Paragraph>{label}</Paragraph><strong>{value}</strong>{description ? <Paragraph>{description}</Paragraph> : null}</Card>; });
export interface SocialIconProps extends Omit<HTMLAttributes<HTMLAnchorElement>, "children"> { href: string; label: string; icon: LucideIcon; }
/** Labeled external social link with an icon-only visual treatment. */
export const SocialIcon = forwardRef<HTMLAnchorElement, SocialIconProps>(function SocialIcon({ href, label, icon: Icon, className, ...props }, ref) { return <a ref={ref} href={href} aria-label={label} className={classNames("ds-social-icon ds-focus", className)} target="_blank" rel="noopener noreferrer" {...props}><Icon aria-hidden="true" /></a>; });
