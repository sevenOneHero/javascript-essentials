const hello = 'hello';
const world = 'world';

const prom = Promise.resolve(hello);

// Goes to microtask queue
prom.then(input => {
  console.log({ input, world });
});

console.log('first');
