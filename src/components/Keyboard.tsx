import { MouseEventHandler } from 'react'

import { KEYBOARD, KeyboardState } from 'constants/keyboard'
import { KeyboardButton, Keys } from 'types/keyboard'

import styles from './Keyboard.module.scss'

const mapKeyboardStateToStyle = {
  [KeyboardState.NOT_PRESSED]: styles.notPressed,
  [KeyboardState.INCORRECT]: styles.incorrect,
  [KeyboardState.WRONG_POSITION]: styles.wrongPosition,
  [KeyboardState.CORRECT]: styles.correct,
}

const Keyboard = ({
  onClick,
  usedButtons,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>
  usedButtons: KeyboardButton
}) => {
  const getKeyboardStateStyle = (key: Keys): string | undefined => {
    if (!usedButtons || !key) return undefined
    return mapKeyboardStateToStyle[usedButtons[key]]
  }

  return (
    <div className={styles.keyboard_wrapper}>
      {KEYBOARD.map((row, i) => (
        <div
          className={[
            styles.row,
            i === 0 ? styles.firstRow : styles.otherRows,
          ].join(' ')}
          key={i}
        >
          {row.map((key) => (
            <button
              className={[styles.key, getKeyboardStateStyle(key)].join(' ')}
              onClick={onClick}
              key={key}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
