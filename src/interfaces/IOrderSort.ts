export interface IOrderSort<T> {
  byDesc(): T[];
  byAsc(): T[];
}
