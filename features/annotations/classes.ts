class Vehicle {
  // public color: string;

  // constructor(color: string){
  //   // constructr gets called when object is instantiated.
  //   // initialize fields
  //   this.color = color;
  // }

  constructor(public color: string) {}

  private drive(): void {
    console.log('Vroom');
  }
  public startDrivingProcess(): void {
    this.drive();
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
    // references super (parent) class and its constructor properties
  }
  public honk(): void {
    console.log('Honk');
  }
}

const car1 = new Car(4, 'red');
car1.drive(); // throws error bc its private method
car1.startDrivingProcess(); // Calls drive privately
car1.honk();
