// goes to tasks queue
setTimeout(() => {
  console.log('3', 'just stack', 'third');
}, 0);

// Goes to microtask queue has higher priority than the tasks queue
Promise.resolve('hello').then(input => {
  console.log('2', 'microtask', 'second');
});

// goes directly to task queue
console.log('1', 'callstack', 'first');
