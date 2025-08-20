export function getFieldValueByIndex<T, K extends keyof T>(
  array: T[],
  index: number,
  field: K,
): T[K] {
  return array[index][field];
}

export function getFieldValue<T, K extends keyof T>(
  element: T,
  field: K,
): T[K] {
  return element[field];
}

export function getCurrentValue<T>(value: T, field?: keyof T): T {
  return (field ? getFieldValue(value as T, field) : value) as T;
}
