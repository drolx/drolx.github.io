export const processTags = (value?: string): string[] => {
  if (value === undefined) return [];
  const items = value.split(",");

  return items.length > 7 ? items.slice(0, items.length - 1) : items;
};
