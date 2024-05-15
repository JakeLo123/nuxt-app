import { type InjectionKey } from "vue";

type Foo = {
  name: string;
  age: number;
  sayHi: () => void;
};

export const fooKey = Symbol("fookey") as InjectionKey<Foo>;
