import { KeyboardState, KEYS } from 'constants/keyboard'

export type Keys = keyof typeof KEYS

export type KeyboardButton = {
  [key in Keys]: KeyboardState
}
