console.log('first');

// Browser API (no multithreading)
setTimeout(
  () => {
    console.log('third');
  },
  1000 // could be 0 with still the same output
);

// Goes to task Queue
// gets executed when task queue is empty
console.log('second');
