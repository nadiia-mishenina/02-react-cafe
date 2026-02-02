function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Явна типізація дженериків у викликах
getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]); // true

// ❌ TypeScript не дозволить змішані типи без відповідного типу
// getFirstElement<number>([1, "a", 3]); // помилка
// getFirstElement([1, "a", true]);      // помилка
