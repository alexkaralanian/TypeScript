const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(100); // throws error

// help w map
carMakers.map((car: string): string => {
  return car;
});

// more than 1 type
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2020-05-05');
importantDates.push(12345); // throws error
