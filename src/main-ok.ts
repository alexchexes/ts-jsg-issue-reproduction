import type { InterfaceToExtend } from './test-file-2';

// IF WE UNCOMMENT THIS, ts-json-schema-generator STARTS GENERATING ALL OTHER INTERFACES FROM
// export type SomeInterface = Record<string, string | unknown>;

export interface MyObject extends InterfaceToExtend {
  foo: Record<string, string>;
}
