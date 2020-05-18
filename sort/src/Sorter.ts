export class Sorter {
  // collection: number[];

  // adding the 'public' keyword  to constructor params eliminates need to assign variable inside of contructor
  constructor(public collection: /*todo*/ ) {
    // this.collection = collection;
  }

  mapString = (string: string): string[] =>
    string.split('').map((char) => char.toUpperCase());

  sort = (): number[] | string[] => {
    const { length } = this.collection;
    let collection;

    if (typeof this.collection === 'string') {
      collection = this.mapString(this.collection);
    } else {
      collection = this.collection;
    }

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const tmp = this.collection[j];
          collection[j] = this.collection[j + 1];
          collection[j + 1] = tmp;
        }
      }
    }
    return collection;
  };
}
