export interface ScrollToSectionOptions extends ScrollIntoViewOptions {
  offset?: number;
}

/** Smoothly scrolls to a section without coupling callers to DOM lookup details. */
export function scrollToSection(
  sectionId: string,
  { offset = 0, behavior = "smooth", block = "start", inline = "nearest" }: ScrollToSectionOptions = {},
): boolean {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  if (offset === 0) {
    element.scrollIntoView({ behavior, block, inline });
    return true;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior });
  return true;
}
