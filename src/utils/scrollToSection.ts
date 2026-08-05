export interface ScrollToSectionOptions extends ScrollIntoViewOptions {
  offset?: number;
}

function getStickyHeaderOffset(): number {
  return document.querySelector<HTMLElement>("[data-site-header]")?.getBoundingClientRect().height ?? 0;
}

/** Smoothly scrolls to a section without coupling callers to DOM lookup details. */
export function scrollToSection(
  sectionId: string,
  { offset, behavior = "smooth", block = "start", inline = "nearest" }: ScrollToSectionOptions = {},
): boolean {
  const cleanId = sectionId.replace(/^[/#]+/, "");
  
  if (cleanId === "home" || cleanId === "") {
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  const element = document.getElementById(cleanId);
  if (!element) return false;

  const resolvedOffset = offset ?? getStickyHeaderOffset();
  if (resolvedOffset === 0) {
    element.scrollIntoView({ behavior, block, inline });
    return true;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - resolvedOffset;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}
