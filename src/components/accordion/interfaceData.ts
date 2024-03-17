import rawData from "./data";

interface EnforcedStructure<T, U, V> {
  id: T;
  question: U;
  answer: V;
}

const data: EnforcedStructure<string, string, string>[] = rawData;

export default data;
