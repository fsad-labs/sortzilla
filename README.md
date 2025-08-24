# 🔢 @fsad-labs/sortzilla

[![npm version](https://img.shields.io/npm/v/@fsad-labs/sortzilla.svg)](https://www.npmjs.com/package/@fsad-labs/sortzilla)
[![License](https://img.shields.io/npm/l/@fsad-labs/sortzilla.svg)](LICENSE)

<DESCRIPTION>  
A TypeScript/JavaScript library that provides classic **sorting algorithms** with a clean, extensible, and object-oriented API.

---

## Installation

```bash
npm install @fsad-labs/sortzilla
# or
yarn add @fsad-labs/sortzilla
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

## Usage

Each algorithm is implemented as a **class**.  
You can create an instance and call the `sort` method.

### Example with Numbers

```ts
import { bubbleSort, quickSort } from '@fsad-labs/sortzilla';

const result = bubbleSort({ array: [5, 3, 8, 1] });
console.log(result); // [1, 3, 5, 8]

// Reuse helper functions
console.log(result.byDesc()); // [8, 5, 3, 1]
console.log(result.byAsc()); // [1, 3, 5, 8]
```

### Example with Strings

```ts
import { selectionSort } from '@fsad-labs/sortzilla';

const result = selectionSort({
  array: ['z', 'a', 'd', 'b'],
  ascending: false,
});

console.log(result); // ["z", "d", "b", "a"]
```

### Example with Objects

```ts
import { mergeSort } from '@fsad-labs/sortzilla';

type User = { id: number; name: string };

const result = mergeSort({
  array: [
    { id: 3, name: 'Alice' },
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Charlie' },
  ],
  field: 'id',
  ascending: true,
});

console.log(result);
// [{ id: 1, name: "Bob" }, { id: 2, name: "Charlie" }, { id: 3, name: "Alice" }]
```

---

## API

### Method

```ts
function bubbleSort<T extends SortTypes>(props: SortProps<T>);
```

### Params Options

### `sort(props: SortProps)`

```ts
type SortTypes = string | number | object;

interface SortProps<T extends SortTypes> {
  array: T[];
  field?: T extends object ? keyof T : undefined;
  ascending?: boolean;
}
```

--props:::

- `array` → input array (`number[] | string[] | object[]`).
- `field` → (optional) field key if sorting objects.
- `ascending` _(boolean, default: true)_ → sort order.

**QuickSort** accepts an additional option:

```ts
type QuickSortProp = SortProps<T> & { ipivot?: number };
```

- `ipivot` _(number, default: -1)_ → index for pivot selection (-1 = random).

---

Returns a sorted array with extra helpers:

```ts
interface IOrderSort<T> {
  byDesc(): T[];
  byAsc(): T[];
}
```

---

## Example Switching Order Without Re-Sorting

```ts
import { insertionSort } from '@fsad-labs/sortzilla';
const result = insertionSort({ array: [4, 2, 7, 1] });

console.log(result); // [1, 2, 4, 7]
console.log(result.byDesc()); // [7, 4, 2, 1]
```

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push and create a Pull Request

If my work has helped you or saved you some time, consider [Buy Me a Coffee☕.](https://buymeacoffee.com/drixev)
It keeps me energized and motivated to keep creating and improving.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) © [fullstack-ad](https://github.com/fullstack-ad)
