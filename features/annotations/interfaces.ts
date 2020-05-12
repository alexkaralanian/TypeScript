const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const badCar = {
  name: 'civic',
  year: 2000,
  broken: 555, // incorrect type
  // missing summary() function
};

const printVehicle = ({
  name,
  year,
  broken,
}: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${name}`);
  console.log(`Name: ${year}`);
  console.log(`Name: ${broken}`);
};

// This is a realy lng annotation and can grow as object properties grow
// We can improve this code by usiing an interface

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const printVehicle2 = ({ name, year, broken, summary }: Vehicle): void => {
  console.log(`Name: ${name}`);
  console.log(`Name: ${year}`);
  console.log(`Name: ${broken}`);
  console.log(`Name: ${summary()}`);
};

printVehicle2(oldCivic);
printVehicle2(badCar); // throws error

interface Reportable {
  summary(): string;
}

const printSummary = ({ summary }: Reportable): void => {
  console.log(summary());
};

printSummary(oldCivic);
printSummary(badCar);

const myDrink = {
  color: 'brown',
  summary(): string {
    return `My Drink is ${this.color}`;
  },
};

printSummary(myDrink);

// INTERFACES ALLOWS US TO DESCRINBE VERY DIFFERENT OBJECTS THAT HAVE A FEW SIMILAR PROPERTIES.
// encourages more modular code resuse
