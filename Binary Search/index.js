// let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let items = Array.from(Array(10000).keys());

// console.log(items);

let count = 0;
function linearSearch(items, target) {
  for (let i = 0; i < items.length; i++) {
    count++;
    if (items[i] === target) {
      return true;
    }
  }
  return false;
}
// console.log(linearSearch(items, 8760));
// console.log(count);

function binarySearch(items, target, start, end) {
  count++;
  if (start > end) return false;
  let midIndex = Math.floor((start + end) / 2);
  if (items[midIndex] === target) return true;
  if (target > items[midIndex]) {
    return binarySearch(items, target, midIndex + 1, end);
  } else {
    return binarySearch(items, target, start, midIndex - 1);
  }
}

console.log(binarySearch(items, 8760, 0, items.length - 1));
console.log(count);
binarySearch(items, 8, 0, items.length);
