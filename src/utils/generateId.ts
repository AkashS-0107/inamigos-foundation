let sequence = 0;

/** Generates an opaque ID suitable for client-side relationships and DOM identifiers. */
export function generateId(prefix = "inamigos"): string {
  sequence += 1;
  const random = globalThis.crypto?.randomUUID?.() ?? `${Date.now().toString(36)}-${sequence}`;
  return `${prefix}-${random}`;
}
