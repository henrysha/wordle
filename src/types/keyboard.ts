import { KeyboardState, KEYS } from 'constants/keyboard'

export type KeyboardButton = {
  [key in Keys]: KeyboardState
}

export type Keys = typeof KEYS[number] | ''
