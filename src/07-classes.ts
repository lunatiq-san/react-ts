/*
 * Classes
 *  - typing and property declaration
 *  - default property values
 *  - public and private properties and methods
 *  - readonly properties
 *  - parameter properties +-
 *  - Static properties and methods
 *  - Class interface with implements
 */

interface Params {
  size: string;
  toppings: string[];
}

// Can't describe private properties, getters, setters
interface IPizza {
  size: string;
  // toppings: string[];
  addTopping(topping: string): void;
  // validateToppings(toppings: string): boolean;
}

class Pizza implements IPizza {
  static Sizes = 5;

  public size: string;
  private toppings: string[];

  constructor({ size, toppings = [] }: Params) {
    this.size = size;
    this.toppings = toppings;
  }

  private validateTopping(topping: string): boolean {
    console.log(topping);
    // validation

    return true;
  }

  public addTopping(topping: string) {
    console.log(this.validateTopping(topping));
    this.toppings.push(topping);
  }
}

const pizza: IPizza = new Pizza({ size: "medium", toppings: ["cheese"] });
console.log(pizza);
pizza.addTopping("que");
// toppings private - error. Access only in the class Pizza
// console.log(pizza.toppings);

export {};
