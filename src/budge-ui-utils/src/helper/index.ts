export const isEmpty = (value: any) => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    if (value instanceof Date) {
      return Number.isNaN(value.getTime());
    }

    return Object.keys(value).length === 0;
  }

  return false;
};
