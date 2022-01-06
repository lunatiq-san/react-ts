/**
 * Generic-interfaces
 */

interface IUser<T> {
  id: T;
}

const mango: IUser<number> = { id: 24 };
const poly: IUser<string> = { id: "z2g6y" };

interface Tab<C> {
  id: string;
  position: number;
  active: boolean;
  content: C;
}

type TStringTab = Tab<string>;
type TStringArrayTab = Tab<string[]>;

const tab1: TStringTab = {
  id: "id-1",
  position: 2,
  active: false,
  content: "Tab data",
};

const tab2: TStringArrayTab = {
  id: "id-2",
  position: 4,
  active: true,
  content: ["content-1", "content-2"],
};

console.log(mango, poly, tab1, tab2);

export {};
