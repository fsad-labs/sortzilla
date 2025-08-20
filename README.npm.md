# @fsad-labs/sortzilla

<DESCRIPTION>  
A TypeScript/JavaScript library that provides classic **sorting algorithms** with a simple and object-oriented API.

---

## Installation

```bash
npm install @fsad-labs/sortzilla
```

---

## Usage

```ts
import { BubbleSort, QuickSort } from "@fsad-labs/sortzilla";

const bubbleSort = new BubbleSort();
const result = bubbleSort.sort([5, 3, 8, 1]);

console.log(result);        // [1, 3, 5, 8]
console.log(result.byDesc()); // [8, 5, 3, 1]
```

---

## Supported Algorithms

- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Counting Sort

---

## API

### Constructor Options

```ts
type SortProp = { ascending?: boolean };
```

👉 **QuickSort** also accepts `{ ipivot?: number }`.

### Method

```ts
sort(array: T[], field?: keyof T): T[] & IOrderSort<T>
```

Returns a sorted array with:

```ts
interface IOrderSort<T> {
  byDesc(): T[];
  byAsc(): T[];
}
```

---

## Example with Objects

```ts
import { MergeSort } from "@fsad-labs/sortzilla";

type User = { id: number; name: string };

const mergeSort = new MergeSort();
const result = mergeSort.sort(
  [
    { id: 3, name: "Alice" },
    { id: 1, name: "Bob" },
    { id: 2, name: "Charlie" },
  ],
  "id"
);

console.log(result);
// [{ id: 1, name: "Bob" }, { id: 2, name: "Charlie" }, { id: 3, name: "Alice" }]
```

---
## SPONSOR

If you like this package and want to support its development, you can [Buy Me a Coffee☕.](https://buymeacoffee.com/fullstack.ad)

## 📄 License
This project is licensed under the [MIT License](LICENSE) © [fullstack-ad](https://github.com/fullstack-ad)
