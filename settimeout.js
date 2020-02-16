console.log('settimeout first');

// Browser API (no multithreading)
setTimeout(
  () => {
    console.log('settimeout third');
  },
  1000 // could be 0 with still the same output
);

// Goes to task Queue
// gets executed when task queue is empty
console.log('settimeout second');
