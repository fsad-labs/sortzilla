# @fsad-labs/sortzilla

<DESCRIPTION>  
A TypeScript/JavaScript library that provides classic **sorting algorithms** with a simple and function-oriented API.

---

## Installation

```bash
npm install @fsad-labs/sortzilla
```

---

## Usage

```ts
import { bubbleSort, quickSort } from '@fsad-labs/sortzilla';

const result = bubbleSort({ array: [5, 3, 8, 1] });

console.log([...result]); // [1, 3, 5, 8]
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

### Method

```ts
function bubbleSort<T extends SortTypes>(props: SortProps<T>);
```

### Params Options

### `sort(props: SortProps)`

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
import { mergeSort } from '@fsad-labs/sortzilla';

const result = mergeSort({
  array: [
    { id: 3, name: 'Alice' },
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Charlie' },
  ],
  field: 'id',
  ascending: true,
});

console.log([...result]);
// [{ id: 1, name: "Bob" }, { id: 2, name: "Charlie" }, { id: 3, name: "Alice" }]
```

---

## 🤝 Contributing

If my work has helped you or saved you some time, consider [Buy Me a Coffee☕.](https://buymeacoffee.com/drixev)
It keeps me energized and motivated to keep creating and improving.

## 📄 License

This project is licensed under the [MIT License](LICENSE) © [drixev](https://github.com/drixev)
