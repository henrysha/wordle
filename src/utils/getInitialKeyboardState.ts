import { KeyboardState, KEYS } from 'constants/keyboard'
import { KeyboardButton } from 'types/keyboard'

export const getInitialKeyboardState = () => {
  const keyboardState: KeyboardButton = {}

  KEYS.forEach((key) => (keyboardState[key] = KeyboardState.NOT_PRESSED))

  return keyboardState
}
