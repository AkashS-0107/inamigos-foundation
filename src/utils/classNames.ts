export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | { readonly [className: string]: boolean | null | undefined };

function collectClassNames(value: ClassValue): string[] {
  if (typeof value === "string" || typeof value === "number") return [String(value)];

  if (Array.isArray(value)) return value.flatMap(collectClassNames);

  if (value && typeof value === "object") {
    return Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([className]) => className);
  }

  return [];
}

export function classNames(...values: ClassValue[]): string {
  return values.flatMap(collectClassNames).join(" ");
}
