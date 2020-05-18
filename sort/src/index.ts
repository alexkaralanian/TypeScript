class Sorter {
  // collection: number[];

  // adding the 'public' keyword  to constructor params eliminates need to assign variable inside of contructor
  constructor(public collection: number[]) {
    this.collection = collection;
  }

  sort = (): number[] | string[] => {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const tmp = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = tmp;
        }
      }
    }
    return this.collection;
  };
}

const sorter = new Sorter([99, 1, 9, -4, 22]);
console.log(sorter.sort());
