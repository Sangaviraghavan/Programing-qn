function reverseArrayInPlace(arr) {
  // initialize left and right pointers
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  
  // loop until the pointers meet in the middle
  while (leftIndex < rightIndex) {
    // swap the elements at the left and right indices
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
    
    // move the pointers towards the middle
    leftIndex++;
    rightIndex--;
  }
  
  // the array is now reversed in place
  return arr;
}

// example usage
const myArray = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(myArray)); // prints [5, 4, 3, 2, 1]
