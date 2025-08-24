export function getFieldValueByIndex<T>(
  array: T[],
  index: number,
  field: keyof T,
): T[keyof T] {
  return array[index][field];
}

export function getFieldValue<T>(element: T, field: keyof T): T[keyof T] {
  return element[field];
}

export function getCurrentValue<T>(value: T, field?: keyof T): T {
  return (field ? getFieldValue(value as T, field) : value) as T;
}
