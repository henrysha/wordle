import { KeyboardState, KEYS } from 'constants/keyboard'
import { KeyboardButton } from 'types/keyboard'

export const getInitialKeyboardState = () => {
  const keyboardState: KeyboardButton = {
    '': KeyboardState.NOT_PRESSED,
    Q: KeyboardState.NOT_PRESSED,
    W: KeyboardState.NOT_PRESSED,
    E: KeyboardState.NOT_PRESSED,
    R: KeyboardState.NOT_PRESSED,
    T: KeyboardState.NOT_PRESSED,
    Y: KeyboardState.NOT_PRESSED,
    U: KeyboardState.NOT_PRESSED,
    I: KeyboardState.NOT_PRESSED,
    O: KeyboardState.NOT_PRESSED,
    P: KeyboardState.NOT_PRESSED,
    A: KeyboardState.NOT_PRESSED,
    S: KeyboardState.NOT_PRESSED,
    D: KeyboardState.NOT_PRESSED,
    F: KeyboardState.NOT_PRESSED,
    G: KeyboardState.NOT_PRESSED,
    H: KeyboardState.NOT_PRESSED,
    J: KeyboardState.NOT_PRESSED,
    K: KeyboardState.NOT_PRESSED,
    L: KeyboardState.NOT_PRESSED,
    ENTER: KeyboardState.NOT_PRESSED,
    Z: KeyboardState.NOT_PRESSED,
    X: KeyboardState.NOT_PRESSED,
    C: KeyboardState.NOT_PRESSED,
    V: KeyboardState.NOT_PRESSED,
    B: KeyboardState.NOT_PRESSED,
    N: KeyboardState.NOT_PRESSED,
    M: KeyboardState.NOT_PRESSED,
    DEL: KeyboardState.NOT_PRESSED,
  }

  return keyboardState
}
