import { fooKey } from "~/injectionSymbols";

const useFoo = () => {
  return inject(fooKey);
};

export default useFoo;
