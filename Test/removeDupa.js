function removeDupa(arr) {
    return [...new Set(arr)];
}
      
console.log(removeDupa([1, 0, 1, 0]));
console.log(removeDupa(["the", "big", "cat"]));
console.log(removeDupa(["John", "Taylor", "John"]));