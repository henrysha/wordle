import { Keys } from 'types/keyboard'

export enum KeyboardState {
  NOT_PRESSED,
  INCORRECT,
  WRONG_POSITION,
  CORRECT,
}

export const KEYS = {
  Q: 'Q',
  W: 'W',
  E: 'E',
  R: 'R',
  T: 'T',
  Y: 'Y',
  U: 'U',
  I: 'I',
  O: 'O',
  P: 'P',
  A: 'A',
  S: 'S',
  D: 'D',
  F: 'F',
  G: 'G',
  H: 'H',
  J: 'J',
  K: 'K',
  L: 'L',
  ENTER: 'ENTER',
  Z: 'Z',
  X: 'X',
  C: 'C',
  V: 'V',
  B: 'B',
  N: 'N',
  M: 'M',
  BACKSPACE: 'DEL',
}

export const KEYBOARD: Keys[][] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
]
