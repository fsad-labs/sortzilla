export function validateArray<T>(input: T[], field?: keyof T): T[] {
  if (!field) {
    return input;
  }

  if (input.length === 0) {
    return [];
  }

  if (typeof field !== 'string') {
    throw new Error('Field must be a string.');
  }

  if (
    field &&
    !input.every((item) => item && typeof item === 'object' && field in item)
  ) {
    throw new Error(
      `Field "${field}" does not exist in all objects of the array.`,
    );
  }

  return input.slice();
}
