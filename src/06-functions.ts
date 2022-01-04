/*
 * Functions
 *  - Typing parameters and return value
 *  - Optional parameters
 *  - rest-parameters
 *  - Function with no explicit return: type void
 *  - Function signature typing
 *    - through type
 *    - through interface
 *  - Typing object methods in an interface
 *    - key: () => type;
 *    - key() : type;
 *  - Optional methods in the interface
 */

type AddFn = (a: number, b: number) => number;

const addExpression: AddFn = function (x, y) {
  return x + y;
};
addExpression(2, 6);

const addArrow: AddFn = (x, y) => {
  return x + y;
};
addArrow(6, 8);

// - rest-parameters
// - Function signature typing
//    - through type
type Fn = (a: number, b: number, c: number, ...restParams: number[]) => void;
const fn: Fn = (a, b, c, ...restParams) => {};
fn(1, 2, 3, 5, 6, 7, 8);

// - Function with no explicit return: type void
type LogFn = (m: string) => number | void;
const log: LogFn = (message) => {
  console.log(message);
};
log("hello");

enum PizzaSize {
  Small = "s",
  Medium = "m",
  Large = "l",
  // size: "small" | "medium" | "large";
}
interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  // Old syntax
  // - Optional methods in the interface
  // logSize?: () => void;
  logSize?(): void;
  getSize(): PizzaSize;
  addToppings(topping: string): void;
}
const pizza: IPizza = {
  size: PizzaSize.Medium,
  toppings: ["sause", "mushrooms"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addToppings(topping) {
    this.toppings.push(topping);
  },
};

export {};
