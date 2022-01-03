/*
 * Interfaces
 *  - Construction `interface`
 *  - Optional fields with `key?: value`
 *  - readonly fields with `readonly key: value`
 *  - Error when adding fields that do not exist in the interface
 * - Index signatures: arbitrary property object with values `[key: type]: type`
 * - Interface inheritance from extends
 *  - [interface vs type](https://pawelgrzybek.com/typescript-interface-vs-type/)
 */
interface IPluginConfig {
  readonly selector: string;
  perPage: number;
  startIndex?: number;
  draggable: boolean;
}

const config: IPluginConfig = {
  selector: "#plugin-1",
  perPage: 2,
  // startIndex: 0,
  draggable: false,
};

// When 'readonly' - error
// config.selector = 'some text'

interface IEmployees {
  [key: string]: number;
}

const employees: IEmployees = {
  mango: 50,
  poly: 10,
  ajax: 20,
};

console.log(config, employees);

export {};
