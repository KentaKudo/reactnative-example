function* genItems() {
  let cnt = 0;

  while (true) {
    yield `item ${cnt++}`;
  }
}

const items = genItems();

const fetchItems = () =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        items: new Array(20).fill(null).map(() => items.next().value),
      }),
  });

export { fetchItems };
