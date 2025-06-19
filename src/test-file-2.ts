import type { File3Interface2 } from './test-file-3.ts';

export type SomeType = Record<string, string>;

export interface File2Interface1 extends Record<string, string> {}

export interface InterfaceToExtend {
  foo?: File3Interface2;
}
